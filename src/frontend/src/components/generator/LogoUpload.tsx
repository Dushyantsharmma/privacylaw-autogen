import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Image, Upload, X } from "lucide-react";
import type React from "react";
import { useRef } from "react";
import { useLogoUpload } from "../../hooks/useLogoUpload";

interface LogoUploadProps {
  logoDataUrl: string | null;
  logoFileName: string | null;
  error: string | null;
  onUpload: (file: File) => void;
  onRemove: () => void;
}

export function LogoUpload({
  logoDataUrl,
  logoFileName,
  error,
  onUpload,
  onRemove,
}: LogoUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) onUpload(file);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-foreground flex items-center gap-2">
        <Image className="h-4 w-4 text-primary" />
        Company Logo (PDF Export)
      </Label>

      {logoDataUrl ? (
        <div className="flex items-center gap-3 p-2 border border-border rounded-lg bg-muted/30">
          <img
            src={logoDataUrl}
            alt="Logo preview"
            className="h-10 w-auto max-w-[80px] object-contain rounded"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{logoFileName}</p>
            <p className="text-xs text-muted-foreground">
              Logo will appear on PDF export
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onRemove}
            className="h-7 w-7 text-muted-foreground hover:text-destructive"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="w-full flex items-center gap-2 px-3 py-2 border border-dashed border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          <Upload className="h-4 w-4" />
          Upload PNG or JPG logo
        </button>
      )}

      {error && <p className="text-xs text-destructive">{error}</p>}

      <input
        ref={fileInputRef}
        type="file"
        accept=".png,.jpg,.jpeg"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
