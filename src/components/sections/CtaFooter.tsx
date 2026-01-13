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
    ctaLabel = "Get a Free Water Test",
    onCtaClick,
    className,
}: CtaFooterProps) {
    return (
        <section
            aria-labelledby="cta-footer-heading"
            className={cn(
                "w-full bg-primary py-24 md:py-32",
                className
            )}
        >
            <Container>
                <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-primary-foreground/10 to-primary-foreground/5 p-8 text-center backdrop-blur-sm md:p-12">
                    {/* Headline */}
                    <h2
                        id="cta-footer-heading"
                        className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl"
                    >
                        {headline}
                    </h2>

                    {/* Subheadline */}
                    <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
                        {subheadline}
                    </p>

                    {/* CTA Button */}
                    <div className="mt-8">
                        <Button
                            size="lg"
                            onClick={onCtaClick}
                            className="h-14 rounded-full bg-white px-8 text-base font-semibold text-primary shadow-lg transition-all hover:bg-primary-soft hover:scale-105"
                        >
                            {ctaLabel}
                        </Button>
                    </div>

                    {/* Additional trust line */}
                    <p className="mt-6 text-sm text-primary-foreground/70">
                        No obligation • Free consultation • Expert technicians
                    </p>
                </div>
            </Container>
        </section>
    );
}
