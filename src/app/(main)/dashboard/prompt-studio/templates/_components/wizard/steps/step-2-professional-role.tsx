"use client";

import { RefreshCcw, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function Step2ProfessionalRole() {
  const experiences = [
    { id: "exp1", label: "3年以上 IPO 项目经验", checked: true },
    { id: "exp2", label: "熟悉证监会审核要求", checked: true },
    { id: "exp3", label: "具备财务分析能力", checked: true },
    { id: "exp4", label: "了解行业研究方法", checked: true },
    { id: "exp5", label: "有上市公司审计经验", checked: false },
    { id: "exp6", label: "熟悉国际会计准则", checked: false },
  ];

  const knowledgePoints = [
    "证监会《公开发行证券的公司信息披露内容与格式准则》",
    "财务比率分析方法与指标解读",
    "波特五力模型在行业分析中的应用",
    "企业风险评估的常用框架",
  ];

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="space-y-2">
        <h2 className="font-bold text-xl">步骤 2/7：专业角色与经验要求</h2>
        <p className="text-muted-foreground text-sm">设定分析该业务时 AI 应当模拟的角色和所需的知识背书。</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <Label>所需专业角色</Label>
          <Select defaultValue="senior-analyst">
            <SelectTrigger className="h-10 bg-background/50">
              <SelectValue placeholder="选择角色" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="senior-analyst">资深金融分析师</SelectItem>
              <SelectItem value="investment-banker">投行分析师</SelectItem>
              <SelectItem value="auditor">审计师</SelectItem>
              <SelectItem value="risk-manager">风控专员</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-[10px] text-muted-foreground">提示：角色越具体，AI 的分析切入点越专业</p>
        </div>

        <div className="space-y-3">
          <Label>经验级别要求</Label>
          <div className="grid grid-cols-1 gap-3 rounded-xl border border-muted-foreground/10 bg-muted/10 p-4">
            {experiences.map((exp) => (
              <div key={exp.id} className="flex items-center space-x-3">
                <Checkbox
                  id={exp.id}
                  defaultChecked={exp.checked}
                  className="border-muted-foreground/30 data-[state=checked]:bg-primary"
                />
                <label
                  htmlFor={exp.id}
                  className="cursor-pointer font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {exp.label}
                  {!exp.checked && <span className="ml-2 font-normal text-[10px] text-muted-foreground">（可选）</span>}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="flex items-center gap-2">
              知识要点 <Sparkles className="size-3.5 animate-pulse text-primary" />
              <span className="ml-1 font-normal text-[10px] text-muted-foreground">AI 智能推荐</span>
            </Label>
            <Button variant="ghost" size="sm" className="h-7 gap-1 px-2 text-[10px] opacity-50 hover:opacity-100">
              <RefreshCcw className="size-3" /> 刷新推荐
            </Button>
          </div>
          <div className="space-y-2 rounded-xl border border-primary/20 bg-primary/5 p-4">
            {knowledgePoints.map((point) => (
              <div key={point} className="flex gap-3 text-sm">
                <span className="font-bold text-primary">•</span>
                <span className="text-foreground/80 leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
