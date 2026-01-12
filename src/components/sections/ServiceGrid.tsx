"use client";

import { Container } from "@/components/ui/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Filter, Waves } from "lucide-react";
import { cn } from "@/lib/utils";

interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const defaultServices: Service[] = [
    {
        icon: <Droplets className="h-10 w-10 text-primary" aria-hidden="true" />,
        title: "Water Softeners",
        description: "Remove hard water minerals for softer skin, cleaner fixtures, and extended appliance life.",
    },
    {
        icon: <Filter className="h-10 w-10 text-primary" aria-hidden="true" />,
        title: "Filtration Systems",
        description: "Multi-stage filters eliminate contaminants for pure, great-tasting water from every tap.",
    },
    {
        icon: <Waves className="h-10 w-10 text-primary" aria-hidden="true" />,
        title: "Reverse Osmosis",
        description: "Advanced purification technology delivers the cleanest, healthiest water for your family.",
    },
];

export interface ServiceGridProps {
    services?: Service[];
    className?: string;
}

export function ServiceGrid({ services = defaultServices, className }: ServiceGridProps) {
    return (
        <section
            className={cn(
                "w-full bg-surface py-12 dark:bg-zinc-950 md:py-16",
                className
            )}
        >
            <Container>
                <div className="flex flex-col items-center gap-10">
                    {/* Section header */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                            Our Water Treatment Services
                        </h2>
                        <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                            Professional solutions tailored to your home&apos;s unique water quality needs.
                        </p>
                    </div>

                    {/* Service cards grid */}
                    <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <Card
                                key={index}
                                className="group border-zinc-200 bg-white transition-all duration-300 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
                            >
                                <CardHeader className="pb-4">
                                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-zinc-100 transition-colors group-hover:bg-zinc-200 dark:bg-zinc-800 dark:group-hover:bg-zinc-700">
                                        {service.icon}
                                    </div>
                                    <CardTitle className="text-xl text-zinc-900 dark:text-zinc-50">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-zinc-600 dark:text-zinc-400">
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
