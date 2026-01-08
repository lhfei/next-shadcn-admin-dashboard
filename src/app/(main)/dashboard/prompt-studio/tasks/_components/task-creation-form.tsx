"use client";

import { useState } from "react";

import { AlertCircle, FileText, Play, Sparkles, Upload, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface TaskCreationFormProps {
  onStart: () => void;
  onCancel: () => void;
}

export function TaskCreationForm({ onStart, onCancel }: TaskCreationFormProps) {
  const [dragActive, setDragActive] = useState(false);
  const [files, _setFiles] = useState([
    { name: "XX科技_招股说明书.pdf", size: "45.2MB", status: "success" },
    { name: "补充材料.docx", size: "12.1MB", status: "success" },
  ]);

  return (
    <div className="fade-in slide-in-from-bottom-4 mx-auto max-w-4xl animate-in space-y-6 duration-500">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="font-bold text-2xl tracking-tight">新建分析任务</h2>
          <p className="text-muted-foreground text-sm">选择分析模板并上传文件以开始 AI 智能作业。</p>
        </div>
        <Button variant="ghost" size="icon" onClick={onCancel} className="rounded-full">
          <X className="size-5" />
        </Button>
      </div>

      <div className="grid gap-6">
        {/* Template Selection */}
        <Card className="border-muted-foreground/10 bg-card/60 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Sparkles className="size-4 text-primary" />
              选择分析模板
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select defaultValue="ipo">
              <SelectTrigger className="h-12 w-full border-muted-foreground/20 bg-background/50">
                <SelectValue placeholder="选择模板" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>最近使用</SelectLabel>
                  <SelectItem value="ipo">上市公司招股说明书智能分析</SelectItem>
                  <SelectItem value="finance">企业财报综合评分</SelectItem>
                  <SelectItem value="risk">业务合规性风控评估</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>金融领域</SelectLabel>
                  <SelectItem value="bond">债券发行申报书核查</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="flex flex-wrap gap-2 text-muted-foreground text-xs">
              <span>推荐：</span>
              {["IPO分析", "财报分析", "风控评估"].map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="cursor-pointer border-none bg-muted hover:bg-primary/10 hover:text-primary"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* File Upload */}
        <Card className="border-muted-foreground/10 bg-card/60 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Upload className="size-4 text-primary" />
              上传分析材料
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button
              type="button"
              className={cn(
                "group relative flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 text-center transition-all",
                dragActive
                  ? "border-primary bg-primary/5 shadow-inner"
                  : "border-muted-foreground/10 hover:border-primary/50 hover:bg-primary/5",
              )}
              onDragOver={(e) => {
                e.preventDefault();
                setDragActive(true);
              }}
              onDragLeave={() => setDragActive(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  // Trigger upload
                }
              }}
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Upload className="size-6" />
              </div>
              <div className="space-y-1">
                <p className="font-medium text-sm">拖拽文件到此处，或点击上传</p>
                <p className="text-muted-foreground text-xs">支持格式：PDF、DOCX、TXT、图片 (最大 100MB)</p>
              </div>
            </button>

            {files.length > 0 && (
              <div className="space-y-2">
                <Label className="font-medium text-muted-foreground text-xs uppercase">已上传文件</Label>
                <div className="space-y-2">
                  {files.map((file) => (
                    <div
                      key={file.name}
                      className="group flex items-center gap-3 rounded-lg border border-muted-foreground/10 bg-muted/30 p-3"
                    >
                      <FileText className="size-5 text-primary/70" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-medium text-xs">{file.name}</p>
                        <p className="text-[10px] text-muted-foreground">{file.size}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="h-5 border-none bg-green-500/10 px-1.5 text-green-500">
                          ✅
                        </Badge>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-7 opacity-0 transition-opacity group-hover:opacity-100"
                        >
                          <X className="size-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Options & Model */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-muted-foreground/10 bg-card/60 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">分析选项</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { id: "opt1", label: "启用深度分析模式", sub: "更详细，耗时更长", checked: true },
                { id: "opt2", label: "自动关联历史相似案例", sub: "基于向量检索", checked: true },
                { id: "opt3", label: "生成交互式知识图谱", sub: "提取关系网络", checked: true },
                { id: "opt4", label: "保存完整对话记录", sub: "以便后期追溯", checked: true },
              ].map((opt) => (
                <div key={opt.id} className="flex items-start space-x-3">
                  <Checkbox id={opt.id} defaultChecked={opt.checked} className="mt-1" />
                  <div className="grid gap-0.5 leading-none">
                    <label htmlFor={opt.id} className="cursor-pointer font-medium text-sm leading-none">
                      {opt.label}
                    </label>
                    <p className="text-[10px] text-muted-foreground">{opt.sub}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-muted-foreground/10 bg-card/60 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">运行环境</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label className="text-xs">模型选择</Label>
                <RadioGroup defaultValue="gpt4" className="grid grid-cols-2 gap-3">
                  {[
                    { id: "gpt4", label: "GPT-4 (旗舰)", icon: "🌐" },
                    { id: "cl3", label: "Claude-3 (均衡)", icon: "🌿" },
                    { id: "wx", label: "文心一言 (中)", icon: "🦢" },
                    { id: "custom", label: "自定义", icon: "⚙️" },
                  ].map((m) => (
                    <div
                      key={m.id}
                      className="flex items-center space-x-2 rounded-lg border border-muted-foreground/10 p-2 transition-colors hover:bg-muted/30"
                    >
                      <RadioGroupItem value={m.id} id={m.id} />
                      <Label htmlFor={m.id} className="flex cursor-pointer items-center gap-2 font-normal text-xs">
                        <span>{m.icon}</span> {m.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <Label>温度参数 (Creativity)</Label>
                  <span className="font-bold text-primary">0.7</span>
                </div>
                <Select defaultValue="0.7">
                  <SelectTrigger className="h-9 bg-background/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0.2">0.2 (保守/准确)</SelectItem>
                    <SelectItem value="0.5">0.5 (均衡)</SelectItem>
                    <SelectItem value="0.7">0.7 (推荐)</SelectItem>
                    <SelectItem value="1.0">1.0 (创新)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between rounded-2xl border border-primary/10 bg-primary/5 p-6">
          <div className="flex items-center gap-3 text-primary text-sm">
            <AlertCircle className="size-4" />
            <span>分析任务预计消耗 500 个 Token 左右</span>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={onCancel}>
              高级设置
            </Button>
            <Button onClick={onStart} className="bg-primary px-8 shadow-lg shadow-primary/20 hover:bg-primary/90">
              <Play className="mr-2 size-4 fill-current" />
              开始分析
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
