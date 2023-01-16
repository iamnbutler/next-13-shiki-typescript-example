import { getHighlighter } from "shiki";

const highlighterPromise = getHighlighter({
  theme: "nord",
  langs: ["javascript", "python"],
});

export async function highlight(code: string, language: string) {
  const highlighter = await highlighterPromise;
  const output = highlighter.codeToHtml(code, { lang: language });
  return output;
}
