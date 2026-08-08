import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeExternalLinks from "rehype-external-links";
import { ExternalLink, IconNode } from "lucide";
import type { Element as HastElement } from "hast";

function createLucideHast(iconNode: IconNode, className: string = "lucide-external-link"): HastElement {
  return {
    type: "element",
    tagName: "svg",
    properties: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: "display: inline-block; vertical-align: -0.125em; margin-left: 0.2em;",
      className: ["lucide", className],
    },
    children: iconNode.map(([tagName, attrs]) => ({
      type: "element",
      tagName,
      properties: attrs,
      children: [],
    })),
  };
}

export default async function markdownToHtml(markdown: string) {
  const lucideIconHast = createLucideHast(ExternalLink);

  const result = await remark()
    .use(html)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypePrettyCode, { theme: { dark: "rose-pine-moon", light: "rose-pine-dawn" }, keepBackground: true })
    .use(rehypeExternalLinks, {
      target: "_blank",
      rel: ["noopener", "noreferrer"],
      content: lucideIconHast,
    })
    .process(markdown);
  return result.toString();
}
