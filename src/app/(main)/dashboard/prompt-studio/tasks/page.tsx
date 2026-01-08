"use client";

import { useState } from "react";

import { Clock, LayoutDashboard, Pause, Play, Plus, RefreshCw } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { AnalysisDashboard } from "./_components/analysis-dashboard";
import { TaskCreationForm } from "./_components/task-creation-form";

export default function TaskCenterPage() {
  const [executionState, setExecutionState] = useState<"idle" | "creating" | "running">("idle");

  if (executionState === "creating") {
    return (
      <div className="p-4 md:p-8">
        <TaskCreationForm onStart={() => setExecutionState("running")} onCancel={() => setExecutionState("idle")} />
      </div>
    );
  }

  if (executionState === "running") {
    return (
      <div className="p-4 md:p-8">
        <div className="mb-6 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => setExecutionState("idle")} className="gap-2">
            <LayoutDashboard className="size-4" />
            返回工作台
          </Button>
        </div>
        <AnalysisDashboard />
      </div>
    );
  }

  return (
    <div className="fade-in flex animate-in flex-col gap-4 p-4 duration-500 md:gap-8 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-2xl tracking-tight">任务中心</h1>
          <p className="text-muted-foreground">管理和监控您的 Prompt 分析任务。</p>
        </div>
        <Button onClick={() => setExecutionState("creating")} className="shadow-lg shadow-primary/20">
          <Plus className="mr-2 size-4" />
          新建分析任务
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-muted-foreground/10 bg-card/60 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="font-medium text-muted-foreground text-sm">运行中</CardTitle>
            <div className="font-bold text-2xl">3</div>
          </CardHeader>
        </Card>
        <Card className="border-muted-foreground/10 bg-card/60 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="font-medium text-muted-foreground text-sm">今日完成</CardTitle>
            <div className="font-bold text-2xl">12</div>
          </CardHeader>
        </Card>
        <Card className="border-muted-foreground/10 bg-card/60 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="font-medium text-muted-foreground text-sm">待审核</CardTitle>
            <div className="font-bold text-2xl">5</div>
          </CardHeader>
        </Card>
      </div>

      <Card className="border-muted-foreground/10 bg-card/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>活跃任务</CardTitle>
          <CardDescription>当前操作的实时状态。</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { id: 1, name: "XX 科技 IPO 分析", progress: 65, status: "processing", time: "2m 15s" },
              { id: 2, name: "季度报告提取", progress: 10, status: "queued", time: "0m 00s" },
              { id: 3, name: "合同风险扫描", progress: 90, status: "processing", time: "5m 30s" },
            ].map((task) => {
              return (
                // biome-ignore lint/a11y/useSemanticElements: Parent div needs role="button" but contains nested interactive elements (fieldset/buttons)
                <div
                  key={task.id}
                  className="flex cursor-pointer items-center justify-between rounded-lg border border-muted-foreground/10 p-4 transition-colors hover:bg-muted/30"
                  onClick={() => setExecutionState("running")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setExecutionState("running");
                    }
                  }}
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="space-y-1 text-left">
                      <div className="font-medium">{task.name}</div>
                      <div className="flex items-center gap-2 text-muted-foreground text-xs">
                        <Clock className="size-3" />
                        <span>剩余 {task.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-2 w-32 overflow-hidden rounded-full bg-secondary">
                        <div className="h-full bg-primary transition-all" style={{ width: `${task.progress}%` }} />
                      </div>
                      <Badge variant={task.status === "processing" ? "default" : "secondary"}>
                        {task.status === "processing" ? "处理中" : "排队中"}
                      </Badge>
                      {/* biome-ignore lint/a11y/useSemanticElements: Using div for action group to avoid nesting fieldset in interactive zone */}
                      <div
                        className="flex gap-1"
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => e.stopPropagation()}
                        role="group"
                        aria-label="Task Actions"
                      >
                        <Button size="icon" variant="ghost" className="size-8">
                          {task.status === "processing" ? <Pause className="size-4" /> : <Play className="size-4" />}
                        </Button>
                        <Button size="icon" variant="ghost" className="size-8">
                          <RefreshCw className="size-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
