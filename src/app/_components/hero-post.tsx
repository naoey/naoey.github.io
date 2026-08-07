import CoverImage from "@/app/_components/cover-image";
import Link from "next/link";
import DateFormatter from "@/app/_components/date-formatter";

type Props = {
  title: string;
  coverImage?: string;
  slug: string;
  timestamp?: string;
};

export function HeroPost({ title, coverImage, slug, timestamp }: Props) {
  return (
    <section className="mx-auto">
      {coverImage ? (
        <div className="mb-8 md:mb-16">
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div>
      ) : null}
      <h1 className="mt-16 mb-4 text-4xl lg:text-5xl font-extrabold text-center">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h1>
      {timestamp ? (
        <p className="text-center">
          <DateFormatter dateString={timestamp} />
        </p>
      ) : null}
    </section>
  );
}
