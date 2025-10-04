import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { Intro } from "@/app/_components/intro";
import styled from "styled-components";

const PostLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
    
  @screen md {
    grid-template-columns: 1fr 2fr;
  }
`;

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
      <Container>
        <PostLayout>
          <div>
            <p>{post.author.name}</p>
            <p>{post.date}</p>
          </div>
          <article className="mb-32">
            {/*<PostHeader*/}
            {/*  title={post.title}*/}
            {/*  coverImage={post.coverImage}*/}
            {/*  date={post.date}*/}
            {/*  author={post.author}*/}
            {/*/>*/}
            <PostBody content={content} />
          </article>
        </PostLayout>
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

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
