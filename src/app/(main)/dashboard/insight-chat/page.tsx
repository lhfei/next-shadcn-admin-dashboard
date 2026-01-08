"use client";

import { useState } from "react";

import {
  BarChart3,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  History,
  MoreHorizontal,
  Network,
  Send,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function InsightChatPage() {
  const [messages, _setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I am your AI Financial Analyst. I have indexed your recently processed reports. How can I help you today?",
    },
    {
      role: "user",
      content: "Compare Apple's revenue and gross margin between Q2 and Q3 2024.",
    },
    {
      role: "assistant",
      content: "Based on the processed documents, here is the comparison between Apple's Q2 and Q3 results for 2024:",
      isAi: true,
      data: {
        highlights: [
          { label: "Revenue", q2: "$90.8B", q3: "$85.8B", trend: "down" },
          { label: "Gross Margin", q2: "44.6%", q3: "46.3%", trend: "up" },
        ],
        citation: "Source: Apple 2024 Q2/Q3 10-Q Reports (P.14 & P.23)",
      },
    },
  ]);

  return (
    <div className="flex h-[calc(100vh-120px)] gap-6 overflow-hidden p-4 md:p-8">
      {/* Main Chat Area */}
      <div className="flex flex-1 flex-col gap-4 overflow-hidden">
        <Card className="flex flex-1 flex-col overflow-hidden border-none bg-background/50 shadow-premium backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between border-b px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="size-9 border-2 border-primary/20">
                  <AvatarImage src="/ai-avatar.png" />
                  <AvatarFallback className="bg-primary/10 text-primary">AI</AvatarFallback>
                </Avatar>
                <div className="absolute -right-1 -bottom-1 size-3 rounded-full border-2 border-background bg-green-500" />
              </div>
              <div>
                <CardTitle className="font-bold text-base">Insight Chat</CardTitle>
                <CardDescription className="flex items-center gap-1 text-[10px]">
                  <div className="size-1 animate-pulse rounded-full bg-green-500" />
                  Context: 24 active documents indexed
                </CardDescription>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" className="size-8">
                <History className="size-4" />
              </Button>
              <Button size="icon" variant="ghost" className="size-8">
                <Download className="size-4" />
              </Button>
              <Button size="icon" variant="ghost" className="size-8">
                <MoreHorizontal className="size-4" />
              </Button>
            </div>
          </CardHeader>

          <ScrollArea className="flex-1 p-6">
            <div className="mx-auto max-w-4xl space-y-6">
              {messages.map((m, i) => (
                <div key={`${m.role}-${i}`} className={cn("flex gap-4", m.role === "user" ? "flex-row-reverse" : "")}>
                  <Avatar className="size-8 shrink-0 border shadow-premium">
                    <AvatarFallback
                      className={cn("text-[10px]", m.role === "user" ? "bg-muted" : "bg-primary/10 text-primary")}
                    >
                      {m.role === "user" ? "U" : "AI"}
                    </AvatarFallback>
                  </Avatar>
                  <div className={cn("flex max-w-[85%] flex-col gap-2", m.role === "user" ? "items-end" : "")}>
                    <div
                      className={cn(
                        "rounded-2xl p-4 text-sm leading-relaxed shadow-sm",
                        m.role === "user" ? "bg-primary text-primary-foreground shadow-glow" : "border bg-muted/50",
                      )}
                    >
                      {m.content}
                    </div>

                    {m.isAi && m.data && (
                      <div className="fade-in slide-in-from-bottom-2 w-full animate-in space-y-3 duration-500">
                        <div className="grid grid-cols-2 gap-3">
                          {m.data.highlights?.map(
                            (h: { label: string; q2: string; q3: string; trend: string }, _j: number) => (
                              <div
                                key={h.label}
                                className="flex cursor-pointer flex-col gap-1 rounded-xl border bg-background/80 p-3 shadow-sm transition-all hover:border-primary/50"
                              >
                                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                                  {h.label}
                                </span>
                                <div className="flex items-center justify-between">
                                  <span className="font-semibold text-sm">{h.q3}</span>
                                  <Badge
                                    variant="outline"
                                    className={cn(
                                      "border-none text-[8px]",
                                      h.trend === "up"
                                        ? "bg-green-500/10 text-green-500"
                                        : "bg-amber-500/10 text-amber-500",
                                    )}
                                  >
                                    {h.trend === "up" ? "+" : "-"} {h.q2} Prev
                                  </Badge>
                                </div>
                                <div className="mt-1 flex items-center justify-between border-t pt-1 opacity-0 transition-opacity hover:opacity-100">
                                  <span className="text-[8px] text-primary">Traceability P.14</span>
                                  <ChevronRight className="size-2.5 text-primary" />
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                        {m.data.citation && (
                          <div className="flex w-fit cursor-pointer items-center gap-1.5 rounded-lg border border-primary/10 bg-primary/5 p-2 text-[10px] text-primary/70 transition-colors hover:bg-primary/10">
                            <FileText className="size-3" />
                            {m.data.citation}
                            <ExternalLink className="size-2.5" />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="border-t bg-background/80 p-4">
            <div className="relative mx-auto max-w-4xl">
              <Input
                placeholder="Ask about risks, trends, or compliance..."
                className="h-12 rounded-xl bg-muted/50 pr-12 pl-4 shadow-inner focus-visible:ring-primary"
              />
              <Button size="icon" className="absolute top-1.5 right-1.5 size-9 rounded-lg shadow-glow">
                <Send className="size-4" />
              </Button>
            </div>
            <div className="mt-3 flex justify-center gap-2">
              <Badge
                variant="outline"
                className="cursor-pointer rounded-full border-primary/20 px-3 py-1 font-normal text-xs hover:bg-muted"
              >
                Compare Q3 vs Q2
              </Badge>
              <Badge
                variant="outline"
                className="cursor-pointer rounded-full border-primary/20 px-3 py-1 font-normal text-xs hover:bg-muted"
              >
                Risk Factors
              </Badge>
              <Badge
                variant="outline"
                className="cursor-pointer rounded-full border-primary/20 px-3 py-1 font-normal text-xs hover:bg-muted"
              >
                Summarize ESG
              </Badge>
            </div>
          </div>
        </Card>
      </div>

      {/* Right Context Panel */}
      <div className="hidden w-80 flex-col gap-4 xl:flex">
        <Card className="flex flex-1 flex-col border-none bg-background/50 shadow-premium backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 font-semibold text-sm">
              <Sparkles className="size-4 text-primary" />
              Real-time Context Panel
            </CardTitle>
            <CardDescription className="text-[10px]">Context-aware suggestions based on conversation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 font-medium text-xs">
                  <BarChart3 className="size-3 text-primary" />
                  Revenue Trend
                </span>
                <Badge variant="outline" className="text-[10px]">
                  Last 4 Quarters
                </Badge>
              </div>
              <div className="group relative flex h-32 items-end justify-between gap-1 overflow-hidden rounded-lg border bg-muted/20 p-3">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
                <div className="h-3/4 w-1/4 rounded-t-sm bg-primary/20 transition-all group-hover:bg-primary/30" />
                <div className="h-1/2 w-1/4 rounded-t-sm bg-primary/20 transition-all group-hover:bg-primary/30" />
                <div className="h-2/3 w-1/4 rounded-t-sm bg-primary/20 transition-all group-hover:bg-primary/30" />
                <div className="h-full w-1/4 animate-pulse rounded-t-sm bg-primary shadow-glow" />
              </div>
              <div className="flex items-start gap-2 rounded-lg border border-green-500/10 bg-green-500/5 p-2 font-medium text-[10px] text-green-500">
                <TrendingUp className="mt-0.5 size-3 shrink-0" />
                Revenue recovery detected in hardware unit.
              </div>
            </div>

            <Separator className="bg-primary/10" />

            <div className="space-y-3">
              <span className="flex items-center gap-1 font-medium text-xs">
                <Network className="size-3 text-primary" />
                Entity Relationship Graph
              </span>
              <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-lg border bg-zinc-950 p-4 shadow-inner">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.1)_0%,transparent_70%)]" />
                <div className="z-10 flex size-12 items-center justify-center rounded-full border-2 border-primary/50 bg-primary/10 font-bold text-[10px] text-primary shadow-glow">
                  Apple
                </div>
                <div className="absolute top-4 left-10 flex size-8 items-center justify-center rounded-full border border-muted-foreground/30 text-[8px] text-muted-foreground backdrop-blur-sm">
                  Supplier
                </div>
                <div className="absolute right-6 bottom-8 flex size-10 items-center justify-center rounded-full border border-muted-foreground/30 text-[8px] text-muted-foreground backdrop-blur-sm">
                  Competitor
                </div>
                {/* SVG connectors simulation */}
                <svg
                  className="pointer-events-none absolute inset-0 size-full opacity-20"
                  role="img"
                  aria-label="Visual connectors"
                >
                  <title>Visual connectors</title>
                  <line x1="160" y1="80" x2="60" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
                  <line
                    x1="160"
                    y1="80"
                    x2="240"
                    y2="130"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="4 2"
                  />
                </svg>
              </div>
            </div>

            <div className="mt-auto pt-4">
              <Button variant="outline" className="h-8 w-full gap-2 border-primary/20 text-[10px] hover:bg-primary/5">
                Download Briefing
                <Download className="size-3" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
