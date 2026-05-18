"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "Works with 1 agent", oculos: true, others: false },
  { feature: "Zero-config startup (SQLite)", oculos: true, others: false },
  { feature: "Full web dashboard", oculos: true, others: false },
  { feature: "Framework agnostic", oculos: true, others: false },
  { feature: "Per-task budgets", oculos: true, others: false },
  { feature: "Distributed tracing", oculos: true, others: false },
  { feature: "Prompt version control & A/B testing", oculos: true, others: false },
  { feature: "Centralized secrets vault", oculos: true, others: false },
  { feature: "Agent execution replay", oculos: true, others: false },
  { feature: "Project creation from UI", oculos: true, others: false },
  { feature: "Agent-to-agent permission graph", oculos: true, others: false },
];

export function ComparisonSection() {
  return (
    <section id="compare" className="py-24 bg-zinc-950 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/20 to-zinc-950" />

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Why OculOS
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Most agent platforms force you into their framework.
            <br />
            OculOS works with what you already have.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm overflow-hidden"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-800/50">
                <th className="text-left text-sm font-medium text-zinc-500 p-5">Feature</th>
                <th className="text-center text-sm font-semibold text-blue-400 p-5 w-36">OculOS</th>
                <th className="text-center text-sm font-medium text-zinc-600 p-5 w-36">Others</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr
                  key={row.feature}
                  className={i < comparisons.length - 1 ? "border-b border-zinc-800/30" : ""}
                >
                  <td className="p-5 text-sm text-zinc-300">{row.feature}</td>
                  <td className="p-5 text-center">
                    {row.oculos ? (
                      <div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-500/10">
                        <Check className="h-4 w-4 text-emerald-400" />
                      </div>
                    ) : (
                      <div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-zinc-800/50">
                        <X className="h-4 w-4 text-zinc-600" />
                      </div>
                    )}
                  </td>
                  <td className="p-5 text-center">
                    {row.others ? (
                      <div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-500/10">
                        <Check className="h-4 w-4 text-emerald-400" />
                      </div>
                    ) : (
                      <div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-zinc-800/50">
                        <X className="h-4 w-4 text-zinc-600" />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
