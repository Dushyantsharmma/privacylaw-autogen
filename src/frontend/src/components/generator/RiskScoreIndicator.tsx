import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import type { RiskScore } from "@/types/documentTypes";
import { ShieldAlert, ShieldCheck, ShieldX } from "lucide-react";

interface RiskScoreIndicatorProps {
  riskScore: RiskScore;
}

export function RiskScoreIndicator({ riskScore }: RiskScoreIndicatorProps) {
  const { score, level, factors } = riskScore;

  const config = {
    Low: {
      icon: ShieldCheck,
      colorClass: "text-success",
      bgClass: "bg-success/10 border-success/20",
      barClass: "[&>div]:bg-success",
      label: "Low Risk",
    },
    Medium: {
      icon: ShieldAlert,
      colorClass: "text-warning",
      bgClass: "bg-warning/10 border-warning/20",
      barClass: "[&>div]:bg-warning",
      label: "Medium Risk",
    },
    High: {
      icon: ShieldX,
      colorClass: "text-destructive",
      bgClass: "bg-destructive/10 border-destructive/20",
      barClass: "[&>div]:bg-destructive",
      label: "High Risk",
    },
  }[level];

  const Icon = config.icon;

  return (
    <Card className={cn("border", config.bgClass)}>
      <CardContent className="px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Icon className={cn("h-4 w-4", config.colorClass)} />
            <span className="text-xs font-semibold">Risk Score</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={cn("text-sm font-bold", config.colorClass)}>
              {score}
            </span>
            <span
              className={cn(
                "text-xs font-semibold px-2 py-0.5 rounded-full border",
                config.bgClass,
                config.colorClass,
              )}
            >
              {config.label}
            </span>
          </div>
        </div>
        <Progress value={score} className={cn("h-1.5", config.barClass)} />
        {factors.length > 0 && (
          <div className="mt-2 space-y-0.5">
            {factors.slice(0, 3).map((factor) => (
              <p
                key={factor}
                className="text-xs text-muted-foreground flex items-center gap-1"
              >
                <span className="text-destructive">•</span> {factor}
              </p>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
