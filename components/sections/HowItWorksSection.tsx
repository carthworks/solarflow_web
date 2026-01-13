"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Lead Captured",
        description: "Customer inquiry lands in your system automatically",
    },
    {
        number: "02",
        title: "Project Tracked",
        description: "Every stage from site survey to commissioning monitored",
    },
    {
        number: "03",
        title: "Documents Verified",
        description: "Upload and track DISCOM applications, approvals, permits",
    },
    {
        number: "04",
        title: "Milestones Monitored",
        description: "Know exactly where each project stands in real-time",
    },
    {
        number: "05",
        title: "Customer Sees Status",
        description: "Self-service dashboard reduces support calls by 80%",
    },
    {
        number: "06",
        title: "Payments Tracked",
        description: "Link payments to milestones, never miss a collection",
    },
];

export function HowItWorksSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Section Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            How SolarFlow Works
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            End-to-end project lifecycle in one platform
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/20 -translate-x-1/2" />

                        {/* Steps */}
                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative flex items-center ${index % 2 === 0
                                            ? "md:flex-row"
                                            : "md:flex-row-reverse"
                                        } flex-col md:gap-8`}
                                >
                                    {/* Content */}
                                    <div
                                        className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                                            } text-left`}
                                    >
                                        <div className="bg-card border-2 border-border hover:border-accent/50 transition-colors rounded-lg p-6 ml-16 md:ml-0">
                                            <div className="text-sm font-semibold text-accent mb-2">
                                                STEP {step.number}
                                            </div>
                                            <h3 className="text-xl font-bold text-foreground mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-muted-foreground">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Center dot */}
                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-accent flex items-center justify-center z-10 shadow-lg">
                                        <CheckCircle2 className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Spacer for alternating layout */}
                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
