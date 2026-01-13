"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export function WhoItsForSection() {
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
                            Is SolarFlow Right for You?
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            We're honest about who we serve best
                        </p>
                    </motion.div>

                    {/* Two Column Layout */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Perfect For */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Card className="p-8 h-full border-2 border-accent/50 bg-accent/5">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                                        <Check className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground">
                                        Perfect For
                                    </h3>
                                </div>

                                <ul className="space-y-4">
                                    {[
                                        "Rooftop solar EPCs",
                                        "Growing installation teams",
                                        "Companies tired of chaos",
                                        "Teams handling 5-50 projects/month",
                                        "Businesses wanting better customer experience",
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                            <span className="text-foreground font-medium">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>

                        {/* Not For */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Card className="p-8 h-full border-2">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                                        <X className="w-6 h-6 text-muted-foreground" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground">
                                        Not For
                                    </h3>
                                </div>

                                <ul className="space-y-4">
                                    {[
                                        "Large ERP-heavy enterprises",
                                        "Companies wanting accounting software",
                                        "Freelancers or solo installers",
                                        "Utility-scale solar developers",
                                        "Teams needing complex customizations",
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Bottom Note */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="mt-10 text-center text-muted-foreground italic"
                    >
                        We'd rather be honest than waste your time
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
