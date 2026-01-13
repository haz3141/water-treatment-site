"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

interface NavLink {
    label: string;
    href: string;
}

interface HeaderProps {
    /** Label for the CTA button. Defaults to "Free Water Test" */
    ctaLabel?: string;
    /** Click handler for the CTA button */
    onCtaClick?: () => void;
    /** Navigation links. Defaults to About, Services, Contact */
    links?: NavLink[];
}

const defaultLinks: NavLink[] = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Testimonials", href: "#testimonials" },
];

export function Header({
    ctaLabel = "Get a Free Water Test",
    onCtaClick,
    links = defaultLinks,
}: HeaderProps) {
    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Container className="flex h-16 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/assets/svg/brand/logo-mark.svg"
                        alt="Eco One Water logo"
                        width={32}
                        height={32}
                        className="h-8 w-8 dark:invert"
                    />
                    <span className="text-xl font-bold text-foreground">
                        Eco One Water
                    </span>
                </Link>

                {/* Navigation - hidden on mobile */}
                <nav className="hidden items-center gap-6 md:flex">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <Button
                    onClick={onCtaClick}
                    asChild={!onCtaClick}
                    className="rounded-full bg-primary px-6 font-semibold text-primary-foreground shadow-md transition-transform hover:scale-105 hover:bg-primary/90"
                >
                    {onCtaClick ? (
                        ctaLabel
                    ) : (
                        <Link href="#contact">{ctaLabel}</Link>
                    )}
                </Button>
            </Container>
        </header>
    );
}

export default Header;
