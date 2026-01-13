"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";

interface FooterLink {
    label: string;
    href: string;
}

interface FooterProps {
    /** Navigation links shown in footer. Defaults to About, Services, Contact */
    links?: FooterLink[];
}

const defaultLinks: FooterLink[] = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Testimonials", href: "#testimonials" },
];

const legalLinks: FooterLink[] = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
];

export function Footer({ links = defaultLinks }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-muted/40">
            <Container className="py-8 md:py-10">
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                    {/* Brand + Description */}
                    <div className="flex flex-col gap-3">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-base font-semibold text-foreground"
                        >
                            <Image
                                src="/assets/svg/brand/logo-mark.svg"
                                alt="Eco One Water logo"
                                width={24}
                                height={24}
                                className="h-6 w-6 dark:invert"
                            />
                            Eco One Water
                        </Link>
                        <p className="max-w-xs text-sm text-muted-foreground">
                            Clean water for healthier homes. Professional water
                            treatment services for your family.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <nav
                        className="flex flex-col gap-2"
                        aria-label="Footer navigation"
                    >
                        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            Quick Links
                        </span>
                        <ul className="flex flex-col gap-1.5">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Trust Badges Placeholder */}
                    <div className="flex flex-col gap-2">
                        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            Trusted By
                        </span>
                        <div className="flex items-center gap-3">
                            {/* Placeholder badges - replace with actual badge images later */}
                            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted text-xs text-muted-foreground">
                                BBB
                            </div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted text-xs text-muted-foreground">
                                WQA
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright + Legal Links */}
                <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
                    <p className="text-xs text-muted-foreground">
                        © {currentYear} Eco One Water. All rights reserved.
                    </p>
                    <nav aria-label="Legal links">
                        <ul className="flex items-center gap-4">
                            {legalLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
