"use client";

import { motion } from "framer-motion";
import { AlertCircle, FileX, Phone, Clock, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
    {
        icon: FileX,
        title: "WhatsApp + Excel chaos",
        description: "Project updates scattered across chats and spreadsheets",
    },
    {
        icon: Clock,
        title: "DISCOM approval delays",
        description: "No visibility into where applications are stuck",
    },
    {
        icon: Phone,
        title: "Customers calling daily",
        description: "Endless calls asking 'What's the status?'",
    },
    {
        icon: DollarSign,
        title: "Payment delays",
        description: "Missing milestones mean delayed payments",
    },
    {
        icon: AlertCircle,
        title: "No single source of truth",
        description: "Team members working with different information",
    },
];

export function ProblemSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Section Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Solar projects don't fail because of technology.
                            <br />
                            <span className="text-accent">They fail because of chaos.</span>
                        </h2>
                    </motion.div>

                    {/* Problems Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {problems.map((problem, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="p-6 border-2 hover:border-accent/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                                <problem.icon className="w-6 h-6 text-accent" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg text-foreground mb-2">
                                                {problem.title}
                                            </h3>
                                            <p className="text-muted-foreground">
                                                {problem.description}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom emphasis */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="mt-12 text-center text-lg text-muted-foreground italic"
                    >
                        Sound familiar? You're not alone.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
