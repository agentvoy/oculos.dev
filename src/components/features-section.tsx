"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Shield,
  Sliders,
  Rocket,
  DollarSign,
  Network,
  KeyRound,
  FileCode,
  Activity,
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Health Monitoring",
    description: "Live status grid for all your agents. Polls health endpoints, tracks uptime, detects degradation automatically.",
    category: "Observe",
  },
  {
    icon: DollarSign,
    title: "Cost Tracking",
    description: "Per-task budgets with hard stops. Normalize costs across OpenAI, Claude, and Gemini in one unified view.",
    category: "Observe",
  },
  {
    icon: Network,
    title: "Distributed Tracing",
    description: "Unified trace timeline across all agents. Cross-agent correlation shows exactly how requests flow.",
    category: "Observe",
  },
  {
    icon: KeyRound,
    title: "Secrets Vault",
    description: "Centralized API key management. One-click rotation, runtime injection, per-agent access control.",
    category: "Control",
  },
  {
    icon: Shield,
    title: "Permissions & ACLs",
    description: "Define which agents can call which. Prevent runaway chains. Runtime enforcement with visual permission matrix.",
    category: "Control",
  },
  {
    icon: FileCode,
    title: "Prompt Version Control",
    description: "Git for prompts. Edit from the dashboard, diff changes, rollback instantly. A/B test two versions side by side.",
    category: "Configure",
  },
  {
    icon: Sliders,
    title: "Model Selector",
    description: "Switch any agent's model from the dashboard. GPT-4 to Claude to Gemini — one dropdown, no redeploy.",
    category: "Configure",
  },
  {
    icon: Eye,
    title: "Agent Replay",
    description: "Record full execution traces. Replay step-by-step to debug why an agent spent $14 on a simple task.",
    category: "Observe",
  },
  {
    icon: Rocket,
    title: "Project Wizard",
    description: "Create agent projects from the UI. Pick a template, choose a model, configure tools, deploy — no terminal needed.",
    category: "Create",
  },
];

const categoryColors: Record<string, string> = {
  Observe: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  Control: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  Configure: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  Create: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
};

const iconColors: Record<string, string> = {
  Observe: "text-blue-400",
  Control: "text-indigo-400",
  Configure: "text-violet-400",
  Create: "text-emerald-400",
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-zinc-950 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-zinc-950 to-zinc-950" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Everything you need to run agents
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Observe, control, configure, and deploy — all from one dashboard.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm p-6 hover:border-zinc-700/50 hover:bg-zinc-900/60 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-zinc-800/50">
                  <feature.icon className={`h-5 w-5 ${iconColors[feature.category]}`} />
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${categoryColors[feature.category]}`}>
                  {feature.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
