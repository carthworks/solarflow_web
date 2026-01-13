"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Lock, Database, Shield, MapPin } from "lucide-react";

const trustPoints = [
    {
        icon: Lock,
        title: "Data Security",
        description: "Enterprise-grade encryption for all your project data",
    },
    {
        icon: Database,
        title: "Tenant Isolation",
        description: "Your data stays yours, completely isolated",
    },
    {
        icon: Shield,
        title: "No Data Sharing",
        description: "We never share or sell your information",
    },
    {
        icon: MapPin,
        title: "India-Ready",
        description: "Built for DISCOM workflows and Indian solar processes",
    },
];

export function TrustSection() {
    return (
        <section className="py-16 bg-background border-y border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                            Built with Security & Trust
                        </h2>
                    </motion.div>

                    {/* Trust Points Grid */}
                    <div className="grid md:grid-cols-4 gap-6">
                        {trustPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="p-6 text-center border-2 hover:border-accent/50 transition-colors h-full">
                                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                                        <point.icon className="w-6 h-6 text-accent" />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-2">
                                        {point.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {point.description}
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
