import { Badge } from "@/components/ui/badge";
import { Calendar, Shield } from "lucide-react";
import React from "react";

interface VersionBadgeProps {
  frameworkName: string;
  version?: string;
  lastReviewed?: string;
}

export function VersionBadge({
  frameworkName,
  version,
  lastReviewed,
}: VersionBadgeProps) {
  const reviewDate = lastReviewed
    ? new Date(lastReviewed).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : null;

  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      <Badge variant="secondary" className="text-xs gap-1 py-0.5">
        <Shield className="h-3 w-3" />
        {frameworkName}
        {version && ` v${version}`}
      </Badge>
      {reviewDate && (
        <Badge variant="outline" className="text-xs gap-1 py-0.5">
          <Calendar className="h-3 w-3" />
          Reviewed {reviewDate}
        </Badge>
      )}
    </div>
  );
}
