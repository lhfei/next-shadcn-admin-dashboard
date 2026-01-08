"use client";

import { CheckCircle2, Download, FileText, Info, RefreshCw, Share2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SummaryView() {
  return (
    <div className="fade-in slide-in-from-bottom-4 animate-in space-y-6 duration-500">
      <div className="grid gap-6 md:grid-cols-3">
        {/* Executive Summary */}
        <Card className="border-muted-foreground/10 bg-card/60 backdrop-blur-sm md:col-span-1">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Info className="size-4 text-primary" />
              执行摘要
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">分析完成时间</span>
                <span className="font-medium">2024-03-15 14:30:25</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">使用模板</span>
                <span className="font-medium text-primary">上市公司招股说明书智能分析</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">分析耗时</span>
                <span className="font-medium">3分45秒</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">数据完整性</span>
                <Badge variant="outline" className="h-5 border-none bg-green-500/10 text-green-500">
                  ✅ 完整
                </Badge>
              </div>
            </div>
            <div className="border-muted-foreground/10 border-t pt-4">
              <p className="text-muted-foreground text-xs leading-relaxed">
                本次分析涵盖了招股说明书的全文本内容，识别出核心实体23个，关联关系58条。数据来源已完成交叉验证，置信度评级为
                A。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Core Findings */}
        <Card className="border-muted-foreground/10 bg-card/60 backdrop-blur-sm md:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <CheckCircle2 className="size-4 text-primary" />
              核心发现
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                id: 1,
                title: "技术优势明显",
                content: "拥有23项核心专利，其中发明专利15项。智能算法平台已完成商业化应用，具备较高的行业技术壁垒。",
              },
              {
                id: 2,
                title: "财务表现稳健",
                content:
                  "近三年营收复合增长率达 25%，毛利率维持在 45% 以上。经营活动现金流表现良好，核心指标优于行业平均水平。",
              },
              {
                id: 3,
                title: "供应链风险",
                content: "上游供应商集中度较高（CR3=68%），存在单一来源依赖风险。建议针对关键原材料建立备选供应渠道。",
              },
            ].map((finding) => (
              <div key={finding.id} className="space-y-1 rounded-lg border border-muted-foreground/10 bg-muted/30 p-3">
                <h4 className="flex items-center gap-2 font-bold text-sm">
                  <span className="flex size-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                    {finding.id}
                  </span>
                  {finding.title}
                </h4>
                <p className="pl-6 text-muted-foreground text-xs leading-relaxed">{finding.content}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recommendations */}
      <Card className="border-muted-foreground/10 bg-card/60 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <FileText className="size-4 text-primary" />
            建议措施
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "建议分散供应商，降低集中度风险，特别是针对核心芯片的备货周期管理。",
              "加强研发投入，维持在智能识别算法领域的领先地位，扩大专利受权范围。",
              "关注毛利率下滑趋势，通过数字化供应链优化成本结构，提升产品议价能力。",
            ].map((rec) => (
              <div
                key={rec}
                className="flex gap-3 rounded-xl border border-primary/10 bg-primary/5 p-4 text-xs leading-relaxed"
              >
                <span className="font-bold text-primary">⚡</span>
                <span className="text-foreground/80">{rec}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-4 pt-4">
        <Button
          variant="outline"
          className="h-11 gap-2 rounded-full border-muted-foreground/20 px-6 transition-all hover:bg-primary/5 hover:text-primary"
        >
          <Download className="size-4" />
          下载完整报告
        </Button>
        <Button
          variant="outline"
          className="h-11 gap-2 rounded-full border-muted-foreground/20 px-6 transition-all hover:bg-primary/5 hover:text-primary"
        >
          <RefreshCw className="size-4" />
          重新分析
        </Button>
        <Button
          variant="outline"
          className="h-11 gap-2 rounded-full border-muted-foreground/20 px-6 transition-all hover:bg-primary/5 hover:text-primary"
        >
          <Share2 className="size-4" />
          分享结果
        </Button>
      </div>
    </div>
  );
}
