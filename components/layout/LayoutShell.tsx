import { Container } from "@/components/ui/container";
import Link from "next/link";

interface LayoutShellProps {
    children: React.ReactNode;
}

export function LayoutShell({ children }: LayoutShellProps) {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <Container className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-xl font-bold text-foreground">
                            Pure Water Solutions
                        </span>
                    </Link>

                    {/* Navigation - placeholder */}
                    <nav className="hidden items-center gap-6 md:flex">
                        <a
                            href="#about"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            About
                        </a>
                        <a
                            href="#services"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Services
                        </a>
                        <a
                            href="#contact"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Contact
                        </a>
                    </nav>

                    {/* CTA Button - placeholder */}
                    <a
                        href="#contact"
                        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                        Free Water Test
                    </a>
                </Container>
            </header>

            {/* Main Content */}
            <main className="flex-1">{children}</main>

            {/* Footer */}
            <footer className="border-t border-border bg-muted/50">
                <Container className="py-8">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        {/* Copyright */}
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Pure Water Solutions.
                            All rights reserved.
                        </p>

                        {/* Footer Nav */}
                        <nav className="flex items-center gap-4">
                            <a
                                href="#privacy"
                                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                Privacy
                            </a>
                            <a
                                href="#terms"
                                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                Terms
                            </a>
                        </nav>
                    </div>
                </Container>
            </footer>
        </div>
    );
}
