"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { SolarAnimation } from "@/components/animations/SolarAnimation";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-32 pb-20 min-h-[600px]">
      {/* Animated Solar Background */}
      <SolarAnimation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Pain-driven headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Stop Losing Projects to{" "}
              <span className="text-accent">Chaos</span>
            </h1>

            {/* Clear subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Track solar projects from lead to payment. Give customers
              real-time updates. Get paid on time. All in one place.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg group"
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg group"
              >
                <Play className="mr-2 h-5 w-5" />
                See How It Works
              </Button>
            </div>

            {/* Trust indicator */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 text-sm text-muted-foreground"
            >
              Built for rooftop solar EPCs in India
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
