"use client";

import { useEffect, useState } from "react";

import {
  AlertTriangle,
  CheckCircle2,
  Circle,
  CirclePlay,
  ExternalLink,
  Loader2,
  Pause,
  StopCircle,
  TrendingUp,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

export function AnalysisDashboard() {
  const [progress, setProgress] = useState(65);
  const [isPaused, setIsPaused] = useState(false);

  // Mock progress update
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 99 ? prev + 1 : 100));
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div className="fade-in zoom-in-95 mx-auto max-w-6xl animate-in space-y-8 pb-20 duration-500">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl tracking-tight">分析任务进行中 - XX科技招股书分析</h2>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="animate-pulse border-primary/20 bg-primary/10 text-primary">
              核心引擎运行中
            </Badge>
            <span className="text-muted-foreground text-xs">预计剩余时间：2分15秒</span>
          </div>
        </div>

        <div className="relative h-3 w-full overflow-hidden rounded-full border border-muted-foreground/10 bg-muted/30">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary/80 to-primary transition-all duration-1000 ease-in-out"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 animate-shimmer bg-[length:20px_20px] bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)]" />
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="font-bold text-[10px] text-foreground mix-blend-difference">{progress}%</span>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left: Execution Stages */}
        <div className="space-y-6 lg:col-span-2">
          <Card className="overflow-hidden border-muted-foreground/10 bg-card/60 backdrop-blur-sm">
            <CardHeader className="bg-muted/20 pb-4">
              <CardTitle className="font-medium text-base">任务执行阶段</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/10 hover:bg-muted/10">
                    <TableHead className="w-1/3">阶段</TableHead>
                    <TableHead className="w-1/4">状态</TableHead>
                    <TableHead>实时详情</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { stage: "文档解析", status: "completed", detail: "成功解析 428 页，提取文本 12 万字" },
                    { stage: "基本信息提取", status: "completed", detail: "识别公司实体 23 个" },
                    { stage: "技术分析", status: "processing", detail: "分析核心技术 5 项，预计 30s 完成" },
                    { stage: "供应链分析", status: "waiting", detail: "-" },
                    { stage: "风险评估", status: "waiting", detail: "-" },
                  ].map((row) => (
                    <TableRow key={row.stage} className="hover:bg-muted/10">
                      <TableCell className="flex items-center gap-2 font-medium">
                        <div
                          className={cn(
                            "size-2 rounded-full",
                            row.status === "completed"
                              ? "bg-green-500"
                              : row.status === "processing"
                                ? "animate-pulse bg-primary"
                                : "bg-muted-foreground/30",
                          )}
                        />
                        {row.stage}
                      </TableCell>
                      <TableCell>
                        {row.status === "completed" ? (
                          <Badge variant="outline" className="h-6 gap-1 border-none bg-green-500/10 text-green-500">
                            <CheckCircle2 className="size-3" /> 完成
                          </Badge>
                        ) : row.status === "processing" ? (
                          <Badge variant="outline" className="h-6 gap-1 border-none bg-primary/10 text-primary">
                            <Loader2 className="size-3 animate-spin" /> 进行中
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="h-6 gap-1 border-none bg-muted/30 text-muted-foreground">
                            <Circle className="size-3" /> 等待
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-muted-foreground text-xs italic">{row.detail}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Right: Real-time Insights */}
        <aside className="space-y-6">
          <div className="space-y-6 rounded-2xl border border-muted-foreground/10 bg-card/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 font-bold text-sm">
                <TrendingUp className="size-4 text-primary" />
                实时洞察
              </h3>
              <Badge variant="outline" className="border-none text-[10px] opacity-50">
                30秒前更新
              </Badge>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <p className="font-bold text-[10px] text-primary uppercase tracking-wider">🎯 已发现关键信息</p>
                <div className="space-y-2">
                  {[
                    "公司名称：XX科技股份有限公司",
                    "核心技术：智能算法平台等5项，专利23项",
                    "研发团队：博士15人，硕士占比60%",
                  ].map((text, i) => (
                    <div
                      key={text}
                      className="fade-in slide-in-from-left flex animate-in gap-2 text-xs leading-relaxed duration-300"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <span className="font-bold text-primary">•</span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="font-bold text-[10px] text-destructive uppercase tracking-wider">⚠️ 潜在风险点</p>
                <div className="space-y-2">
                  {["上游供应商集中度较高（CR3=68%）", "近三年毛利率从 58% 下降至 45%"].map((text) => (
                    <div
                      key={text}
                      className="flex gap-2 rounded-lg border border-destructive/10 bg-destructive/5 p-2 text-destructive/90 text-xs leading-relaxed"
                    >
                      <AlertTriangle className="mt-0.5 size-3 shrink-0" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="font-bold text-[10px] text-blue-500 uppercase tracking-wider">📊 行业对比</p>
                <div className="space-y-3 rounded-lg border border-blue-500/10 bg-blue-500/5 p-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px]">
                      <span>研发投入占比</span>
                      <span className="font-bold text-blue-500">15% vs 10% (行业)</span>
                    </div>
                    <div className="h-1 rounded-full bg-muted">
                      <div className="h-full rounded-full bg-blue-500" style={{ width: "75%" }} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px]">
                      <span>专利数量</span>
                      <span className="font-bold text-blue-500">23 vs 18 (行业)</span>
                    </div>
                    <div className="h-1 rounded-full bg-muted">
                      <div className="h-full rounded-full bg-blue-500" style={{ width: "85%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Floating Control Buttons */}
      <div className="slide-in-from-bottom-10 fixed bottom-10 left-1/2 flex -translate-x-1/2 animate-in items-center gap-2 rounded-full border border-muted-foreground/20 bg-background/80 p-2 shadow-2xl backdrop-blur-xl duration-700">
        <Button
          variant="ghost"
          size="sm"
          className="h-10 gap-2 rounded-full px-6 font-medium"
          onClick={() => setIsPaused(!isPaused)}
        >
          {isPaused ? <CirclePlay className="size-4 text-green-500" /> : <Pause className="size-4 text-primary" />}
          {isPaused ? "继续分析" : "暂停"}
        </Button>
        <div className="h-6 w-[1px] bg-muted-foreground/20" />
        <Button
          variant="ghost"
          size="sm"
          className="h-10 gap-2 rounded-full px-6 font-medium text-destructive hover:bg-destructive/10"
        >
          <StopCircle className="size-4" />
          取消
        </Button>
        <div className="h-6 w-[1px] bg-muted-foreground/20" />
        <Button
          variant="ghost"
          size="sm"
          className="h-10 gap-2 rounded-full px-6 font-medium text-yellow-500 hover:bg-yellow-500/10"
        >
          <Zap className="size-4" />
          加速
        </Button>
        <Button className="ml-2 h-10 w-10 rounded-full p-0" variant="outline">
          <ExternalLink className="size-4" />
        </Button>
      </div>
    </div>
  );
}
