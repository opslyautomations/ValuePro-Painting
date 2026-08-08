import type { ReactNode } from "react";
import Link from "next/link";

// Renders **bold** markers within a plain-text segment.
function renderBold(text: string, keyBase: string): ReactNode[] {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={`${keyBase}-b${i}`}>{part}</strong> : part
  );
}

// Renders a string containing [text](/path) links and **bold** markers.
function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = linkRegex.exec(text))) {
    if (match.index > lastIndex) {
      nodes.push(...renderBold(text.slice(lastIndex, match.index), `t${key}`));
    }
    nodes.push(
      <Link
        key={`l${key}`}
        href={match[2]}
        className="text-brand-teal font-semibold hover:underline"
      >
        {match[1]}
      </Link>
    );
    lastIndex = match.index + match[0].length;
    key += 1;
  }

  if (lastIndex < text.length) {
    nodes.push(...renderBold(text.slice(lastIndex), `t${key}`));
  }

  return nodes;
}

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ol"; items: string[] }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export function Prose({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-content space-y-4 text-ink-muted leading-relaxed">
      {blocks.map((block, i) => {
        if (block.type === "p") {
          return <p key={i}>{renderInline(block.text)}</p>;
        }
        if (block.type === "h3") {
          return (
            <h3 key={i} className="font-heading text-lg font-semibold text-ink pt-2">
              {block.text}
            </h3>
          );
        }
        if (block.type === "ol") {
          return (
            <ol key={i} className="list-decimal pl-5 space-y-2">
              {block.items.map((item, j) => (
                <li key={j}>{renderInline(item)}</li>
              ))}
            </ol>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="list-disc pl-5 space-y-2">
              {block.items.map((item, j) => (
                <li key={j}>{renderInline(item)}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={i}
              className="border-l-4 border-brand-green pl-4 italic text-ink-muted"
            >
              {renderInline(block.text)}
            </blockquote>
          );
        }
        return null;
      })}
    </div>
  );
}
