import { useCallback, useState } from "react";
import { getFrameworkVersions } from "../lib/documentEngine";
import type {
  DocumentInputs,
  DocumentType,
  SavedDraft,
} from "../types/documentTypes";

const STORAGE_KEY = "privacylaw-drafts";

function loadFromStorage(): SavedDraft[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as SavedDraft[];
  } catch {
    return [];
  }
}

function saveToStorage(drafts: SavedDraft[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(drafts));
  } catch {
    // Storage full or unavailable
  }
}

export function useSavedDrafts() {
  const [drafts, setDrafts] = useState<SavedDraft[]>(() => loadFromStorage());

  const saveDraft = useCallback(
    (
      name: string,
      inputs: DocumentInputs,
      documentType: DocumentType = "privacy-policy",
    ) => {
      const frameworks =
        inputs.selectedFrameworks?.length > 0
          ? inputs.selectedFrameworks
          : ["gdpr"];
      const draftVersion = getFrameworkVersions(frameworks);

      const newDraft: SavedDraft = {
        id: `draft-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        name,
        timestamp: Date.now(),
        inputs,
        documentType,
        draftVersion,
      };

      setDrafts((prev) => {
        const updated = [newDraft, ...prev];
        saveToStorage(updated);
        return updated;
      });

      return newDraft;
    },
    [],
  );

  const loadDraft = useCallback(
    (id: string): SavedDraft | undefined => {
      return drafts.find((d) => d.id === id);
    },
    [drafts],
  );

  const deleteDraft = useCallback((id: string) => {
    setDrafts((prev) => {
      const updated = prev.filter((d) => d.id !== id);
      saveToStorage(updated);
      return updated;
    });
  }, []);

  const listDrafts = useCallback((): SavedDraft[] => {
    return drafts;
  }, [drafts]);

  return { drafts, saveDraft, loadDraft, deleteDraft, listDrafts };
}
