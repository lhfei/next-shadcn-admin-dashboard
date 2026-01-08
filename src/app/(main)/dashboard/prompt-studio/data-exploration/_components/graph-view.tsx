"use client";

import { useState } from "react";

import { GitBranch, Info, Maximize2, Minus, Plus, Search, Settings2, Target } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function GraphView() {
  const [activeSearch, setActiveSearch] = useState(false);

  return (
    <div className="fade-in zoom-in-95 relative h-[700px] w-full animate-in overflow-hidden rounded-2xl border border-muted-foreground/10 bg-card/30 backdrop-blur-md duration-500">
      {/* Toolbar */}
      <div className="absolute top-4 right-4 left-4 z-40 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "flex h-10 items-center rounded-full border border-muted-foreground/20 bg-background/80 px-3 backdrop-blur-md transition-all duration-300",
              activeSearch ? "w-64" : "w-10 overflow-hidden",
            )}
          >
            <Search
              className="size-4 shrink-0 cursor-pointer text-muted-foreground"
              onClick={() => setActiveSearch(!activeSearch)}
            />
            <Input
              placeholder="搜索节点名称..."
              className="h-full border-none bg-transparent text-xs placeholder:text-muted-foreground/50 focus-visible:ring-0"
            />
          </div>
          <div className="flex h-10 items-center rounded-full border border-muted-foreground/20 bg-background/80 p-1 backdrop-blur-md">
            <Button variant="ghost" size="icon" className="size-8 rounded-full hover:bg-primary/10 hover:text-primary">
              <Target className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" className="size-8 rounded-full hover:bg-primary/10 hover:text-primary">
              <GitBranch className="size-4" />
            </Button>
            <div className="mx-1 h-4 w-[1px] bg-muted-foreground/20" />
            <Button variant="ghost" size="icon" className="size-8 rounded-full hover:bg-primary/10 hover:text-primary">
              <Settings2 className="size-4" />
            </Button>
          </div>
        </div>

        <div className="flex h-10 items-center gap-3 rounded-full border border-muted-foreground/20 bg-background/80 px-4 backdrop-blur-md">
          <span className="animate-pulse font-bold text-primary text-xs">实时引擎已就绪</span>
          <div className="h-4 w-[1px] bg-muted-foreground/20" />
          <div className="flex gap-2">
            <div className="flex items-center gap-1.5">
              <div className="size-1.5 rounded-full bg-blue-500" />
              <span className="text-[10px] text-muted-foreground">公司</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="size-1.5 rounded-full bg-primary" />
              <span className="text-[10px] text-muted-foreground">技术</span>
            </div>
          </div>
        </div>
      </div>

      {/* Canvas Mockup (SVG) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)]">
        <svg className="h-full w-full" viewBox="0 0 1000 700" role="img" aria-label="Knowledge Graph Visualization">
          <title>Knowledge Graph Visualization</title>
          {/* Connection Lines */}
          <line
            x1="500"
            y1="200"
            x2="500"
            y2="350"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="text-muted-foreground/20"
          />
          <line
            x1="500"
            y1="350"
            x2="350"
            y2="500"
            stroke="currentColor"
            strokeWidth="1"
            className="text-muted-foreground/20"
          />
          <line x1="500" y1="350" x2="650" y2="450" stroke="currentColor" strokeWidth="2" className="text-primary/10" />
          <line x1="650" y1="450" x2="750" y2="300" stroke="currentColor" strokeWidth="1" className="text-primary/10" />

          {/* Nodes */}
          {/* Center: XX Tech */}
          <g className="group transform cursor-pointer transition-all duration-300 hover:scale-110">
            <rect
              x="420"
              y="150"
              width="160"
              height="60"
              rx="30"
              className="fill-background/80 stroke-2 stroke-primary/30 drop-shadow-xl"
            />
            <text x="500" y="180" textAnchor="middle" className="fill-foreground font-bold text-sm">
              XX 科技
            </text>
            <text x="500" y="195" textAnchor="middle" className="fill-muted-foreground text-[10px] uppercase">
              (公司)
            </text>
          </g>

          {/* AI Platform */}
          <g className="group transform cursor-pointer transition-all duration-300 hover:scale-110">
            <rect
              x="420"
              y="320"
              width="160"
              height="60"
              rx="10"
              className="fill-primary/10 stroke-2 stroke-primary/40"
            />
            <text x="500" y="350" textAnchor="middle" className="fill-foreground font-bold text-sm">
              智能算法平台
            </text>
            <text x="500" y="365" textAnchor="middle" className="fill-primary/70 text-[10px] uppercase">
              (核心技术)
            </text>
          </g>

          {/* Dr. Zhang */}
          <g className="group transform cursor-pointer transition-all duration-300 hover:scale-110">
            <circle cx="750" cy="280" r="40" className="fill-background/80 stroke-2 stroke-orange-500/30" />
            <text x="750" y="285" textAnchor="middle" className="fill-foreground font-bold text-xs">
              张博士
            </text>
          </g>

          {/* Risk Control */}
          <g className="group transform cursor-pointer transition-all duration-300 hover:scale-110">
            <rect
              x="300"
              y="480"
              width="100"
              height="40"
              rx="5"
              className="fill-blue-500/5 stroke-1 stroke-blue-500/20"
            />
            <text x="350" y="505" textAnchor="middle" className="fill-foreground font-medium text-[10px]">
              金融风控系统
            </text>
          </g>
        </svg>
      </div>

      {/* Side Legend Panel */}
      <div className="pointer-events-none absolute top-20 right-4 bottom-4 z-40 w-48">
        <div className="pointer-events-auto flex h-full flex-col gap-6 rounded-2xl border border-muted-foreground/10 bg-background/80 p-4 shadow-2xl backdrop-blur-md">
          <div className="space-y-4">
            <h4 className="font-bold text-[10px] text-muted-foreground uppercase tracking-widest">节点类型</h4>
            <div className="space-y-2">
              {[
                { label: "公司", count: 2, color: "bg-blue-500" },
                { label: "技术", count: 5, color: "bg-primary" },
                { label: "人员", count: 8, color: "bg-orange-500" },
                { label: "产品", count: 3, color: "bg-purple-500" },
              ].map((type) => (
                <div
                  key={type.label}
                  className="group flex cursor-pointer items-center justify-between rounded-lg p-1.5 transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-center gap-2">
                    <div className={cn("size-2 rounded-full", type.color)} />
                    <span className="text-xs">{type.label}</span>
                  </div>
                  <span className="font-bold text-[10px] text-muted-foreground">({type.count})</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-[10px] text-muted-foreground uppercase tracking-widest">关系类型</h4>
            <div className="space-y-2">
              {[
                { label: "拥有", count: 12 },
                { label: "应用", count: 7 },
                { label: "研发", count: 5 },
              ].map((rel) => (
                <div
                  key={rel.label}
                  className="group flex cursor-pointer items-center justify-between rounded-lg p-1.5 transition-colors hover:bg-muted/50"
                >
                  <span className="text-muted-foreground text-xs">── {rel.label}</span>
                  <span className="font-bold text-[10px] text-muted-foreground">({rel.count})</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto space-y-2 rounded-xl border border-primary/10 bg-primary/5 p-3">
            <div className="flex items-center gap-2 text-primary">
              <Info className="size-3" />
              <span className="font-bold text-[10px] italic">PRO TIP</span>
            </div>
            <p className="text-[9px] text-muted-foreground leading-relaxed">
              双击节点即可聚焦相关关系链，右键可进行深入路径分析。
            </p>
          </div>
        </div>
      </div>

      {/* Floating Controls (Zoom) */}
      <div className="absolute bottom-6 left-6 z-40 flex flex-col gap-1 rounded-full border border-muted-foreground/20 bg-background/80 p-1 shadow-2xl backdrop-blur-md">
        <Button variant="ghost" size="icon" className="size-9 rounded-full hover:bg-primary/10 hover:text-primary">
          <Plus className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" className="size-9 rounded-full hover:bg-primary/10 hover:text-primary">
          <Minus className="size-4" />
        </Button>
        <div className="mx-2 my-1 h-[1px] bg-muted-foreground/20" />
        <Button variant="ghost" size="icon" className="size-9 rounded-full hover:bg-primary/10 hover:text-primary">
          <Maximize2 className="size-4" />
        </Button>
      </div>
    </div>
  );
}
