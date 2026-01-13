"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Service {
    iconSrc: string;
    iconAlt: string;
    title: string;
    description: string;
}

const defaultServices: Service[] = [
    {
        iconSrc: "/assets/svg/icons/icon-softener.svg",
        iconAlt: "Water softener icon",
        title: "Water Softeners",
        description: "Remove hard water minerals for softer skin, cleaner fixtures, and extended appliance life.",
    },
    {
        iconSrc: "/assets/svg/icons/icon-filtration.svg",
        iconAlt: "Filtration system icon",
        title: "Filtration Systems",
        description: "Multi-stage filters eliminate contaminants for pure, great-tasting water from every tap.",
    },
    {
        iconSrc: "/assets/svg/icons/icon-ro.svg",
        iconAlt: "Reverse osmosis icon",
        title: "Reverse Osmosis",
        description: "Advanced purification technology delivers the cleanest, healthiest water for your family.",
    },
    {
        iconSrc: "/assets/svg/icons/icon-well.svg",
        iconAlt: "Well water icon",
        title: "Well Water Treatment",
        description: "Specialized solutions for private well systems to ensure safe, clean water for rural homes.",
    },
];

export interface ServiceGridProps {
    services?: Service[];
    className?: string;
}

export function ServiceGrid({ services = defaultServices, className }: ServiceGridProps) {
    return (
        <section
            id="services"
            className={cn(
                "w-full bg-surface py-24 dark:bg-background md:py-32",
                className
            )}
        >
            <Container>
                <div className="flex flex-col items-center gap-10">
                    {/* Section header */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Our Water Treatment Services
                        </h2>
                        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                            Professional solutions tailored to your home&apos;s unique water quality needs.
                        </p>
                    </div>

                    {/* Service cards grid */}
                    <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {services.map((service, index) => (
                            <Card
                                key={index}
                                className="hover-lift group rounded-xl border-border bg-card transition-all duration-300 hover:shadow-lg dark:bg-secondary"
                            >
                                <CardHeader className="pb-4">
                                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-muted/80">
                                        <Image
                                            src={service.iconSrc}
                                            alt={service.iconAlt}
                                            width={40}
                                            height={40}
                                            className="h-10 w-10 text-primary dark:invert"
                                        />
                                    </div>
                                    <CardTitle className="text-xl text-foreground">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-muted-foreground">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
