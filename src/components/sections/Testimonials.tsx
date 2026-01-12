"use client";

import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
    name: string;
    location: string;
    quote: string;
    initials: string;
    rating: number;
}

const defaultTestimonials: Testimonial[] = [
    {
        name: "Sarah M.",
        location: "Austin, TX",
        quote: "Our water has never tasted better. The installation was quick and professional. We noticed the difference immediately!",
        initials: "SM",
        rating: 5,
    },
    {
        name: "Mike T.",
        location: "Denver, CO",
        quote: "Best investment we've made for our home. The difference is night and day. Our appliances are already cleaner.",
        initials: "MT",
        rating: 5,
    },
    {
        name: "Lisa K.",
        location: "Portland, OR",
        quote: "We noticed the improvement immediately. Highly recommend their service! The team was courteous and efficient.",
        initials: "LK",
        rating: 5,
    },
];

export interface TestimonialsProps {
    testimonials?: Testimonial[];
    className?: string;
}

export function Testimonials({ testimonials = defaultTestimonials, className }: TestimonialsProps) {
    return (
        <section
            className={cn(
                "w-full bg-card py-12 dark:bg-zinc-950 md:py-16",
                className
            )}
        >
            <Container>
                <div className="flex flex-col items-center gap-10">
                    {/* Section header */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                            What Our Customers Say
                        </h2>
                        <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                            Hear from homeowners who transformed their water quality.
                        </p>
                    </div>

                    {/* Testimonial cards */}
                    <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <Card
                                key={index}
                                className="relative border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
                            >
                                {/* Decorative quote mark */}
                                <div
                                    className="absolute -top-2 left-6 text-5xl font-serif text-zinc-200 dark:text-zinc-800"
                                    aria-hidden="true"
                                >
                                    &ldquo;
                                </div>

                                <CardContent className="pt-8">
                                    {/* Star rating */}
                                    <div className="mb-4 flex gap-0.5">
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 fill-amber-400 text-amber-400"
                                                aria-hidden="true"
                                            />
                                        ))}
                                        <span className="sr-only">{testimonial.rating} out of 5 stars</span>
                                    </div>

                                    {/* Quote */}
                                    <blockquote className="mb-6 text-zinc-700 dark:text-zinc-300">
                                        {testimonial.quote}
                                    </blockquote>

                                    {/* Customer info */}
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-10 w-10 border-2 border-zinc-200 dark:border-zinc-700">
                                            <AvatarFallback className="bg-zinc-100 text-sm font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                                                {testimonial.initials}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="font-medium text-zinc-900 dark:text-zinc-50">
                                                {testimonial.name}
                                            </div>
                                            <div className="text-sm text-zinc-500 dark:text-zinc-400">
                                                {testimonial.location}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
