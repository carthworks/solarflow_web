"use client";

import { useEffect, useState } from "react";
import { Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-background"
                >
                    <div className="flex flex-col items-center gap-4">
                        {/* Logo with pulse animation */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                                repeatDelay: 0.3,
                            }}
                            className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center shadow-lg"
                        >
                            <Sun className="w-12 h-12 text-white" />
                        </motion.div>

                        {/* Brand name */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-center"
                        >
                            <h1 className="text-3xl font-bold text-foreground mb-1">
                                SolarFlow
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Project Management for Solar EPCs
                            </p>
                        </motion.div>

                        {/* Loading indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex gap-1.5 mt-4"
                        >
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                    }}
                                    className="w-2 h-2 rounded-full bg-accent"
                                />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
