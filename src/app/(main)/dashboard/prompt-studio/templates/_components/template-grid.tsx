"use client";

import { ExternalLink, Heart, Info, Star, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const templates = [
  {
    id: 1,
    title: "上市公司IPO分析模板",
    area: "金融分析",
    scene: "IPO分析",
    rating: 4.8,
    usageCount: 1234,
    description: "适用：招股说明书分析。自动提取并深度分析公司基本面、财务风险及合规性。",
    role: "资深金融分析师",
    updatedAt: "2024-03-15",
  },
  {
    id: 2,
    title: "财报智能分析模板",
    area: "金融分析",
    scene: "财报分析",
    rating: 4.5,
    usageCount: 892,
    description: "通过解析季度/年度报告，自动计算财务比率并生成异常预警提示。",
    role: "财务主管",
    updatedAt: "2024-03-14",
  },
  {
    id: 3,
    title: "合同风险审查",
    area: "法律科技",
    scene: "合规审查",
    rating: 4.7,
    usageCount: 756,
    description: "基于标准法律框架，识别业务合同中的潜在法律漏洞和违约条款风险。",
    role: "法律顾问",
    updatedAt: "2024-03-13",
  },
  {
    id: 4,
    title: "行业竞争格局分析",
    area: "市场研究",
    scene: "竞品分析",
    rating: 4.9,
    usageCount: 2150,
    description: "使用波特五力模型，深度剖析行业竞争态势和主要竞争对手的优劣势。",
    role: "市场策略专家",
    updatedAt: "2024-03-12",
  },
];

export function TemplateGrid() {
  return (
    <div className="mt-2 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {templates.map((template) => (
        <Card
          key={template.id}
          className="group relative flex flex-col overflow-hidden border-muted-foreground/10 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
        >
          {/* AI Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

          <CardHeader className="p-5 pb-2">
            <div className="mb-2 flex items-center justify-between">
              <Badge variant="outline" className="border-primary/20 bg-primary/5 font-medium text-[10px] text-primary">
                {template.area} &gt; {template.scene}
              </Badge>
              <Button variant="ghost" size="icon" className="size-7 rounded-full opacity-60 hover:opacity-100">
                <Heart className="size-3.5" />
              </Button>
            </div>
            <h3 className="line-clamp-1 font-bold text-base transition-colors group-hover:text-primary">
              {template.title}
            </h3>
          </CardHeader>

          <CardContent className="flex-1 p-5 pt-2">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex items-center gap-0.5 text-yellow-500">
                <Star className="size-3.5 fill-current" />
                <span className="ml-1 font-bold text-xs">{template.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground text-xs">
                <Users className="size-3.5" />
                <span>使用次数: {template.usageCount.toLocaleString()}</span>
              </div>
            </div>

            <div className="mb-4 space-y-2">
              <p className="line-clamp-2 min-h-[2.5rem] text-muted-foreground text-xs">{template.description}</p>
              <div className="flex items-center gap-1.5 font-medium text-[11px] text-foreground/70">
                <span className="text-muted-foreground">角色:</span>
                <span className="rounded bg-muted px-1.5 py-0.5">{template.role}</span>
              </div>
            </div>
          </CardContent>

          <CardFooter className="mt-auto flex gap-2 p-5 pt-0">
            <Button className="h-9 flex-1 bg-primary/90 shadow-sm hover:bg-primary hover:shadow-primary/20">
              <ExternalLink className="mr-2 size-3.5" />
              使用
            </Button>
            <Button variant="outline" size="icon" className="h-9 w-9 border-muted-foreground/20 hover:bg-muted/50">
              <Info className="size-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
