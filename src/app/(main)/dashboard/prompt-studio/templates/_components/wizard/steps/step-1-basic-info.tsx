"use client";

import { useState } from "react";

import { Plus, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function Step1BasicInfo() {
  const [tags, setTags] = useState(["IPO", "招股书", "金融分析", "合规"]);
  const [name, setName] = useState("");

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="space-y-2">
        <h2 className="font-bold text-xl">步骤 1/7：基本信息</h2>
        <p className="text-muted-foreground text-sm">定义模板的名称、分类和基本描述。</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="name">模板名称</Label>
            <span className="text-[10px] text-muted-foreground">{name.length}/50</span>
          </div>
          <Input
            id="name"
            placeholder="例如：上市公司招股说明书智能分析"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-background/50"
          />
          {name.length > 0 && (
            <p className="flex items-center gap-1 text-[10px] text-green-500">
              <span className="size-1 rounded-full bg-green-500" /> 名称可用
            </p>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="desc">描述</Label>
            <span className="text-[10px] text-muted-foreground">0/200</span>
          </div>
          <Textarea
            id="desc"
            placeholder="基于证监会 IPO 目录规范，自动分析招股说明书的..."
            className="min-h-[100px] resize-none bg-background/50"
          />
          <p className="text-[10px] text-muted-foreground">提示：请简要描述模板核心功能和业务价值</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>专业领域</Label>
            <Select defaultValue="finance">
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="选择领域" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="finance">金融</SelectItem>
                <SelectItem value="legal">法律</SelectItem>
                <SelectItem value="tech">科技</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>场景分类</Label>
            <Select defaultValue="ipo">
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="选择场景" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ipo">首次公开发行(IPO)</SelectItem>
                <SelectItem value="report">季度/年度报告</SelectItem>
                <SelectItem value="audit">内部审计</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-3">
          <Label>难易程度</Label>
          <RadioGroup defaultValue="advanced" className="flex gap-6">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="basic" id="basic" />
              <Label htmlFor="basic" className="font-normal">
                初级
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="intermediate" id="intermediate" />
              <Label htmlFor="intermediate" className="font-normal">
                中级
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="advanced" id="advanced" />
              <Label htmlFor="advanced" className="font-normal">
                高级
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label>标签</Label>
          <div className="flex min-h-[44px] flex-wrap gap-2 rounded-lg border border-muted-foreground/20 border-dashed bg-muted/20 p-3">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="h-6 gap-1 pr-1 pl-2">
                {tag}
                <X
                  className="size-3 cursor-pointer transition-colors hover:text-destructive"
                  onClick={() => setTags(tags.filter((t) => t !== tag))}
                />
              </Badge>
            ))}
            <button type="button" className="ml-1 flex items-center gap-1 text-[10px] text-primary hover:underline">
              <Plus className="size-3" /> 添加标签
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
