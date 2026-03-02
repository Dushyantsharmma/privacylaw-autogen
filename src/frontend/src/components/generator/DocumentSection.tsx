import type { ClauseSection } from "@/types/documentTypes";

interface DocumentSectionProps {
  section: ClauseSection;
  depth?: number;
}

export function DocumentSection({ section, depth = 0 }: DocumentSectionProps) {
  const renderContent = (content: string) => {
    return content.split("\n").map((line) => {
      if (!line.trim()) return null;
      return (
        <p
          key={line}
          className="mb-2 text-sm leading-relaxed text-foreground/85"
        >
          {line}
        </p>
      );
    });
  };

  if (depth === 0) {
    return (
      <div className="mb-6">
        <h2 className="text-base font-bold text-foreground mb-2 pb-1.5 border-b border-border/60">
          {section.title}
        </h2>
        {section.content && (
          <div className="mt-2">{renderContent(section.content)}</div>
        )}
        {section.subsections && section.subsections.length > 0 && (
          <div className="mt-3 space-y-3 pl-3 border-l-2 border-primary/10">
            {section.subsections.map((sub) => (
              <DocumentSection key={sub.id} section={sub} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="mb-3">
      <h3 className="text-sm font-semibold text-foreground/90 mb-1.5">
        {section.title}
      </h3>
      {section.content && (
        <div className="pl-3">{renderContent(section.content)}</div>
      )}
      {section.subsections && section.subsections.length > 0 && (
        <div className="mt-2 space-y-2 pl-3">
          {section.subsections.map((sub) => (
            <DocumentSection key={sub.id} section={sub} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
