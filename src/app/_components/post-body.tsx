import classNames from "classnames";
import { JetBrains_Mono } from "next/font/google";

import markdownStyles from "./markdown-styles.module.css";

const codeFont = JetBrains_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--code-font",
  subsets: ["latin"],
});

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className={classNames(markdownStyles["markdown"], codeFont.variable)} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
