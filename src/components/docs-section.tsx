"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

const tabs = [
  { id: "server", label: "Server" },
  { id: "sdk", label: "SDK Client" },
  { id: "middleware", label: "Middleware" },
  { id: "decorator", label: "Decorator" },
];

const docs: Record<string, { heading: string; description: string; code: string; language: string }[]> = {
  server: [
    {
      heading: "Install & start",
      description: "One command spins up the control plane and serves the dashboard at localhost:9090.",
      code: `pip install oculos\noculos up`,
      language: "bash",
    },
    {
      heading: "CLI commands",
      description: "Inspect and manage agents without opening a browser.",
      code: `oculos status          # server health + cost summary\noculos agents list     # all registered agents\noculos agents add      # manually register an agent\noculos agents remove   # deregister an agent`,
      language: "bash",
    },
  ],
  sdk: [
    {
      heading: "Register an agent",
      description: "Register once at startup. The server auto-tracks status from there.",
      code: `from oculos_sdk import Oculos\n\nax = Oculos(server="http://localhost:9090")\nax.register(\n    name="summarizer",\n    framework="langchain",\n    model="gpt-4o",\n)`,
      language: "python",
    },
    {
      heading: "Track tasks with budgets",
      description: "Wrap any task in a context manager. Cost and traces are sent automatically.",
      code: `with ax.task("summarize-report", budget="$2.00") as task:\n    response = openai.chat.completions.create(...)\n\n    task.report_cost(\n        cost=0.045,\n        model="gpt-4o",\n        provider="openai",\n        tokens_in=500,\n        tokens_out=200,\n    )\n    task.complete(response.choices[0].message.content)`,
      language: "python",
    },
  ],
  middleware: [
    {
      heading: "FastAPI auto-instrumentation",
      description: "Drop one line into any FastAPI app. Every request gets traced automatically — no other changes needed.",
      code: `from fastapi import FastAPI\nfrom oculos_sdk.middleware import OculosMiddleware\n\napp = FastAPI()\napp.add_middleware(\n    OculosMiddleware,\n    agent_name="my-api",\n    server="http://localhost:9090",\n)`,
      language: "python",
    },
    {
      heading: "What it tracks",
      description: "The middleware records the full request lifecycle and propagates a trace ID through the response header.",
      code: `# Automatically captured per request:\n#   X-Oculos-Trace-Id   — unique trace ID (header)\n#   event_type          — agent_start / agent_complete / error\n#   method + path       — HTTP method and route\n#   status_code         — response status\n#   duration_ms         — wall-clock latency`,
      language: "python",
    },
  ],
  decorator: [
    {
      heading: "Decorate any function",
      description: "Wrap sync or async functions to auto-send start, complete, and error events.",
      code: `from oculos_sdk.decorators import track, track_async\nfrom oculos_sdk import Oculos\n\nax = Oculos(server="http://localhost:9090")\nax.register(name="my-agent")\n\n@track(ax)\ndef run_agent(prompt: str) -> str:\n    # Your agent logic here\n    return result\n\n@track_async(ax)\nasync def run_agent_async(prompt: str) -> str:\n    # Async agent logic\n    return result`,
      language: "python",
    },
  ],
};

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl bg-zinc-950 border border-zinc-800/50 overflow-hidden">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-1.5 rounded-lg text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800 transition-colors z-10"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
      <pre className="p-5 text-sm font-mono text-zinc-300 overflow-x-auto leading-relaxed whitespace-pre">
        {code}
      </pre>
    </div>
  );
}

export function DocsSection() {
  const [activeTab, setActiveTab] = useState("server");
  const items = docs[activeTab];

  return (
    <section id="docs" className="py-24 bg-zinc-950 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/20 to-zinc-950" />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Simple by design
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Four integration paths. Pick the one that fits your stack.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex items-center gap-1 bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-1 w-fit mx-auto mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-zinc-700 text-white"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {items.map((item) => (
            <div key={item.heading} className="flex flex-col gap-3">
              <div>
                <h3 className="text-base font-semibold text-white mb-1">{item.heading}</h3>
                <p className="text-sm text-zinc-400">{item.description}</p>
              </div>
              <CodeBlock code={item.code} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
