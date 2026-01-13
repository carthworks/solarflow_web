"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { PhoneOff, Zap, Wallet, Shield, ThumbsUp } from "lucide-react";

const benefits = [
    {
        icon: PhoneOff,
        title: "Fewer Customer Calls",
        description: "Self-service dashboard cuts support calls by 80%",
    },
    {
        icon: Zap,
        title: "Faster DISCOM Approvals",
        description: "Track applications, never miss a follow-up",
    },
    {
        icon: Wallet,
        title: "On-Time Payments",
        description: "Link payments to milestones, collect faster",
    },
    {
        icon: Shield,
        title: "Reduced Disputes",
        description: "Complete audit trail of every project action",
    },
    {
        icon: ThumbsUp,
        title: "Better Referrals",
        description: "Happy customers become your best salespeople",
    },
];

export function ROISection() {
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
                            Real Results for Your Business
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Tangible outcomes, not empty promises
                        </p>
                    </motion.div>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.slice(0, 3).map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="p-6 h-full border-2 hover:border-accent/50 transition-all hover:shadow-lg">
                                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                                        <benefit.icon className="w-7 h-7 text-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-muted-foreground">{benefit.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Second Row - Centered */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6">
                        {benefits.slice(3).map((benefit, index) => (
                            <motion.div
                                key={index + 3}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                            >
                                <Card className="p-6 h-full border-2 hover:border-accent/50 transition-all hover:shadow-lg">
                                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                                        <benefit.icon className="w-7 h-7 text-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-muted-foreground">{benefit.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
