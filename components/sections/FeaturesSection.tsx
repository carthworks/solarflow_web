"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
    LayoutDashboard,
    Target,
    Bell,
    Eye,
    FileText,
    Activity,
    CreditCard,
    DollarSign,
    MessageSquare,
    Clock,
    Shield,
} from "lucide-react";

const featureCategories = [
    {
        title: "Operational Control",
        icon: LayoutDashboard,
        features: [
            { icon: LayoutDashboard, text: "Project pipeline view" },
            { icon: Target, text: "Milestone tracking" },
            { icon: Bell, text: "Delay alerts" },
        ],
    },
    {
        title: "Transparency & Trust",
        icon: Eye,
        features: [
            { icon: Eye, text: "Customer dashboard" },
            { icon: FileText, text: "Document access" },
            { icon: Activity, text: "Status timeline" },
        ],
    },
    {
        title: "Financial Clarity",
        icon: CreditCard,
        features: [
            { icon: CreditCard, text: "Payment stage tracking" },
            { icon: DollarSign, text: "Pending amount visibility" },
        ],
    },
    {
        title: "Accountability",
        icon: Shield,
        features: [
            { icon: MessageSquare, text: "Complaint & ticket system" },
            { icon: Clock, text: "SLA tracking" },
            { icon: Shield, text: "Audit logs" },
        ],
    },
];

export function FeaturesSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Everything You Need to Run Solar Projects
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Organized by outcomes, not modules
                        </p>
                    </motion.div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {featureCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={categoryIndex}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            >
                                <Card className="p-8 h-full border-2 hover:border-accent/50 transition-all hover:shadow-lg">
                                    {/* Category Header */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                            <category.icon className="w-6 h-6 text-accent" />
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground">
                                            {category.title}
                                        </h3>
                                    </div>

                                    {/* Features List */}
                                    <ul className="space-y-4">
                                        {category.features.map((feature, featureIndex) => (
                                            <li
                                                key={featureIndex}
                                                className="flex items-center gap-3 text-muted-foreground"
                                            >
                                                <feature.icon className="w-5 h-5 text-accent flex-shrink-0" />
                                                <span>{feature.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
