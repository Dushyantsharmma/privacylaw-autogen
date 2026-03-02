import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useInternetIdentity } from "@/hooks/useInternetIdentity";
import { useSubscription } from "@/hooks/useSubscription";
import { PLAN_BADGE_STYLES } from "@/lib/planConfig";
import {
  BookOpen,
  FileText,
  LayoutDashboard,
  LogIn,
  LogOut,
  Menu,
  ScanLine,
  Shield,
} from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

type Page = "landing" | "generator" | "dashboard" | "inspector" | "blog";

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { identity, login, clear, isLoggingIn } = useInternetIdentity();
  const { planTier, isLoading: subLoading } = useSubscription();

  const isLoggedIn = !!identity && !identity.getPrincipal().isAnonymous();

  const navLinks = [
    { label: "Features", href: "#features", page: "landing" as const },
    { label: "Pricing", href: "#pricing", page: "landing" as const },
    { label: "FAQ", href: "#faq", page: "landing" as const },
  ];

  const handleNavClick = (
    href: string,
    page: "landing" | "generator" | "dashboard" | "blog",
  ) => {
    if (page === "landing" && currentPage !== "landing") {
      onNavigate("landing");
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const handleSignOut = () => {
    clear();
    onNavigate("landing");
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <button
          type="button"
          onClick={() => onNavigate("landing")}
          className="flex items-center gap-2.5 group"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Shield className="h-4 w-4 text-primary" />
          </div>
          <span className="font-bold text-base tracking-tight">
            PrivacyLaw <span className="text-primary">AutoGen</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleNavClick(link.href, link.page)}
              className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => onNavigate("inspector")}
            className={`px-3 py-1.5 text-sm font-medium transition-colors rounded-md flex items-center gap-1.5 ${
              currentPage === "inspector"
                ? "text-foreground bg-accent"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            }`}
          >
            <ScanLine className="h-3.5 w-3.5 text-emerald-500" />
            AI Inspector
            <Badge className="text-[9px] px-1 py-0 h-4 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 ml-0.5">
              AI
            </Badge>
          </button>
          <button
            type="button"
            onClick={() => onNavigate("blog")}
            data-ocid="nav.blog.link"
            className={`px-3 py-1.5 text-sm font-medium transition-colors rounded-md flex items-center gap-1.5 ${
              currentPage === "blog"
                ? "text-foreground bg-accent"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            Blog
          </button>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {isLoggedIn ? (
            <>
              {/* Plan badge */}
              {!subLoading && (
                <span
                  className={`hidden md:inline-flex text-xs px-2.5 py-1 rounded-full font-medium ${PLAN_BADGE_STYLES[planTier]}`}
                >
                  {planTier.charAt(0).toUpperCase() + planTier.slice(1)}
                </span>
              )}

              {/* User dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hidden md:flex gap-1.5 h-8"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Shield className="h-3.5 w-3.5 text-primary" />
                    </div>
                    Account
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem
                    onClick={() => onNavigate("dashboard")}
                    className="gap-2"
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    My Plan
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => onNavigate("generator")}
                    className="gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    Generate Policy
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => onNavigate("inspector")}
                    className="gap-2"
                  >
                    <ScanLine className="h-4 w-4 text-emerald-500" />
                    AI Inspector
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleSignOut}
                    className="gap-2 text-destructive focus:text-destructive"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                size="sm"
                onClick={() => onNavigate("generator")}
                className="hidden md:flex gap-1.5 items-center"
              >
                <FileText className="h-3.5 w-3.5" />
                Generate
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={login}
                disabled={isLoggingIn}
                className="hidden md:flex gap-1.5 items-center"
              >
                <LogIn className="h-3.5 w-3.5" />
                {isLoggingIn ? "Signing in..." : "Sign In"}
              </Button>
              <Button
                size="sm"
                onClick={() => onNavigate("generator")}
                className="hidden md:flex gap-1.5 items-center"
              >
                <FileText className="h-3.5 w-3.5" />
                Start Free
              </Button>
            </>
          )}

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="font-bold">PrivacyLaw AutoGen</span>
                </div>
                {navLinks.map((link) => (
                  <SheetClose key={link.label} asChild>
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.href, link.page)}
                      className="text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                    >
                      {link.label}
                    </button>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate("inspector");
                      setMobileOpen(false);
                    }}
                    className="flex items-center gap-2 text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                  >
                    <ScanLine className="h-4 w-4 text-emerald-500" />
                    AI Inspector
                    <Badge className="text-[9px] px-1 py-0 h-4 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30">
                      AI
                    </Badge>
                  </button>
                </SheetClose>
                <SheetClose asChild>
                  <button
                    type="button"
                    data-ocid="nav.blog.link"
                    onClick={() => {
                      onNavigate("blog");
                      setMobileOpen(false);
                    }}
                    className="flex items-center gap-2 text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                  >
                    <BookOpen className="h-4 w-4" />
                    Blog
                  </button>
                </SheetClose>

                <div className="border-t border-border/40 pt-3 space-y-2">
                  {isLoggedIn ? (
                    <>
                      {!subLoading && (
                        <div className="px-3 py-1">
                          <span
                            className={`text-xs px-2.5 py-1 rounded-full font-medium ${PLAN_BADGE_STYLES[planTier]}`}
                          >
                            {planTier.charAt(0).toUpperCase() +
                              planTier.slice(1)}{" "}
                            Plan
                          </span>
                        </div>
                      )}
                      <SheetClose asChild>
                        <button
                          type="button"
                          onClick={() => onNavigate("dashboard")}
                          className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                        >
                          <LayoutDashboard className="h-4 w-4" />
                          My Plan
                        </button>
                      </SheetClose>
                      <SheetClose asChild>
                        <Button
                          onClick={() => onNavigate("generator")}
                          className="w-full"
                          size="sm"
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Generate Policy
                        </Button>
                      </SheetClose>
                      <SheetClose asChild>
                        <Button
                          variant="ghost"
                          onClick={handleSignOut}
                          className="w-full text-destructive hover:text-destructive"
                          size="sm"
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          Sign Out
                        </Button>
                      </SheetClose>
                    </>
                  ) : (
                    <>
                      <SheetClose asChild>
                        <Button
                          variant="outline"
                          onClick={login}
                          className="w-full"
                          size="sm"
                          disabled={isLoggingIn}
                        >
                          <LogIn className="h-4 w-4 mr-2" />
                          Sign In
                        </Button>
                      </SheetClose>
                      <SheetClose asChild>
                        <Button
                          onClick={() => onNavigate("generator")}
                          className="w-full"
                          size="sm"
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Start Free
                        </Button>
                      </SheetClose>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
