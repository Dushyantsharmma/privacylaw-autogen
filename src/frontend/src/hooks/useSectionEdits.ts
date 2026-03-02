import { useCallback, useState } from "react";
import type { ClauseSection, MergedDocument } from "../types/documentTypes";

type EditMap = Record<string, string>;

export function useSectionEdits() {
  const [editMap, setEditMap] = useState<EditMap>({});

  const editSection = useCallback((sectionId: string, newContent: string) => {
    setEditMap((prev) => ({ ...prev, [sectionId]: newContent }));
  }, []);

  const resetSection = useCallback((sectionId: string) => {
    setEditMap((prev) => {
      const next = { ...prev };
      delete next[sectionId];
      return next;
    });
  }, []);

  const clearAllEdits = useCallback(() => {
    setEditMap({});
  }, []);

  const getEditedDocument = useCallback(
    (originalDoc: MergedDocument): MergedDocument => {
      function applyEdits(section: ClauseSection): ClauseSection {
        const edited = editMap[section.id];
        return {
          ...section,
          isEdited: edited !== undefined,
          editedContent: edited,
          content: section.content,
          subsections: section.subsections?.map(applyEdits),
        };
      }

      return {
        ...originalDoc,
        sections: originalDoc.sections.map(applyEdits),
      };
    },
    [editMap],
  );

  const isEdited = useCallback(
    (sectionId: string): boolean => {
      return sectionId in editMap;
    },
    [editMap],
  );

  const getEditedContent = useCallback(
    (sectionId: string): string | undefined => {
      return editMap[sectionId];
    },
    [editMap],
  );

  return {
    editSection,
    resetSection,
    clearAllEdits,
    getEditedDocument,
    isEdited,
    getEditedContent,
    hasEdits: Object.keys(editMap).length > 0,
  };
}
