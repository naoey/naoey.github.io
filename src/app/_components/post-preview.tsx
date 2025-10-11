import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";
import classNames from "classnames";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({ title, coverImage, date, excerpt, author, slug }: Props) {
  return (
    <div>
      <h3 className={classNames("text-2xl leading-snug text-rose-900")}>
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>

      <div className="mb-4">
        <DateFormatter dateString={date} />
      </div>
      {coverImage ? <img src={coverImage} className="w-full object-contain" /> : null}
      <p className={classNames("leading-relaxed mb-4")}>{excerpt}</p>
    </div>
  );
}
