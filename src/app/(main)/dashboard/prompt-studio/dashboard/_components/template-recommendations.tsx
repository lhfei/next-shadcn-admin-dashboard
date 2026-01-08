"use client";

import { FileText, ScrollText, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const recommendations = [
  {
    id: 1,
    title: "IPO 分析",
    description: "自动提取和分析招股书关键信息",
    icon: FileText,
  },
  {
    id: 2,
    title: "财务报告",
    description: "深入分析季度和年度财务报表",
    icon: ScrollText,
  },
  {
    id: 3,
    title: "合同审查",
    description: "法律合同的风险评估和合规性检查",
    icon: ShieldCheck,
  },
];

export function TemplateRecommendations() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>推荐模板</CardTitle>
        <CardDescription>基于您最近的使用记录</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {recommendations.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-4 text-center transition-colors hover:bg-accent/50"
            >
              <div className="rounded-full bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                <item.icon className="size-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">{item.title}</h3>
              <p className="text-muted-foreground text-xs">{item.description}</p>
              <Button size="sm" variant="ghost" className="mt-2 w-full">
                使用模板
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
