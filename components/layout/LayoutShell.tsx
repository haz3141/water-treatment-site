import { Container } from "@/components/ui/container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
            <Footer />
        </div>
    );
}

