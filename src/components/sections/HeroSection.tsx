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
    backgroundImage,
    brandBadgeUrls,
    className,
}: HeroSectionProps) {
    return (
        <section
            className={cn(
                "relative min-h-[80vh] w-full bg-primary-soft dark:bg-zinc-950",
                className
            )}
        >
            {/* Optional background image */}
            {backgroundImage && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={backgroundImage}
                        alt=""
                        fill
                        className="object-cover opacity-10"
                        priority
                    />
                </div>
            )}

            <Container className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-24">
                {/* Text content */}
                <div className="animate-fade-up flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-6xl">
                        Better Water for Every Home
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 sm:text-xl">
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
                            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
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

                {/* Visual element - water droplet illustration */}
                <div className="mt-12 flex items-center justify-center lg:mt-0">
                    <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                        {/* Decorative background circle */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20" />

                        {/* Water droplet SVG */}
                        <svg
                            viewBox="0 0 100 100"
                            className="relative h-40 w-40 text-primary/60 dark:text-primary/40 sm:h-48 sm:w-48"
                            fill="currentColor"
                        >
                            <path d="M50 5 C50 5 20 45 20 65 C20 82 33 95 50 95 C67 95 80 82 80 65 C80 45 50 5 50 5 Z" />
                            <ellipse
                                cx="40"
                                cy="55"
                                rx="8"
                                ry="12"
                                fill="currentColor"
                                className="opacity-30"
                            />
                        </svg>

                        {/* Subtle animated ring */}
                        <div className="absolute inset-4 animate-pulse rounded-full border-2 border-accent/30 dark:border-accent/20" />
                    </div>
                </div>
            </Container>

            {/* Wave divider at section bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden md:h-20">
                <Image
                    src="/assets/svg/dividers/divider-wave.svg"
                    alt=""
                    fill
                    className="object-cover object-top text-background"
                    priority
                />
            </div>
        </section>
    );
}
