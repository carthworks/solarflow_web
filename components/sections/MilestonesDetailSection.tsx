"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Circle, Clock, AlertCircle } from "lucide-react";

// Typical solar project milestones with subtasks
const milestones = [
    {
        id: 1,
        name: "Site Survey & Assessment",
        status: "completed",
        subtasks: [
            { name: "Initial site visit scheduled", completed: true },
            { name: "Roof structure assessment", completed: true },
            { name: "Shadow analysis completed", completed: true },
            { name: "Electrical infrastructure check", completed: true },
            { name: "Survey report generated", completed: true },
        ],
    },
    {
        id: 2,
        name: "System Design & Proposal",
        status: "completed",
        subtasks: [
            { name: "Load analysis completed", completed: true },
            { name: "System size calculation", completed: true },
            { name: "Panel layout design", completed: true },
            { name: "Financial proposal prepared", completed: true },
            { name: "Customer approval received", completed: true },
        ],
    },
    {
        id: 3,
        name: "DISCOM Application & Approvals",
        status: "in-progress",
        subtasks: [
            { name: "Technical feasibility application submitted", completed: true },
            { name: "Feasibility approval received", completed: true },
            { name: "Net metering application submitted", completed: true },
            { name: "Waiting for net metering approval", completed: false, delayed: true },
            { name: "Subsidy application (if applicable)", completed: false },
        ],
    },
    {
        id: 4,
        name: "Procurement & Logistics",
        status: "pending",
        subtasks: [
            { name: "Solar panels ordered", completed: false },
            { name: "Inverter procurement", completed: false },
            { name: "Mounting structure ordered", completed: false },
            { name: "Balance of system (BOS) items", completed: false },
            { name: "Materials delivered to site", completed: false },
        ],
    },
    {
        id: 5,
        name: "Installation & Setup",
        status: "pending",
        subtasks: [
            { name: "Mounting structure installation", completed: false },
            { name: "Solar panel installation", completed: false },
            { name: "Inverter & electrical wiring", completed: false },
            { name: "Earthing & lightning protection", completed: false },
            { name: "AC/DC cabling completed", completed: false },
        ],
    },
    {
        id: 6,
        name: "Testing & Commissioning",
        status: "pending",
        subtasks: [
            { name: "System testing & quality check", completed: false },
            { name: "Performance verification", completed: false },
            { name: "Safety inspection", completed: false },
            { name: "DISCOM inspection scheduled", completed: false },
            { name: "Net meter installation by DISCOM", completed: false },
        ],
    },
    {
        id: 7,
        name: "Documentation & Handover",
        status: "pending",
        subtasks: [
            { name: "As-built drawings prepared", completed: false },
            { name: "O&M manual provided", completed: false },
            { name: "Warranty documents", completed: false },
            { name: "Customer training completed", completed: false },
            { name: "Final handover & sign-off", completed: false },
        ],
    },
    {
        id: 8,
        name: "Payment Collection",
        status: "partial",
        subtasks: [
            { name: "Advance payment (30%)", completed: true },
            { name: "Installation payment (40%)", completed: true },
            { name: "Commissioning payment (20%)", completed: false },
            { name: "Final payment after net meter (10%)", completed: false },
            { name: "Subsidy claim processing", completed: false },
        ],
    },
];

const getStatusIcon = (status: string) => {
    switch (status) {
        case "completed":
            return <CheckCircle2 className="w-5 h-5 text-green-600" />;
        case "in-progress":
            return <Clock className="w-5 h-5 text-accent animate-pulse" />;
        case "partial":
            return <Circle className="w-5 h-5 text-blue-600" />;
        default:
            return <Circle className="w-5 h-5 text-muted-foreground" />;
    }
};

const getStatusColor = (status: string) => {
    switch (status) {
        case "completed":
            return "border-green-500 bg-green-50";
        case "in-progress":
            return "border-accent bg-accent/5";
        case "partial":
            return "border-blue-500 bg-blue-50";
        default:
            return "border-border bg-background";
    }
};

export function MilestonesDetailSection() {
    return (
        <section className="py-12 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-8"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                            Detailed Milestone Tracking
                        </h3>
                        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                            Track every stage from site survey to payment collection with granular subtask visibility
                        </p>
                    </motion.div>

                    {/* Milestones Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.03 }}
                            >
                                <Card
                                    className={`p-4 border transition-all hover:shadow-md ${getStatusColor(
                                        milestone.status
                                    )}`}
                                >
                                    {/* Milestone Header */}
                                    <div className="flex items-start gap-2 mb-3">
                                        <div className="mt-0.5">{getStatusIcon(milestone.status)}</div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-bold text-foreground mb-1 leading-tight">
                                                {milestone.name}
                                            </h4>
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <span
                                                    className={`text-xs font-semibold px-1.5 py-0.5 rounded ${milestone.status === "completed"
                                                            ? "bg-green-100 text-green-700"
                                                            : milestone.status === "in-progress"
                                                                ? "bg-accent/20 text-accent"
                                                                : milestone.status === "partial"
                                                                    ? "bg-blue-100 text-blue-700"
                                                                    : "bg-muted text-muted-foreground"
                                                        }`}
                                                >
                                                    {milestone.status === "completed"
                                                        ? "Done"
                                                        : milestone.status === "in-progress"
                                                            ? "Active"
                                                            : milestone.status === "partial"
                                                                ? "Partial"
                                                                : "Pending"}
                                                </span>
                                                <span className="text-xs text-muted-foreground">
                                                    {milestone.subtasks.filter((t) => t.completed).length}/
                                                    {milestone.subtasks.length}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Subtasks List */}
                                    <div className="space-y-1 ml-7">
                                        {milestone.subtasks.map((subtask, subIndex) => (
                                            <div
                                                key={subIndex}
                                                className="flex items-start gap-1.5 text-xs"
                                            >
                                                {subtask.completed ? (
                                                    <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                                                ) : subtask.delayed ? (
                                                    <AlertCircle className="w-3 h-3 text-red-600 mt-0.5 flex-shrink-0" />
                                                ) : (
                                                    <Circle className="w-3 h-3 text-muted-foreground mt-0.5 flex-shrink-0" />
                                                )}
                                                <span
                                                    className={`leading-tight ${subtask.completed
                                                            ? "text-muted-foreground line-through"
                                                            : subtask.delayed
                                                                ? "text-red-600 font-medium"
                                                                : "text-foreground"
                                                        }`}
                                                >
                                                    {subtask.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mt-8 p-4 bg-accent/10 border border-accent/30 rounded-lg"
                    >
                        <h4 className="font-bold text-sm text-foreground mb-2 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-accent" />
                            Real-Time Tracking Benefits
                        </h4>
                        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 text-xs text-muted-foreground">
                            <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                                <span>Instant project visibility</span>
                            </li>
                            <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                                <span>Automatic delay alerts</span>
                            </li>
                            <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                                <span>Customer self-service</span>
                            </li>
                            <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                                <span>Milestone-based payments</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
