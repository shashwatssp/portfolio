"use client"

import type React from "react"
import { createElement } from "react"
import {
  Blocks,
  Code2,
  Database,
  FileText,
  Layers,
  Lock,
  RefreshCw,
  ScanText,
  Sparkles,
} from "lucide-react"
import {
  SiArgo,
  SiCplusplus,
  SiDocker,
  SiFastapi,
  SiFirebase,
  SiFlutter,
  SiGo,
  SiGoogle,
  SiIstio,
  SiJavascript,
  SiKubernetes,
  SiLangchain,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiQdrant,
  SiReact,
  SiRedis,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si"

type IconComponent = (props: { size?: number; className?: string }) => React.ReactNode

/** Ordered rules: first match wins. More specific patterns must come first. */
const ICON_RULES: Array<[RegExp, IconComponent]> = [
  [/mcp/i, Blocks],
  [/google/i, SiGoogle],
  [/react/i, SiReact],
  [/next\.?js/i, SiNextdotjs],
  [/typescript/i, SiTypescript],
  [/javascript/i, SiJavascript],
  [/python/i, SiPython],
  [/fastapi/i, SiFastapi],
  [/\bgo\b/i, SiGo],
  [/supabase/i, SiSupabase],
  [/docker/i, SiDocker],
  [/kubernetes/i, SiKubernetes],
  [/qdrant/i, SiQdrant],
  [/langchain/i, SiLangchain],
  [/firebase/i, SiFirebase],
  [/flutter/i, SiFlutter],
  [/tailwind/i, SiTailwindcss],
  [/vite/i, SiVite],
  [/postgres/i, SiPostgresql],
  [/redis/i, SiRedis],
  [/mongo/i, SiMongodb],
  [/istio/i, SiIstio],
  [/argo/i, SiArgo],
  [/c\+\+|cpp/i, SiCplusplus],
  [/rag/i, Database],
  [/llm/i, Sparkles],
  [/ocr/i, ScanText],
  [/ci\s*\/\s*cd/i, RefreshCw],
  [/pdf|tesseract/i, FileText],
  [/crypto/i, Lock],
  [/provider|riverpod/i, Layers],
]

export function resolveTechIcon(name: string): IconComponent {
  for (const [pattern, icon] of ICON_RULES) {
    if (pattern.test(name)) return icon
  }
  return Code2
}

interface TechIconProps {
  name: string
  size?: number
  className?: string
}

/** Brand/semantic icon for a technology tag, resolved from its display name. */
export default function TechIcon({ name, size = 13, className }: TechIconProps) {
  const Icon = resolveTechIcon(name)
  return createElement(
    Icon as unknown as React.ComponentType<{
      size?: number
      className?: string
      "aria-hidden"?: boolean
    }>,
    { size, className, "aria-hidden": true },
  )
}
