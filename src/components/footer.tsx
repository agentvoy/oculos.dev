import { Eye } from "lucide-react";
import { Icons } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-blue-400" />
            <span className="font-semibold text-white">OculOS</span>
            <span className="text-zinc-600 text-sm ml-2">
              The control plane for AI agents
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <a
              href="https://github.com/agentvoy/oculos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Icons.gitHub className="h-4 w-4 fill-current" />
              GitHub
            </a>
            <a
              href="https://github.com/agentvoy/oculos.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Website
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-800/30 text-center text-sm text-zinc-700">
          Apache 2.0 License. Built by the AgentVoy team.
        </div>
      </div>
    </footer>
  );
}
