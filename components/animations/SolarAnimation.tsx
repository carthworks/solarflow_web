"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function SolarAnimation() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Sky gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-orange-100/50 to-background" />

            {/* Sun moving across the sky - MUCH BIGGER AND BRIGHTER */}
            <motion.div
                animate={{
                    x: ["-15%", "115%"], // Moves completely across the page
                    y: ["60%", "15%", "15%", "60%"], // Arc motion
                }}
                transition={{
                    duration: 25, // Slower for better visibility
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-0 left-0 w-48 h-48" // Much bigger container
            >
                {/* Sun with intense glow effect */}
                <div className="relative w-full h-full">
                    {/* Massive outer glow */}
                    <div className="absolute -inset-8 w-64 h-64 bg-yellow-300/60 rounded-full blur-3xl animate-pulse" />
                    {/* Second glow layer */}
                    <div className="absolute -inset-4 w-56 h-56 bg-orange-300/70 rounded-full blur-2xl" />
                    {/* Third glow layer */}
                    <div className="absolute inset-0 w-48 h-48 bg-yellow-400/80 rounded-full blur-xl" />

                    {/* Bright Sun core */}
                    <div className="absolute inset-6 w-36 h-36 bg-gradient-to-br from-yellow-200 via-yellow-300 to-orange-400 rounded-full shadow-2xl">
                        {/* Inner bright spot */}
                        <div className="absolute inset-4 bg-gradient-to-br from-white via-yellow-100 to-yellow-200 rounded-full" />

                        {/* Sun rays - longer and more prominent */}
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    scale: [1, 1.4, 1],
                                    opacity: [0.7, 1, 0.7],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.12,
                                    ease: "easeInOut",
                                }}
                                className="absolute top-1/2 left-1/2 w-2 h-16 bg-gradient-to-t from-yellow-300 via-yellow-200 to-transparent origin-bottom rounded-full shadow-lg shadow-yellow-300/50"
                                style={{
                                    transform: `translate(-50%, -100%) rotate(${i * 30}deg)`,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Earth/Ground with solar panels */}
            <div className="absolute bottom-0 left-0 right-0 h-48">
                {/* Ground with grass */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-200/60 via-green-100/40 to-transparent" />

                {/* Grass blades */}
                <GrassBlades />

                {/* Trees - Left side */}
                <div className="absolute bottom-8 left-[5%]">
                    <Tree size="medium" />
                </div>
                <div className="absolute bottom-8 left-[15%]">
                    <Tree size="small" />
                </div>

                {/* Trees - Right side */}
                <div className="absolute bottom-8 right-[5%]">
                    <Tree size="medium" />
                </div>
                <div className="absolute bottom-8 right-[15%]">
                    <Tree size="large" />
                </div>

                {/* Fountains - Near panels */}
                <div className="absolute bottom-8 left-[35%]">
                    <Fountain />
                </div>
                <div className="absolute bottom-8 right-[35%]">
                    <Fountain />
                </div>

                {/* Solar Panel Farm - Left */}
                <div className="absolute bottom-8 left-[10%] flex gap-2 z-10">
                    {[...Array(4)].map((_, i) => (
                        <SolarPanel key={`left-${i}`} delay={i * 0.3} />
                    ))}
                </div>

                {/* Solar Panel Farm - Center */}
                <div className="absolute bottom-8 left-[45%] flex gap-2 z-10">
                    {[...Array(3)].map((_, i) => (
                        <SolarPanel key={`center-${i}`} delay={i * 0.3 + 0.5} />
                    ))}
                </div>

                {/* Solar Panel Farm - Right */}
                <div className="absolute bottom-8 right-[10%] flex gap-2 z-10">
                    {[...Array(4)].map((_, i) => (
                        <SolarPanel key={`right-${i}`} delay={i * 0.3 + 1} />
                    ))}
                </div>

                {/* Energy particles rising from panels */}
                <EnergyParticles />
            </div>

            {/* Flying/Walking Birds */}
            <Birds />

            {/* Floating clouds */}
            <motion.div
                animate={{ x: ["-20%", "120%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 left-0"
            >
                <div className="w-32 h-16 bg-white/40 rounded-full blur-sm" />
            </motion.div>

            <motion.div
                animate={{ x: ["-20%", "120%"] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute top-32 left-0"
            >
                <div className="w-24 h-12 bg-white/30 rounded-full blur-sm" />
            </motion.div>
        </div>
    );
}

// Grass Blades Component - Client-side random generation
function GrassBlades() {
    const [blades, setBlades] = useState<Array<{ left: number; height: number; duration: number; delay: number }>>([]);

    useEffect(() => {
        // Generate random positions only on client-side
        const grassBlades = Array.from({ length: 30 }, () => ({
            left: Math.random() * 100,
            height: 12 + Math.random() * 8,
            duration: 2 + Math.random(),
            delay: Math.random() * 2,
        }));
        setBlades(grassBlades);
    }, []);

    if (blades.length === 0) return null;

    return (
        <div className="absolute bottom-0 left-0 right-0 h-8">
            {blades.map((blade, i) => (
                <motion.div
                    key={i}
                    animate={{
                        scaleY: [1, 1.1, 1],
                        opacity: [0.6, 0.8, 0.6],
                    }}
                    transition={{
                        duration: blade.duration,
                        repeat: Infinity,
                        delay: blade.delay,
                    }}
                    className="absolute bottom-0 w-0.5 h-4 bg-green-600/40"
                    style={{
                        left: `${blade.left}%`,
                        height: `${blade.height}px`,
                    }}
                />
            ))}
        </div>
    );
}

// Individual Solar Panel Component
function SolarPanel({ delay }: { delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="relative"
        >
            {/* Panel structure */}
            <div className="w-12 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-sm border-2 border-blue-800/50 shadow-lg">
                {/* Grid lines */}
                <div className="absolute inset-0 grid grid-cols-2 gap-0.5 p-1">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="bg-blue-800/30 rounded-sm" />
                    ))}
                </div>

                {/* Energy glow effect */}
                <motion.div
                    animate={{
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: delay,
                    }}
                    className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-orange-400/20 rounded-sm"
                />
            </div>

            {/* Panel stand */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-3 bg-gray-600" />
        </motion.div>
    );
}


// Energy Particles Rising from Panels
function EnergyParticles() {
    return (
        <>
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: "100%",
                        opacity: 0,
                    }}
                    animate={{
                        y: "-100%",
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                        ease: "easeOut",
                    }}
                    className="absolute bottom-8 w-1 h-1 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"
                    style={{
                        left: `${10 + Math.random() * 80}%`,
                    }}
                />
            ))}
        </>
    );
}

// Tree Component
function Tree({ size }: { size: "small" | "medium" | "large" }) {
    const sizes = {
        small: { trunk: "w-2 h-8", foliage: "w-12 h-12" },
        medium: { trunk: "w-3 h-12", foliage: "w-16 h-16" },
        large: { trunk: "w-4 h-16", foliage: "w-20 h-20" },
    };

    return (
        <div className="relative">
            {/* Tree trunk */}
            <div
                className={`${sizes[size].trunk} bg-gradient-to-b from-amber-800 to-amber-900 mx-auto rounded-sm`}
            />
            {/* Tree foliage */}
            <motion.div
                animate={{
                    scale: [1, 1.05, 1],
                    rotate: [-2, 2, -2],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className={`absolute -top-8 left-1/2 -translate-x-1/2 ${sizes[size].foliage} bg-gradient-to-b from-green-500 to-green-600 rounded-full`}
            >
                {/* Leaves detail */}
                <div className="absolute inset-2 bg-green-400/40 rounded-full" />
            </motion.div>
        </div>
    );
}

// Fountain Component
function Fountain() {
    return (
        <div className="relative w-8 h-12">
            {/* Fountain base */}
            <div className="absolute bottom-0 w-8 h-3 bg-gradient-to-t from-gray-600 to-gray-500 rounded-sm" />

            {/* Water droplets */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ y: 0, opacity: 0 }}
                    animate={{
                        y: [-12, -24, -12],
                        x: [0, (i - 4) * 2, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-3 left-1/2 w-1 h-1 bg-blue-400 rounded-full shadow-sm shadow-blue-300"
                />
            ))}

            {/* Water spray effect */}
            <motion.div
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.8, 1, 0.8],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
                className="absolute bottom-3 left-1/2 -translate-x-1/2 w-6 h-8 bg-gradient-to-t from-blue-300/30 to-transparent rounded-full blur-sm"
            />
        </div>
    );
}

// Birds Component - Flying/Walking
function Birds() {
    return (
        <>
            {/* Flying birds */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={`fly-${i}`}
                    initial={{ x: "-10%", y: "30%" }}
                    animate={{
                        x: ["- 10%", "110%"],
                        y: ["30%", `${25 + i * 5}%`, "30%"],
                    }}
                    transition={{
                        duration: 15 + i * 5,
                        repeat: Infinity,
                        delay: i * 5,
                        ease: "linear",
                    }}
                    className="absolute"
                >
                    {/* Bird shape - V */}
                    <div className="relative w-4 h-2">
                        <motion.div
                            animate={{ rotate: [0, -10, 0, 10, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="absolute left-0 w-2 h-0.5 bg-gray-700 origin-right"
                            style={{ transform: "rotate(-30deg)" }}
                        />
                        <motion.div
                            animate={{ rotate: [0, 10, 0, -10, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="absolute right-0 w-2 h-0.5 bg-gray-700 origin-left"
                            style={{ transform: "rotate(30deg)" }}
                        />
                    </div>
                </motion.div>
            ))}

            {/* Walking birds on ground */}
            {[...Array(2)].map((_, i) => (
                <motion.div
                    key={`walk-${i}`}
                    initial={{ x: "-5%" }}
                    animate={{
                        x: ["-5%", "105%"],
                    }}
                    transition={{
                        duration: 20 + i * 10,
                        repeat: Infinity,
                        delay: i * 10,
                        ease: "linear",
                    }}
                    className="absolute bottom-4"
                >
                    {/* Bird body */}
                    <div className="relative w-3 h-3">
                        <div className="w-3 h-2 bg-gray-600 rounded-full" />
                        <div className="absolute -top-1 left-1 w-1.5 h-1.5 bg-gray-700 rounded-full" />
                        {/* Beak */}
                        <div className="absolute top-0 -right-1 w-1 h-0.5 bg-orange-500" />
                        {/* Legs - animated walking */}
                        <motion.div
                            animate={{
                                x: [0, 1, 0, -1, 0],
                            }}
                            transition={{
                                duration: 0.4,
                                repeat: Infinity,
                            }}
                            className="absolute -bottom-1 left-0 w-0.5 h-1.5 bg-gray-700"
                        />
                        <motion.div
                            animate={{
                                x: [0, -1, 0, 1, 0],
                            }}
                            transition={{
                                duration: 0.4,
                                repeat: Infinity,
                            }}
                            className="absolute -bottom-1 right-0 w-0.5 h-1.5 bg-gray-700"
                        />
                    </div>
                </motion.div>
            ))}
        </>
    );
}
