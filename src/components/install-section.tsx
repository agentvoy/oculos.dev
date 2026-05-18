"use client";

import { motion } from "framer-motion";
import { Terminal, Check, Copy } from "lucide-react";
import { useState } from "react";

const steps = [
  { label: "Install", code: "pip install oculos" },
  { label: "Start", code: "oculos up" },
  { label: "Open dashboard", code: "# http://localhost:9090" },
];

const integrations = [
  {
    title: "SDK Middleware",
    subtitle: "One line for existing apps",
    code: `from oculos_sdk.middleware import OculosMiddleware\napp.add_middleware(OculosMiddleware)`,
    gradient: "from-blue-500/10 to-transparent",
  },
  {
    title: "Standalone SDK",
    subtitle: "Any Python agent",
    code: `from oculos_sdk import Oculos\nax = Oculos(server="http://localhost:9090")\nax.register(name="my-agent", model="gpt-4o")\n\nwith ax.task("summarize", budget="$2.00") as t:\n    t.report_cost(0.045, model="gpt-4o")\n    t.complete(result)`,
    gradient: "from-indigo-500/10 to-transparent",
  },
  {
    title: "Passive Mode",
    subtitle: "Zero code changes",
    code: `# Register agents manually in dashboard\n# OculOS polls /health and /ws/trace`,
    gradient: "from-violet-500/10 to-transparent",
  },
];

export function InstallSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("pip install oculos && oculos up");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="install" className="py-24 bg-zinc-950 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/30 to-zinc-950" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Running in 30 seconds
          </h2>
          <p className="text-zinc-400 text-lg">
            No Postgres. No org charts. No 400-line config files.
          </p>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="rounded-2xl border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/50">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                </div>
                <span className="text-xs text-zinc-500 ml-2">Terminal</span>
              </div>
              <button
                onClick={handleCopy}
                className="text-zinc-500 hover:text-zinc-300 transition-colors p-1"
              >
                {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
            <div className="p-6 space-y-4 font-mono text-sm">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-zinc-600"># {step.label}</span>
                    <div className="text-blue-300">{step.code}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Integration paths */}
        <div className="grid md:grid-cols-3 gap-5">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm overflow-hidden"
            >
              <div className={`bg-gradient-to-b ${integration.gradient} p-6`}>
                <h3 className="text-lg font-semibold text-white mb-1">{integration.title}</h3>
                <p className="text-sm text-zinc-400">{integration.subtitle}</p>
              </div>
              <div className="px-6 pb-6">
                <div className="rounded-xl bg-zinc-950/80 border border-zinc-800/30 p-4 font-mono text-xs text-zinc-300 whitespace-pre-wrap">
                  {integration.code}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
