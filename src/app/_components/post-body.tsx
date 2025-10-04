import markdownStyles from "./markdown-styles.module.css";
import { Noto_Sans_Display } from "next/font/google";
import classNames from "classnames";

const notoSans = Noto_Sans_Display();

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={classNames(markdownStyles["markdown"], notoSans.className)}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
