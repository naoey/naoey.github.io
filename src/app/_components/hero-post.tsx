import CoverImage from "@/app/_components/cover-image";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  slug: string;
};

export function HeroPost({ title, coverImage, slug }: Props) {
  return (
    <section className="mx-auto">
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <h3 className="mb-4 text-4xl lg:text-5xl font-bold text-rose-900 text-center">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
    </section>
  );
}
