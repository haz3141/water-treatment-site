"use client";

import { LeadFunnel, type LeadFormData } from "./LeadFunnel";

/**
 * Client wrapper for LeadFunnel that encapsulates the mock onSubmit handler.
 * This allows the main page to remain a server component.
 */
export function LeadFunnelWrapper() {
    const handleSubmit = async (data: LeadFormData): Promise<void> => {
        // Mock handler - log data for demo purposes
        console.log("Form submitted:", data);
        return new Promise((resolve) => setTimeout(resolve, 1500));
    };

    return <LeadFunnel onSubmit={handleSubmit} />;
}
