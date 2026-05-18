"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ArrowRight, Terminal, Eye } from "lucide-react";
import { Icons } from "@/components/icons";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative bg-zinc-950">
      {/* Aurora background — only behind the text portion */}
      <AuroraBackground className="dark:bg-zinc-950 min-h-0 pb-16">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="relative flex flex-col gap-6 items-center justify-center px-4 z-10"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm text-zinc-700 dark:text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            v0.1.0 — open source
          </div>

          {/* Logo + Title */}
          <div className="flex items-center gap-3 mb-2">
            <Eye className="h-10 w-10 text-blue-500 dark:text-blue-400" />
            <span className="text-2xl font-bold dark:text-white text-zinc-900">OculOS</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold dark:text-white text-zinc-900 text-center leading-tight">
            The control plane
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
              for AI agents
            </span>
          </h1>

          <p className="font-light text-base md:text-xl dark:text-neutral-300 text-zinc-600 text-center max-w-2xl">
            Create, monitor, and manage AI agents from one dashboard.
            <br className="hidden md:block" />
            Works with any framework. No org charts. No lock-in.
          </p>

          {/* Install command */}
          <div className="flex items-center gap-2 bg-zinc-900/80 dark:bg-black/50 border border-zinc-700/50 backdrop-blur-sm rounded-xl px-5 py-3 font-mono text-sm text-white">
            <Terminal className="h-4 w-4 text-blue-400 shrink-0" />
            <span className="text-zinc-500">$</span>
            <span>pip install oculos && oculos up</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <a
              href="#install"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 text-sm font-medium transition-colors flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/agentvoy/oculos"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 border border-white/20 dark:border-white/10 backdrop-blur-sm text-zinc-800 dark:text-white rounded-full px-6 py-3 text-sm font-medium transition-colors flex items-center gap-2"
            >
              <Icons.gitHub className="h-4 w-4 fill-current" />
              View on GitHub
            </a>
          </div>
        </motion.div>
      </AuroraBackground>

      {/* Dashboard screenshot */}
      <div className="relative max-w-6xl mx-auto px-6 -mt-8 pb-0 z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow behind screenshot */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 rounded-3xl blur-2xl" />

          {/* macOS window chrome */}
          <div className="relative rounded-2xl border border-zinc-700/50 overflow-hidden shadow-[0_0_80px_rgba(99,102,241,0.15)]">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 bg-zinc-800 rounded-lg px-3 py-1 text-xs text-zinc-500 font-mono">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  localhost:9090
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <Image
              src="/screenshots/dashboard.png"
              alt="OculOS dashboard — real-time agent monitoring"
              width={1400}
              height={880}
              className="w-full block"
              priority
            />
          </div>

          {/* Bottom fade into next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none rounded-b-2xl" />
        </motion.div>
      </div>
    </div>
  );
}
