import Markdown from "react-markdown";

export const QuestMarkdown = ({ text }: { text: string; }) => (
    <div className="quest-body">
        <Markdown>{text}</Markdown>
    </div>
);

