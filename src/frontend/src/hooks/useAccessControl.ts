import { useEffect, useState } from "react";

const STORAGE_KEY = "privacylaw_access";
const VALID_TOKEN = "PRIVACY2026";

export function useAccessControl() {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [isChecking, setIsChecking] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "true") {
      setIsUnlocked(true);
    }
    setIsChecking(false);
  }, []);

  const unlock = (token: string): boolean => {
    if (token.trim().toUpperCase() === VALID_TOKEN) {
      localStorage.setItem(STORAGE_KEY, "true");
      setIsUnlocked(true);
      setError("");
      return true;
    }
    setError("Invalid access code. Please check your code and try again.");
    return false;
  };

  const lock = () => {
    localStorage.removeItem(STORAGE_KEY);
    setIsUnlocked(false);
  };

  return { isUnlocked, isChecking, error, unlock, lock };
}
