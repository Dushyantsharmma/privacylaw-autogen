import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import type { ComplianceItem } from "@/types/documentTypes";
import { AlertCircle, CheckCircle2, ChevronDown, XCircle } from "lucide-react";
import { useState } from "react";

interface ComplianceChecklistProps {
  items: ComplianceItem[];
}

function StatusIcon({ status }: { status: ComplianceItem["status"] }) {
  if (status === "pass")
    return <CheckCircle2 className="h-4 w-4 text-success shrink-0" />;
  if (status === "fail")
    return <XCircle className="h-4 w-4 text-destructive shrink-0" />;
  return <AlertCircle className="h-4 w-4 text-warning shrink-0" />;
}

export function ComplianceChecklist({ items }: ComplianceChecklistProps) {
  const [open, setOpen] = useState(true);
  const visibleItems = items.filter((i) => i.visible);
  const passCount = visibleItems.filter((i) => i.status === "pass").length;
  const total = visibleItems.length;

  return (
    <Card className="border-border/60">
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="pb-3 pt-4 px-4 cursor-pointer hover:bg-muted/30 transition-colors rounded-t-lg">
            <CardTitle className="text-sm font-semibold flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Compliance Checklist
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "text-xs font-mono px-2 py-0.5 rounded-full",
                    passCount === total
                      ? "bg-success/10 text-success"
                      : passCount >= total * 0.6
                        ? "bg-warning/10 text-warning"
                        : "bg-destructive/10 text-destructive",
                  )}
                >
                  {passCount}/{total}
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-muted-foreground transition-transform",
                    open && "rotate-180",
                  )}
                />
              </div>
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="px-4 pb-4 pt-0">
            <div className="space-y-2">
              {visibleItems.map((item) => (
                <div
                  key={item.id}
                  className={cn(
                    "flex items-start gap-2.5 p-2.5 rounded-md text-xs transition-colors",
                    item.status === "pass" &&
                      "bg-success/5 border border-success/15",
                    item.status === "fail" &&
                      "bg-destructive/5 border border-destructive/15",
                    item.status === "warning" &&
                      "bg-warning/5 border border-warning/15",
                  )}
                >
                  <StatusIcon status={item.status} />
                  <div className="min-w-0">
                    <p
                      className={cn(
                        "font-medium leading-tight",
                        item.status === "pass" && "text-success",
                        item.status === "fail" && "text-destructive",
                        item.status === "warning" && "text-warning",
                      )}
                    >
                      {item.label}
                    </p>
                    <p className="text-muted-foreground mt-0.5 leading-tight">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
