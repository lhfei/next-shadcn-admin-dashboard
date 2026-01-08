"use client";

import { CheckCircle2, FileText, Play, RotateCw, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

export function Step7TestPublish() {
  const tests = [
    {
      id: 1,
      name: "某科技公司招股说明书样本.pdf",
      status: "passed",
      time: "45s",
      checks: ["结构完整性：所有字段完整", "数据准确性：关键信息匹配", "存储检查：三库写入成功"],
    },
  ];

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="space-y-2">
        <h2 className="font-bold text-xl">步骤 7/7：测试验证与发布</h2>
        <p className="text-muted-foreground text-sm">在发布前进行端到端全流程模拟测试，验证数据准确性和存储状态。</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label>测试用例</Label>
            <Button variant="ghost" size="sm" className="h-7 gap-1 px-2 text-[10px]">
              <Play className="size-3" /> 运行所有测试
            </Button>
          </div>
          <div className="space-y-3">
            {tests.map((test) => (
              <div key={test.id} className="space-y-4 rounded-xl border border-green-500/20 bg-green-500/5 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="size-4 text-primary" />
                    <span className="font-medium text-sm">{test.name}</span>
                  </div>
                  <Badge variant="outline" className="h-5 gap-1 border-none bg-green-500 px-1.5 text-white">
                    <CheckCircle2 className="size-3" /> 测试通过
                  </Badge>
                </div>

                <div className="grid grid-cols-1 gap-2 border-muted-foreground/10 border-t pt-3">
                  {test.checks.map((check) => (
                    <div key={check} className="flex items-center gap-2 text-muted-foreground text-xs">
                      <CheckCircle2 className="size-3 text-green-500" />
                      <span>{check}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <Button size="sm" variant="outline" className="h-7 border-muted-foreground/20 text-[10px]">
                    查看详细结果
                  </Button>
                  <Button size="sm" variant="ghost" className="h-7 gap-1 text-[10px] opacity-70 hover:opacity-100">
                    <RotateCw className="size-3" /> 重新测试
                  </Button>
                  <span className="ml-auto text-[10px] text-muted-foreground">用时: {test.time}</span>
                </div>
              </div>
            ))}

            <Button variant="outline" className="h-10 w-full gap-2 border-muted-foreground/30 border-dashed text-xs">
              <Play className="size-3" /> 添加并开始新测试
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <Label className="flex items-center gap-2">
            AI 优化建议 <Sparkles className="size-3.5 text-primary" />
          </Label>
          <div className="space-y-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
            {[
              "建议增加“行业地位分析”字段，可从市场份额和竞争优势两个角度挖掘信息。",
              "供应链分析模块可增加“供应商集中度风险”指标，补充相关的风险提示逻辑。",
              "考虑添加“ESG 表现”作为可选分析模块，提升报告在绿色金融方面的深度。",
            ].map((suggest) => (
              <div key={suggest} className="flex gap-3 text-xs leading-relaxed">
                <span className="font-bold text-primary">⚡</span>
                <span className="text-foreground/80">{suggest}</span>
              </div>
            ))}
            <div className="flex gap-2 pt-2">
              <Button size="sm" className="h-7 border-none bg-primary/20 text-[10px] text-primary hover:bg-primary/30">
                采纳建议
              </Button>
              <Button size="sm" variant="ghost" className="h-7 text-[10px] text-muted-foreground">
                忽略
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4 border-muted-foreground/10 border-t pt-4">
          <div className="space-y-3">
            <Label>可见范围</Label>
            <RadioGroup defaultValue="team" className="flex gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="personal" id="personal" />
                <Label htmlFor="personal" className="font-normal text-xs">
                  仅自己
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="team" id="team" />
                <Label htmlFor="team" className="font-normal text-xs">
                  团队
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="public" id="public" />
                <Label htmlFor="public" className="font-normal text-xs">
                  公开
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>版本说明</Label>
            <Textarea
              placeholder="初始版本，支持招股书核心数据分析并存入三库..."
              className="min-h-[60px] bg-background/50 text-xs"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
