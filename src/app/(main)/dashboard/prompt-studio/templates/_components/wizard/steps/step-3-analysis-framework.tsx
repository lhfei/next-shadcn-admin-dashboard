"use client";

import { GripVertical, Plus, Settings2, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function Step3AnalysisFramework() {
  const processes = [
    {
      id: 1,
      name: "公司基本信息提取",
      method: "信息提取与验证",
      desc: "提取公司历史沿革、股权结构、组织架构",
    },
    {
      id: 2,
      name: "核心产品与技术分析",
      method: "技术竞争力分析",
      desc: "分析主营业务、核心技术、研发投入",
    },
  ];

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="space-y-2">
        <h2 className="font-bold text-xl">步骤 3/7：分析框架设计</h2>
        <p className="text-muted-foreground text-sm">规划 AI 分析的逻辑流程和拆解步骤。</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <Label>分析流程</Label>
          <div className="space-y-3">
            {processes.map((p, i) => (
              <div
                key={p.id}
                className="group flex items-center gap-3 rounded-xl border border-muted-foreground/10 bg-muted/10 p-4 transition-all hover:border-primary/30"
              >
                <div className="cursor-grab text-muted-foreground/50 transition-colors active:cursor-grabbing group-hover:text-primary">
                  <GripVertical className="size-5" />
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="flex size-5 items-center justify-center rounded-sm bg-primary/10 font-bold text-primary text-xs">
                      {i + 1}
                    </span>
                    <h4 className="font-bold text-sm">{p.name}</h4>
                    <Badge variant="outline" className="h-4 border-muted-foreground/30 py-0 font-normal text-[9px]">
                      {p.method}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-xs">{p.desc}</p>
                </div>

                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="size-8 rounded-full">
                    <Settings2 className="size-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-8 rounded-full text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>
            ))}

            <Button
              variant="outline"
              className="group h-auto w-full border-muted-foreground/30 border-dashed py-8 text-muted-foreground hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
            >
              <Plus className="mr-2 size-4 transition-transform group-hover:scale-125" />
              添加分析步骤
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>思考模式</Label>
            <Select defaultValue="cot">
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="选择模式" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cot">链式思考 (Chain-of-Thought)</SelectItem>
                <SelectItem value="react">ReAct 交互推理</SelectItem>
                <SelectItem value="std">标准指令</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>推理深度</Label>
            <Select defaultValue="deep">
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="选择深度" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="deep">深度分析 (详细推理步骤)</SelectItem>
                <SelectItem value="med">均衡分析</SelectItem>
                <SelectItem value="quick">快速提取</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
