"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

export function EarlyAccessForm() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        role: "",
        monthlyInstallations: "",
        biggestProblem: "",
        problemDetails: "",
        willingToPay: "",
        email: "",
        phone: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            const response = await fetch("/api/early-access", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({
                    type: "success",
                    message: "Thank you! We'll reach out within 48 hours.",
                });
                // Reset form
                setFormData({
                    name: "",
                    company: "",
                    role: "",
                    monthlyInstallations: "",
                    biggestProblem: "",
                    problemDetails: "",
                    willingToPay: "",
                    email: "",
                    phone: "",
                });
            } else {
                setSubmitStatus({
                    type: "error",
                    message: data.message || "Failed to submit. Please try again.",
                });
            }
        } catch (error) {
            setSubmitStatus({
                type: "error",
                message: "Network error. Please check your connection and try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="p-8 md:p-12 border-2">
                            {/* Header */}
                            <div className="text-center mb-10">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    Help Us Build the Right Tool
                                </h2>
                                <p className="text-lg text-muted-foreground">
                                    Join early access and shape SolarFlow for solar teams
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <Label htmlFor="name">Name *</Label>
                                    <Input
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        className="mt-2"
                                    />
                                </div>

                                {/* Company */}
                                <div>
                                    <Label htmlFor="company">Company Name *</Label>
                                    <Input
                                        id="company"
                                        required
                                        value={formData.company}
                                        onChange={(e) =>
                                            setFormData({ ...formData, company: e.target.value })
                                        }
                                        className="mt-2"
                                    />
                                </div>

                                {/* Role */}
                                <div>
                                    <Label htmlFor="role">Your Role *</Label>
                                    <Input
                                        id="role"
                                        required
                                        placeholder="e.g., Founder, Operations Head, Project Manager"
                                        value={formData.role}
                                        onChange={(e) =>
                                            setFormData({ ...formData, role: e.target.value })
                                        }
                                        className="mt-2"
                                    />
                                </div>

                                {/* Monthly Installations */}
                                <div>
                                    <Label htmlFor="installations">
                                        Monthly Installations (approx) *
                                    </Label>
                                    <Select
                                        value={formData.monthlyInstallations}
                                        onValueChange={(value) =>
                                            setFormData({ ...formData, monthlyInstallations: value })
                                        }
                                    >
                                        <SelectTrigger className="mt-2">
                                            <SelectValue placeholder="Select range" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1-5">1-5 projects</SelectItem>
                                            <SelectItem value="6-15">6-15 projects</SelectItem>
                                            <SelectItem value="16-30">16-30 projects</SelectItem>
                                            <SelectItem value="30+">30+ projects</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Biggest Problem */}
                                <div>
                                    <Label htmlFor="problem">
                                        Biggest Operational Problem *
                                    </Label>
                                    <Select
                                        value={formData.biggestProblem}
                                        onValueChange={(value) =>
                                            setFormData({ ...formData, biggestProblem: value })
                                        }
                                    >
                                        <SelectTrigger className="mt-2">
                                            <SelectValue placeholder="Select one" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="tracking">
                                                Project tracking
                                            </SelectItem>
                                            <SelectItem value="customer-updates">
                                                Customer updates
                                            </SelectItem>
                                            <SelectItem value="discom">DISCOM approvals</SelectItem>
                                            <SelectItem value="payments">
                                                Payment tracking
                                            </SelectItem>
                                            <SelectItem value="documentation">
                                                Documentation
                                            </SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Problem Details */}
                                <div>
                                    <Label htmlFor="problemDetails">
                                        Tell us more (optional)
                                    </Label>
                                    <Textarea
                                        id="problemDetails"
                                        placeholder="What specific challenges do you face?"
                                        value={formData.problemDetails}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                problemDetails: e.target.value,
                                            })
                                        }
                                        className="mt-2"
                                        rows={4}
                                    />
                                </div>

                                {/* Willing to Pay */}
                                <div>
                                    <Label htmlFor="willingToPay">
                                        Would you pay for this solution? *
                                    </Label>
                                    <Select
                                        value={formData.willingToPay}
                                        onValueChange={(value) =>
                                            setFormData({ ...formData, willingToPay: value })
                                        }
                                    >
                                        <SelectTrigger className="mt-2">
                                            <SelectValue placeholder="Select one" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="yes">Yes</SelectItem>
                                            <SelectItem value="maybe">Maybe</SelectItem>
                                            <SelectItem value="no">No</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Contact Info */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="email">Email *</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                            className="mt-2"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="phone">Phone *</Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) =>
                                                setFormData({ ...formData, phone: e.target.value })
                                            }
                                            className="mt-2"
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={isSubmitting}
                                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        "Join Early Access"
                                    )}
                                </Button>

                                {/* Status Messages */}
                                {submitStatus.type === "success" && (
                                    <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                                        <p className="text-sm font-medium">{submitStatus.message}</p>
                                    </div>
                                )}

                                {submitStatus.type === "error" && (
                                    <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                                        <p className="text-sm font-medium">{submitStatus.message}</p>
                                    </div>
                                )}

                                {!submitStatus.type && (
                                    <p className="text-sm text-muted-foreground text-center">
                                        We'll reach out within 48 hours to learn more about your needs
                                    </p>
                                )}
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
