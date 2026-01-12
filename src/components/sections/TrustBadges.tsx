"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface TrustBadge {
    name: string;
    logoUrl: string;
}

const defaultBadges: TrustBadge[] = [
    { name: "NSF Certified", logoUrl: "/badges/nsf.svg" },
    { name: "BBB Accredited", logoUrl: "/badges/bbb.svg" },
    { name: "Water Quality Association", logoUrl: "/badges/wqa.svg" },
    { name: "HomeAdvisor Approved", logoUrl: "/badges/homeadvisor.svg" },
];

export interface TrustBadgesProps {
    badges?: TrustBadge[];
    className?: string;
}

export function TrustBadges({ badges = defaultBadges, className }: TrustBadgesProps) {
    return (
        <section
            className={cn(
                "w-full bg-surface py-12 dark:bg-zinc-900/50",
                className
            )}
        >
            <Container>
                <div className="flex flex-col items-center gap-6">
                    <p className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        Trusted by 10,000+ Homeowners
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {badges.map((badge) => (
                            <div
                                key={badge.name}
                                className="group flex h-12 w-24 items-center justify-center transition-all md:w-28"
                            >
                                <Image
                                    src={badge.logoUrl}
                                    alt={badge.name}
                                    width={100}
                                    height={48}
                                    className="h-auto max-h-10 w-auto max-w-full object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
