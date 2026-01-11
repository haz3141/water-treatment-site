"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export interface CtaFooterProps {
    headline?: string;
    subheadline?: string;
    ctaLabel?: string;
    onCtaClick?: () => void;
    className?: string;
}

export function CtaFooter({
    headline = "Ready for Better Water?",
    subheadline = "Schedule your free in-home water test today and discover the difference clean, healthy water can make for your family.",
    ctaLabel = "Get Your Free Quote",
    onCtaClick,
    className,
}: CtaFooterProps) {
    return (
        <section
            aria-labelledby="cta-footer-heading"
            className={cn(
                "w-full bg-zinc-900 py-16 dark:bg-zinc-950 md:py-24",
                className
            )}
        >
            <Container>
                <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 text-center shadow-2xl dark:from-zinc-800/80 dark:to-zinc-900/80 md:p-12">
                    {/* Headline */}
                    <h2
                        id="cta-footer-heading"
                        className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                    >
                        {headline}
                    </h2>

                    {/* Subheadline */}
                    <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-300">
                        {subheadline}
                    </p>

                    {/* CTA Button */}
                    <div className="mt-8">
                        <Button
                            size="lg"
                            onClick={onCtaClick}
                            className="h-14 rounded-full bg-white px-8 text-base font-semibold text-zinc-900 shadow-lg transition-all hover:bg-zinc-100 hover:scale-105"
                        >
                            {ctaLabel}
                        </Button>
                    </div>

                    {/* Additional trust line */}
                    <p className="mt-6 text-sm text-zinc-400">
                        No obligation • Free consultation • Expert technicians
                    </p>
                </div>
            </Container>
        </section>
    );
}
