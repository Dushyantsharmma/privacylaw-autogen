import { useCallback, useState } from "react";

export function useLogoUpload() {
  const [logoDataUrl, setLogoDataUrl] = useState<string | null>(null);
  const [logoFileName, setLogoFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const uploadLogo = useCallback((file: File) => {
    setError(null);
    const validTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      setError("Please upload a PNG or JPG/JPEG file.");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setError("File size must be under 2MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setLogoDataUrl(result);
      setLogoFileName(file.name);
    };
    reader.readAsDataURL(file);
  }, []);

  const removeLogo = useCallback(() => {
    setLogoDataUrl(null);
    setLogoFileName(null);
    setError(null);
  }, []);

  return { logoDataUrl, logoFileName, error, uploadLogo, removeLogo };
}
