"use client";

import { useState } from "react";

import { ArrowUpRight, BarChart3, Bot, Mic, Send, Sparkles, Target, Users, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function ChatView() {
  const [messages, _setMessages] = useState([
    {
      role: "user",
      content: "这家公司的核心技术竞争力如何？",
      time: "14:35",
    },
    {
      role: "assistant",
      content: "根据分析结果，XX科技的核心技术竞争力如下：",
      time: "14:35",
      isStructured: true,
    },
  ]);

  return (
    <div className="fade-in slide-in-from-right-4 flex h-[700px] animate-in flex-col overflow-hidden rounded-2xl border border-muted-foreground/10 bg-card/10 backdrop-blur-xl duration-500">
      {/* Header */}
      <div className="flex items-center justify-between border-muted-foreground/10 border-b bg-muted/5 p-4">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-full border border-primary/20 bg-primary/20 text-primary">
            <Bot className="size-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm">智能问答助手</h3>
            <p className="text-[10px] text-muted-foreground">基于 IPO 分析报告提供实时深度解读</p>
          </div>
        </div>
        <Badge variant="outline" className="border-primary/20 bg-primary/5 text-[10px] text-primary">
          GPT-4 Turbo
        </Badge>
      </div>

      {/* Chat Area */}
      <div className="scrollbar-thin scrollbar-thumb-muted-foreground/20 flex-1 space-y-8 overflow-y-auto p-6">
        {messages.map((msg) => (
          <div
            key={msg.content}
            className={cn("flex max-w-[85%] gap-4", msg.role === "user" ? "ml-auto flex-row-reverse" : "")}
          >
            <div
              className={cn(
                "flex size-8 shrink-0 items-center justify-center rounded-full border",
                msg.role === "user"
                  ? "border-muted-foreground/10 bg-muted"
                  : "border-primary/20 bg-primary text-primary-foreground",
              )}
            >
              {msg.role === "user" ? <div className="font-bold text-[10px]">YOU</div> : <Sparkles className="size-4" />}
            </div>

            <div className="space-y-6">
              <div
                className={cn(
                  "rounded-2xl p-4 text-sm leading-relaxed",
                  msg.role === "user"
                    ? "rounded-tr-none bg-primary text-primary-foreground"
                    : "rounded-tl-none border border-muted-foreground/10 bg-card shadow-sm",
                )}
              >
                {msg.content}
              </div>

              {msg.isStructured && (
                <div className="fade-in slide-in-from-top-2 mt-4 grid animate-in gap-4 duration-700">
                  {/* 1. Patent Advantage */}
                  <div className="space-y-3 rounded-2xl border border-muted-foreground/10 bg-muted/20 p-4">
                    <div className="flex items-center gap-2 text-primary">
                      <BarChart3 className="size-4" />
                      <h4 className="font-bold">1. 专利优势</h4>
                    </div>
                    <ul className="space-y-2 pl-1 text-muted-foreground text-xs">
                      <li className="flex gap-2">
                        <span className="font-bold text-primary">•</span> 总数23项，其中发明专利15项
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold text-primary">•</span> 近三年新增专利12项，增长迅速
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold text-primary">•</span> 与竞争对手相比：A公司18项，B公司21项
                      </li>
                    </ul>
                  </div>

                  {/* 2. Tech Layout */}
                  <div className="space-y-3 rounded-2xl border border-muted-foreground/10 bg-muted/20 p-4">
                    <div className="flex items-center gap-2 text-primary">
                      <Target className="size-4" />
                      <h4 className="font-bold">2. 技术布局</h4>
                    </div>
                    <ul className="space-y-2 pl-1 text-muted-foreground text-xs">
                      <li className="flex gap-2">
                        <span className="font-bold text-primary">•</span>{" "}
                        核心技术：智能算法平台、大数据分析引擎、隐私计算框架
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold text-primary">•</span> 覆盖领域：金融、医疗、工业三大赛道
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold text-primary">•</span> 技术成熟度：核心算法已商业化应用3年
                      </li>
                    </ul>
                  </div>

                  {/* 3. Team */}
                  <div className="space-y-3 rounded-2xl border border-muted-foreground/10 bg-muted/20 p-4">
                    <div className="flex items-center gap-2 text-primary">
                      <Users className="size-4" />
                      <h4 className="font-bold">3. 研发团队</h4>
                    </div>
                    <ul className="space-y-2 pl-1 text-muted-foreground text-xs">
                      <li className="flex gap-2">
                        <span className="font-bold text-primary">•</span> 博士15人，硕士占比60%
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold text-primary">•</span> 平均行业经验：8.5年
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold text-primary">•</span> 核心团队成员来自知名院校和企业
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/10 p-3">
                    <Zap className="size-4 text-primary" />
                    <span className="font-bold text-primary text-xs">综合评估：技术竞争力评级为 A 级（行业领先）</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Suggested Questions */}
        <div className="flex flex-col gap-2 pt-4">
          <p className="flex items-center gap-2 pl-12 font-bold text-[10px] text-muted-foreground uppercase tracking-widest">
            <Sparkles className="size-3 animate-pulse text-primary" />
            追问建议
          </p>
          <div className="flex flex-wrap gap-2 pl-12">
            {["与主要竞争对手的技术对比详情？", "核心技术的商业化进展和收入贡献？", "技术团队的稳定性和激励机制？"].map(
              (q) => (
                <Button
                  key={q}
                  variant="outline"
                  size="sm"
                  className="group h-8 rounded-full border-muted-foreground/20 bg-background/50 text-[10px] transition-all hover:bg-primary/5 hover:text-primary"
                >
                  {q}
                  <ArrowUpRight className="ml-1 size-3 opacity-50 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </Button>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="border-muted-foreground/10 border-t bg-muted/10 p-4">
        <div className="group relative mx-auto max-w-4xl">
          <Input
            placeholder="输入您的问题，如：“分析近三年的财务风险”"
            className="h-14 rounded-2xl border-muted-foreground/20 bg-background pr-32 pl-6 shadow-lg transition-all group-focus-within:border-primary/50 group-focus-within:ring-4 group-focus-within:ring-primary/5"
          />
          <div className="absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="size-10 rounded-xl text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary"
            >
              <Mic className="size-5" />
            </Button>
            <Button className="h-10 rounded-xl bg-primary px-4 shadow-md shadow-primary/20 hover:bg-primary/90">
              <Send className="mr-2 size-4" />
              发送
            </Button>
          </div>
        </div>
        <p className="mt-3 text-center text-[10px] text-muted-foreground">
          由 Meta-Knowledge AI 引擎驱动 • 分析基于当前文档语义图谱
        </p>
      </div>
    </div>
  );
}
