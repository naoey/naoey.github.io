import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { Intro } from "@/app/_components/intro";
import DateFormatter from "@/app/_components/date-formatter";
import { HeroPost } from "@/app/_components/hero-post";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Intro />
      <HeroPost title={post.title} coverImage={post.ogImage?.url} slug={post.slug} />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[minmax(max-content,_300px)_1fr] gap-6">
          <div className="text-center md:text-right">
            <h4 className="font-bold text-xl md:text-2xl mt-[3rem] text-rose-600 dark:text-rose-900">{post.author.name}</h4>
            <p className="mt-0 text-sm md:text-base">
              <DateFormatter dateString={post.date} />
            </p>
          </div>
          <article className="mb-32">
            <PostBody content={content} />
          </article>
        </div>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Letters to the Stars`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage?.url].filter(Boolean),
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
