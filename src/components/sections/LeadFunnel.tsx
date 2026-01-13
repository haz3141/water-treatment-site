"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

// Form validation schema
const leadFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z
        .string()
        .optional()
        .refine(
            (val) => !val || val.replace(/\D/g, "").length >= 10,
            "Phone number must be at least 10 digits"
        ),
    zipCode: z
        .string()
        .regex(/^\d{5}(-\d{4})?$/, "Please enter a valid ZIP code"),
    serviceType: z.enum(["softener", "filter", "reverse-osmosis", "unsure"], {
        message: "Please select a service type",
    }),
    message: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

export interface LeadFunnelProps {
    /** Callback when form is submitted successfully */
    onSubmit?: (data: LeadFormData) => void | Promise<void>;
    /** Custom label for the CTA button */
    ctaLabel?: string;
    /** Optional initial values for the form */
    initialValues?: Partial<LeadFormData>;
    /** Optional className for custom styling */
    className?: string;
}

export function LeadFunnel({
    onSubmit,
    ctaLabel = "Request My Quote",
    initialValues,
    className,
}: LeadFunnelProps) {
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "submitting" | "success" | "error"
    >("idle");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
    } = useForm<LeadFormData>({
        resolver: zodResolver(leadFormSchema),
        defaultValues: {
            name: initialValues?.name ?? "",
            email: initialValues?.email ?? "",
            phone: initialValues?.phone ?? "",
            zipCode: initialValues?.zipCode ?? "",
            serviceType: initialValues?.serviceType,
            message: initialValues?.message ?? "",
        },
    });

    const handleFormSubmit = async (data: LeadFormData) => {
        setSubmitStatus("submitting");
        setErrorMessage("");

        try {
            if (onSubmit) {
                await onSubmit(data);
            }
            setSubmitStatus("success");
            reset();
        } catch (error) {
            setSubmitStatus("error");
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again."
            );
        }
    };

    if (submitStatus === "success") {
        return (
            <section
                className={cn(
                    "w-full bg-surface py-12 dark:bg-background md:py-16",
                    className
                )}
            >
                <Container>
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
                            <svg
                                className="h-8 w-8 text-success"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground">
                            Thank You!
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            We&apos;ve received your request and will be in
                            touch within 24 hours to schedule your free water
                            test.
                        </p>
                        <Button
                            variant="outline"
                            className="mt-8"
                            onClick={() => setSubmitStatus("idle")}
                        >
                            Submit Another Request
                        </Button>
                    </div>
                </Container>
            </section>
        );
    }

    return (
        <section
            className={cn(
                "w-full bg-surface py-12 dark:bg-background md:py-16",
                className
            )}
        >
            <Container>
                <div className="mx-auto max-w-4xl">
                    {/* Header */}
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Get Your Free Water Test
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Schedule a complimentary in-home water analysis and
                            receive a custom treatment recommendation.
                        </p>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit(handleFormSubmit)}
                        className="rounded-2xl border border-border bg-white p-6 shadow-sm dark:bg-secondary sm:p-8 lg:p-10"
                        noValidate
                    >
                        {/* Error banner */}
                        {submitStatus === "error" && errorMessage && (
                            <div className="mb-6 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
                                <div className="flex items-center gap-2">
                                    <svg
                                        className="h-5 w-5 flex-shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    {errorMessage}
                                </div>
                            </div>
                        )}

                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Name */}
                            <div className="space-y-2">
                                <Label htmlFor="name">
                                    Full Name{" "}
                                    <span className="text-destructive">*</span>
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="John Smith"
                                    autoComplete="name"
                                    aria-invalid={!!errors.name}
                                    aria-describedby={
                                        errors.name ? "name-error" : undefined
                                    }
                                    className={cn(
                                        "h-12",
                                        errors.name &&
                                        "border-destructive focus-visible:ring-destructive"
                                    )}
                                    {...register("name")}
                                />
                                {errors.name && (
                                    <p
                                        id="name-error"
                                        className="text-sm text-destructive"
                                    >
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <Label htmlFor="email">
                                    Email Address{" "}
                                    <span className="text-destructive">*</span>
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    autoComplete="email"
                                    aria-invalid={!!errors.email}
                                    aria-describedby={
                                        errors.email ? "email-error" : undefined
                                    }
                                    className={cn(
                                        "h-12",
                                        errors.email &&
                                        "border-destructive focus-visible:ring-destructive"
                                    )}
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <p
                                        id="email-error"
                                        className="text-sm text-destructive"
                                    >
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* Phone */}
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="(555) 555-5555"
                                    autoComplete="tel"
                                    aria-invalid={!!errors.phone}
                                    aria-describedby={
                                        errors.phone ? "phone-error" : undefined
                                    }
                                    className={cn(
                                        "h-12",
                                        errors.phone &&
                                        "border-destructive focus-visible:ring-destructive"
                                    )}
                                    {...register("phone")}
                                />
                                {errors.phone && (
                                    <p
                                        id="phone-error"
                                        className="text-sm text-destructive"
                                    >
                                        {errors.phone.message}
                                    </p>
                                )}
                            </div>

                            {/* ZIP Code */}
                            <div className="space-y-2">
                                <Label htmlFor="zipCode">
                                    ZIP Code{" "}
                                    <span className="text-destructive">*</span>
                                </Label>
                                <Input
                                    id="zipCode"
                                    type="text"
                                    placeholder="12345"
                                    autoComplete="postal-code"
                                    aria-invalid={!!errors.zipCode}
                                    aria-describedby={
                                        errors.zipCode
                                            ? "zipCode-error"
                                            : undefined
                                    }
                                    className={cn(
                                        "h-12",
                                        errors.zipCode &&
                                        "border-destructive focus-visible:ring-destructive"
                                    )}
                                    {...register("zipCode")}
                                />
                                {errors.zipCode && (
                                    <p
                                        id="zipCode-error"
                                        className="text-sm text-destructive"
                                    >
                                        {errors.zipCode.message}
                                    </p>
                                )}
                            </div>

                            {/* Service Type */}
                            <div className="space-y-2 md:col-span-2">
                                <Label htmlFor="serviceType">
                                    What are you interested in?{" "}
                                    <span className="text-destructive">*</span>
                                </Label>
                                <Select
                                    onValueChange={(value) =>
                                        setValue(
                                            "serviceType",
                                            value as LeadFormData["serviceType"]
                                        )
                                    }
                                    defaultValue={initialValues?.serviceType}
                                >
                                    <SelectTrigger
                                        id="serviceType"
                                        aria-invalid={!!errors.serviceType}
                                        aria-describedby={
                                            errors.serviceType
                                                ? "serviceType-error"
                                                : undefined
                                        }
                                        className={cn(
                                            "h-12",
                                            errors.serviceType &&
                                            "border-destructive focus-visible:ring-destructive"
                                        )}
                                    >
                                        <SelectValue placeholder="Select a service type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="softener">
                                            Water Softener
                                        </SelectItem>
                                        <SelectItem value="filter">
                                            Whole House Filter
                                        </SelectItem>
                                        <SelectItem value="reverse-osmosis">
                                            Reverse Osmosis System
                                        </SelectItem>
                                        <SelectItem value="unsure">
                                            Not Sure – Help Me Decide
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.serviceType && (
                                    <p
                                        id="serviceType-error"
                                        className="text-sm text-destructive"
                                    >
                                        {errors.serviceType.message}
                                    </p>
                                )}
                            </div>

                            {/* Message */}
                            <div className="space-y-2 md:col-span-2">
                                <Label htmlFor="message">
                                    Additional Notes{" "}
                                    <span className="text-muted-foreground">
                                        (optional)
                                    </span>
                                </Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about your water concerns or preferred appointment times..."
                                    rows={4}
                                    className="resize-none"
                                    {...register("message")}
                                />
                            </div>
                        </div>

                        {/* Submit button */}
                        <div className="mt-8 flex justify-center">
                            <Button
                                type="submit"
                                size="lg"
                                disabled={submitStatus === "submitting"}
                                className="h-14 w-full rounded-full px-10 text-base font-semibold shadow-lg transition-transform hover:scale-[1.02] sm:w-auto"
                            >
                                {submitStatus === "submitting" ? (
                                    <span className="flex items-center gap-2">
                                        <svg
                                            className="h-5 w-5 animate-spin"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </svg>
                                        Submitting...
                                    </span>
                                ) : (
                                    ctaLabel
                                )}
                            </Button>
                        </div>

                        {/* Trust indicator */}
                        <p className="mt-6 text-center text-sm text-muted-foreground">
                            🔒 Your information is secure and will never be
                            shared with third parties.
                        </p>
                    </form>
                </div>
            </Container>
        </section>
    );
}
