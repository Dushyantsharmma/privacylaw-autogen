import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useInternetIdentity } from "@/hooks/useInternetIdentity";
import { ArrowRight, Loader2, Lock, Shield } from "lucide-react";

interface AccessGateProps {
  children: React.ReactNode;
  onNavigateToPricing?: () => void;
}

export function AccessGate({ children, onNavigateToPricing }: AccessGateProps) {
  const { identity, login, isLoggingIn, isInitializing } =
    useInternetIdentity();

  const isLoggedIn = !!identity && !identity.getPrincipal().isAnonymous();

  if (isInitializing) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Loader2 className="h-4 w-4 animate-spin" />
          Loading...
        </div>
      </div>
    );
  }

  if (isLoggedIn) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
              <Lock className="h-7 w-7 text-primary" />
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-2">Sign In to Continue</h1>
          <p className="text-muted-foreground text-sm max-w-xs mx-auto">
            Create your free account to start generating privacy policies
            instantly.
          </p>
        </div>

        <Card className="border-border/60 shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-base flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              PrivacyLaw AutoGen
            </CardTitle>
            <CardDescription className="text-xs">
              Sign in with Internet Identity — no password required. Free plan
              gives you 3 policy generations/month.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Main CTA */}
            <Button
              className="w-full gap-2 font-semibold"
              size="lg"
              onClick={login}
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  <Shield className="h-4 w-4" />
                  Sign In Free
                </>
              )}
            </Button>

            <div className="rounded-lg bg-muted/50 border border-border/40 p-3 space-y-1.5">
              <p className="text-xs font-medium text-foreground/80">
                Free plan includes:
              </p>
              <ul className="space-y-1">
                {[
                  "3 policy generations per month",
                  "GDPR + UK DPA 2018 frameworks",
                  "Copy to clipboard export",
                  "No credit card required",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <span className="text-success">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-1 border-t border-border/40">
              <p className="text-xs text-muted-foreground text-center mb-2">
                Need more features?
              </p>
              <button
                type="button"
                onClick={onNavigateToPricing}
                className="w-full flex items-center justify-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors font-medium py-1"
              >
                View pricing plans
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground mt-4">
          Secure login powered by{" "}
          <span className="font-medium">Internet Identity</span> on the Internet
          Computer
        </p>
      </div>
    </div>
  );
}
