import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export interface HeroSectionProps {
    /** Label for the primary CTA button */
    ctaLabel?: string;
    /** Click handler for CTA button */
    onCtaClick?: () => void;
    /** Optional background image URL */
    backgroundImage?: string;
    /** Optional array of trust badge image URLs */
    brandBadgeUrls?: string[];
    /** Optional className for custom styling */
    className?: string;
}

export function HeroSection({
    ctaLabel = "Get a Free Water Test",
    onCtaClick,
    brandBadgeUrls,
    className,
}: HeroSectionProps) {
    return (
        <section
            className={cn(
                "relative w-full bg-primary-soft py-24 dark:bg-background md:py-32",
                className
            )}
        >
            {/* Optional background image */}
            {/* Background images key - Art Direction */}
            <div className="absolute inset-0 z-0">
                {/* Mobile Image (default, hidden on lg) */}
                <div className="block lg:hidden absolute inset-0">
                    <Image
                        src="/assets/images/hero/hero-mobile.jpg"
                        alt="Happy family enjoying clean water"
                        fill
                        className="object-cover opacity-10"
                        priority
                        sizes="100vw"
                    />
                </div>

                {/* Desktop Image (hidden on mobile, block on lg) */}
                <div className="hidden lg:block absolute inset-0">
                    <Image
                        src="/assets/images/hero/hero-desktop.jpg"
                        alt="Happy family enjoying clean water"
                        fill
                        className="object-cover object-top opacity-10"
                        priority
                        sizes="100vw"
                    />
                </div>
            </div>

            <Container className="relative z-10 flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-between lg:gap-16">
                {/* Text content */}
                <div className="animate-fade-up flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                        Better Water for Every Home
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
                        Schedule your free in-home water test and discover how clean,
                        healthy water can transform your family&apos;s daily life.
                    </p>

                    {/* CTA Button */}
                    <div className="mt-10">
                        <Button
                            size="lg"
                            onClick={onCtaClick}
                            className="h-14 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 hover:bg-primary/90"
                        >
                            {ctaLabel}
                        </Button>
                    </div>

                    {/* Trust badges */}
                    {brandBadgeUrls && brandBadgeUrls.length > 0 && (
                        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                            <span className="text-sm font-medium text-muted-foreground">
                                Trusted by:
                            </span>
                            {brandBadgeUrls.map((url, index) => (
                                <Image
                                    key={index}
                                    src={url}
                                    alt={`Trust badge ${index + 1}`}
                                    width={80}
                                    height={40}
                                    className="h-8 w-auto object-contain opacity-70 grayscale transition-opacity hover:opacity-100 hover:grayscale-0"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </Container>

            {/* Wave divider at section bottom - uses inline SVG for CSS color inheritance */}
            <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden text-surface md:h-20">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 80"
                    preserveAspectRatio="none"
                    fill="currentColor"
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full"
                >
                    <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" />
                </svg>
            </div>
        </section>
    );
}
