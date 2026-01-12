"use client";

import { Container } from "@/components/ui/container";
import { Calendar, Droplet, Wrench, Smile } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
    number: number;
    icon: React.ReactNode;
    title: string;
    description: string;
}

const defaultSteps: Step[] = [
    {
        number: 1,
        icon: <Calendar className="h-6 w-6" aria-hidden="true" />,
        title: "Schedule",
        description: "Book your free in-home consultation at a time that works for you.",
    },
    {
        number: 2,
        icon: <Droplet className="h-6 w-6" aria-hidden="true" />,
        title: "Test",
        description: "We analyze your water quality with professional testing equipment.",
    },
    {
        number: 3,
        icon: <Wrench className="h-6 w-6" aria-hidden="true" />,
        title: "Install",
        description: "Expert technicians install your customized treatment system.",
    },
    {
        number: 4,
        icon: <Smile className="h-6 w-6" aria-hidden="true" />,
        title: "Enjoy",
        description: "Experience cleaner, healthier water throughout your home.",
    },
];

export interface HowItWorksProps {
    steps?: Step[];
    className?: string;
}

export function HowItWorks({ steps = defaultSteps, className }: HowItWorksProps) {
    return (
        <section
            className={cn(
                "w-full bg-zinc-100 py-16 dark:bg-zinc-900/50 md:py-24",
                className
            )}
        >
            <Container>
                <div className="flex flex-col items-center gap-12">
                    {/* Section header */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                            How It Works
                        </h2>
                        <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                            Getting clean water in your home is simple with our proven process.
                        </p>
                    </div>

                    {/* Steps timeline */}
                    <div className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className="group relative flex flex-col items-center text-center"
                            >
                                {/* Connector line (hidden on first item and mobile) */}
                                {index > 0 && (
                                    <div className="absolute right-1/2 top-8 hidden h-0.5 w-full -translate-y-1/2 bg-zinc-300 dark:bg-zinc-700 lg:block" />
                                )}

                                {/* Step number circle */}
                                <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-110"
                                >
                                    <span className="sr-only">Step {step.number}</span>
                                    {step.icon}
                                </div>

                                {/* Step content */}
                                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
