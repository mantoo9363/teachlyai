"use client";

import { usePathname } from "next/navigation";

const DASHBOARD_PREFIX = "/dashboard/ai-simulation";
const PUBLIC_PREFIX = "/ai-simulation";

/**
 * This app is compiled into two different host routes (the public
 * `/ai-simulation/*` pages and the dashboard-embedded
 * `/dashboard/ai-simulation/*` pages, see @ai/* alias usage in the host
 * repo) — every internal "back to hub" / "finish topic" navigation needs to
 * stay under whichever one it was actually reached through, rather than
 * hardcoding one and kicking the user out of the other.
 */
export function useAiHubPath(): string {
  const pathname = usePathname() || "";
  return pathname.startsWith(DASHBOARD_PREFIX) ? DASHBOARD_PREFIX : PUBLIC_PREFIX;
}
