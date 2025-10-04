import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";
import { Noto_Sans_Display } from "next/font/google";
import classNames from "classnames";

const notoSans = Noto_Sans_Display({ subsets: ["latin"] });

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div>
      <h3 className={classNames("text-3xl mb-3 leading-snug text-rose-900", notoSans.className)}>
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className={classNames("text-lg leading-relaxed mb-4", notoSans.className)}>{excerpt}</p>
    </div>
  );
}
