import markdownStyles from "./markdown-styles.module.css";
import classNames from "classnames";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className={classNames(markdownStyles["markdown"])} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
