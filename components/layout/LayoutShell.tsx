import { Container } from "@/components/ui/container";
import { Header } from "@/components/layout/Header";
import Link from "next/link";

interface LayoutShellProps {
    children: React.ReactNode;
}

export function LayoutShell({ children }: LayoutShellProps) {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Header */}
            <Header />

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
