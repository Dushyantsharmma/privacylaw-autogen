import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

interface ValidationAlertProps {
  missingFields: string[];
}

export function ValidationAlert({ missingFields }: ValidationAlertProps) {
  if (missingFields.length === 0) return null;

  return (
    <Alert variant="destructive" className="mb-4">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle className="text-sm font-semibold">
        Required fields missing
      </AlertTitle>
      <AlertDescription className="text-xs mt-1">
        <span>
          Please fill in the following fields to complete your policy:
        </span>
        <ul className="mt-1.5 space-y-0.5 list-disc list-inside">
          {missingFields.map((field) => (
            <li key={field}>{field}</li>
          ))}
        </ul>
      </AlertDescription>
    </Alert>
  );
}
