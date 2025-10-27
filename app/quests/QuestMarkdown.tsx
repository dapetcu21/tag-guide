import Markdown from "react-markdown";

import "./QuestMarkdown.css";

export const QuestMarkdown = ({ text }: { text: string }) => (
  <div className="quest-body">
    <Markdown>{text}</Markdown>
  </div>
);
