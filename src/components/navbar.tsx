"use client";

import { Eye } from "lucide-react";
import Link from "next/link";
import { Icons } from "@/components/icons";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Eye className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-bold text-white">OculOS</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#install" className="hover:text-white transition-colors">Install</a>
          <a href="#compare" className="hover:text-white transition-colors">Compare</a>
          <a
            href="https://github.com/agentvoy/oculos"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Icons.gitHub className="h-5 w-5 fill-current" />
          </a>
        </div>

        <a
          href="#install"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
