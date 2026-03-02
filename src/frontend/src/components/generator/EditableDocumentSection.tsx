import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Check, Pencil, RotateCcw } from "lucide-react";
import React, { useState } from "react";
import type { ClauseSection } from "../../types/documentTypes";

interface EditableDocumentSectionProps {
  section: ClauseSection;
  depth?: number;
  onEdit: (sectionId: string, content: string) => void;
  onReset: (sectionId: string) => void;
  isEdited: boolean;
  editedContent?: string;
}

export function EditableDocumentSection({
  section,
  depth = 0,
  onEdit,
  onReset,
  isEdited,
  editedContent,
}: EditableDocumentSectionProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState("");
  const [hovered, setHovered] = useState(false);

  const displayContent =
    isEdited && editedContent !== undefined ? editedContent : section.content;

  function startEdit() {
    setDraft(displayContent);
    setEditing(true);
  }

  function saveEdit() {
    onEdit(section.id, draft);
    setEditing(false);
  }

  function cancelEdit() {
    setEditing(false);
    setDraft("");
  }

  const HeadingTag = depth === 0 ? "h3" : depth === 1 ? "h4" : "h5";
  const headingClass =
    depth === 0
      ? "text-base font-semibold text-foreground mt-6 mb-2"
      : depth === 1
        ? "text-sm font-semibold text-foreground mt-4 mb-1.5"
        : "text-sm font-medium text-foreground mt-3 mb-1";

  return (
    <div
      className={`group relative ${depth > 0 ? "ml-4 pl-3 border-l border-border/50" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-start gap-2">
        <HeadingTag className={`${headingClass} flex-1`}>
          {section.title}
          {isEdited && (
            <Badge
              variant="secondary"
              className="ml-2 text-xs py-0 align-middle"
            >
              Edited
            </Badge>
          )}
        </HeadingTag>
        {!editing && (hovered || isEdited) && (
          <div className="flex items-center gap-1 mt-1 shrink-0 no-print">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-muted-foreground hover:text-primary"
              onClick={startEdit}
              title="Edit section"
            >
              <Pencil className="h-3.5 w-3.5" />
            </Button>
            {isEdited && (
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-muted-foreground hover:text-destructive"
                onClick={() => onReset(section.id)}
                title="Reset to original"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </Button>
            )}
          </div>
        )}
      </div>

      {editing ? (
        <div className="space-y-2 mt-1">
          <Textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            className="min-h-[120px] text-sm font-mono"
            autoFocus
          />
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={saveEdit}
              className="gap-1.5 h-7 text-xs"
            >
              <Check className="h-3 w-3" />
              Save
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={cancelEdit}
              className="h-7 text-xs"
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
          {displayContent}
        </div>
      )}

      {section.subsections?.map((sub) => (
        <EditableDocumentSection
          key={sub.id}
          section={sub}
          depth={depth + 1}
          onEdit={onEdit}
          onReset={onReset}
          isEdited={false}
          editedContent={undefined}
        />
      ))}
    </div>
  );
}
