"use client";

import { useState } from "react";

import {
  Braces,
  Brain,
  Code2,
  FileText,
  FileUp,
  Lightbulb,
  Loader2,
  Settings2,
  Sparkles,
  Terminal,
} from "lucide-react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export function DiscoveryStudio() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState("results");
  const [file, setFile] = useState<File | null>(null);

  const [schema, setSchema] = useState(`{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "年度报告数据提取",
  "type": "object",
  "properties": {
    "company_info": {
      "type": "object",
      "properties": {
        "name": { "type": "string", "description": "公司名称" },
        "ticker": { "type": "string", "description": "股票代码" }
      }
    },
    "financial_metrics": {
      "type": "object",
      "properties": {
        "revenue": { "type": "number", "description": "营业收入" },
        "net_profit": { "type": "number", "description": "净利润" }
      }
    }
  }
}`);

  const [prompt, setPrompt] = useState(`# 系统角色
你是一名专业的合规审计专家。

# 任务目标
请从提供的监管文档中提取结构化情报。

# 约束条件
1. 准确性：所有经纬度数据必须经过交叉验证。
2. 格式：严格遵守 JSON Schema 规范。
3. 溯源：必须提供原文页码。`);

  const handleAnalysis = () => {
    if (!file) {
      toast.error("请先上传文档");
      return;
    }
    setIsAnalyzing(true);
    // Simulate complex AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      toast.success("发现完成！已为您生成 Schema 与 Prompt。");
      setActiveTab("schema");
    }, 2500);
  };

  return (
    <div className="flex h-[calc(100vh-120px)] flex-col gap-4 overflow-hidden lg:flex-row">
      {/* Left Panel: Input Area */}
      <div className="flex w-full flex-col gap-4 lg:w-[400px]">
        <Card className="flex h-full flex-col border-none bg-background/50 shadow-premium backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Settings2 className="size-5 text-primary" />
              <CardTitle>Discovery Input</CardTitle>
            </div>
            <CardDescription>Upload regulatory documents to discover prompt structure.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 space-y-6">
            {/* File Upload Area */}
            <div
              className={`relative flex min-h-[120px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed transition-colors ${
                file
                  ? "border-primary bg-primary/5"
                  : "border-muted-foreground/20 hover:border-primary/50 hover:bg-muted/50"
              }`}
            >
              <input
                type="file"
                className="absolute inset-0 opacity-0"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
              <FileUp className={`mb-2 size-8 ${file ? "text-primary" : "text-muted-foreground"}`} />
              <span className="font-medium text-sm">{file ? file.name : "Drop regulatory PDF here"}</span>
              <span className="mt-1 text-muted-foreground text-xs">Supports PDF, MD or TXT formats</span>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="doc-type">Document Type</Label>
                <Select defaultValue="regulatory">
                  <SelectTrigger id="doc-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="regulatory">Regulatory</SelectItem>
                    <SelectItem value="policy">Policy</SelectItem>
                    <SelectItem value="standard">Standard</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="domain">Business Domain</Label>
                <Select defaultValue="capital_market">
                  <SelectTrigger id="domain">
                    <SelectValue placeholder="Select domain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="capital_market">Capital Market</SelectItem>
                    <SelectItem value="banking">Banking</SelectItem>
                    <SelectItem value="compliance">Compliance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hints">User Hints (Optional)</Label>
                <Textarea
                  id="hints"
                  placeholder="e.g.: Focus on penalty clauses and disclosure timelines..."
                  className="min-h-[100px] resize-none"
                />
              </div>
            </div>
          </CardContent>
          <Separator className="mt-auto" />
          <div className="p-4">
            <Button
              className="h-11 w-full gap-2 bg-primary shadow-glow transition-all hover:shadow-glow-lg"
              onClick={handleAnalysis}
              disabled={isAnalyzing}
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="size-4" />
                  Start Discovery
                </>
              )}
            </Button>
          </div>
        </Card>
      </div>

      {/* Right Panel: AI Output Preview */}
      <div className="flex-1 overflow-hidden">
        <Card className="flex h-full flex-col border-none bg-background/50 shadow-premium backdrop-blur-sm">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b px-4 py-2">
              <TabsList className="gap-1 bg-transparent">
                <TabsTrigger
                  value="results"
                  className="gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  <Brain className="size-3.5" />
                  Results
                </TabsTrigger>
                <TabsTrigger
                  value="guideline"
                  className="gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  <FileText className="size-3.5" />
                  Guideline
                </TabsTrigger>
                <TabsTrigger
                  value="schema"
                  className="gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  <Braces className="size-3.5" />
                  JSON Schema
                </TabsTrigger>
                <TabsTrigger
                  value="prompt"
                  className="gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  <Terminal className="size-3.5" />
                  Prompt Template
                </TabsTrigger>
              </TabsList>
              <Button size="sm" variant="outline" className="h-8 gap-2">
                <Sparkles className="size-3 text-primary" />
                Regenerate
              </Button>
            </div>

            <ScrollArea className="flex-1 p-6">
              <TabsContent value="results" className="mt-0 space-y-4">
                <div className="mb-4 flex items-center gap-2 font-medium text-primary">
                  <Sparkles className="size-4" />
                  AI Real-time Feedback
                </div>
                {isAnalyzing ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-muted-foreground text-xs">
                      <Loader2 className="size-3 animate-spin" />
                      Extracting document structure...
                    </div>
                    <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
                    <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
                  </div>
                ) : !file ? (
                  <div className="flex flex-col items-center justify-center pt-20 text-muted-foreground opacity-50">
                    <FileText className="mb-4 size-12" />
                    <p>No document analyzed</p>
                  </div>
                ) : (
                  <div className="fade-in slide-in-from-bottom-2 animate-in space-y-4 duration-500">
                    <div className="space-y-4 rounded-lg border bg-muted/30 p-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-sm">Structure Recognition</h4>
                        <Badge
                          variant="outline"
                          className="border-green-500/20 bg-green-500/5 text-[10px] text-green-600"
                        >
                          98% Confidence
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        The document is identified as a **Financial Regulatory Specification**. System detected 12 key
                        sections.
                      </p>
                      <div className="flex flex-wrap gap-2 text-[10px]">
                        <Badge variant="outline" className="bg-background">
                          Chapter 1: General
                        </Badge>
                        <Badge variant="outline" className="bg-background">
                          Chapter 2: Disclosure
                        </Badge>
                        <Badge variant="outline" className="bg-background">
                          Chapter 3: Management
                        </Badge>
                      </div>
                    </div>

                    <div className="flex gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
                      <Lightbulb className="size-5 shrink-0 text-primary" />
                      <div className="space-y-1">
                        <p className="font-semibold text-sm">AI Analysis Suggestion</p>
                        <p className="text-muted-foreground text-xs">
                          We suggest focused extraction on "Penalty Clauses" and "Disclosure Timelines".
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="guideline" className="mt-0">
                <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
                  <div className="flex items-center gap-2 rounded-lg border border-primary/10 bg-primary/5 p-3">
                    <FileText className="size-4 text-primary" />
                    <span className="font-bold text-sm">01_年报提取规则指导.md</span>
                  </div>
                  <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                    <p>本指导文档由 AI 根据 **《上市公司信息披露管理办法 (2024修订)》** 自动构建。</p>
                    <ul className="list-disc space-y-2 pl-4">
                      <li>
                        <strong>基本信息</strong>: 包含公司全称、证券代码、法定代表人等。
                      </li>
                      <li>
                        <strong>管理层讨论</strong>: 聚焦经营情况讨论与分析、研发投入占比。
                      </li>
                      <li>
                        <strong>财务指标</strong>: 提取营收、净利润、资产负债率等核心数据。
                      </li>
                    </ul>
                    <Separator />
                    <p className="text-[10px] italic">提示：您可以根据具体的业务场景对生成的 Schema 进行微调。</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="schema" className="mt-0 h-[400px]">
                <div className="group relative h-full overflow-hidden rounded-xl border bg-zinc-950 shadow-inner">
                  <div className="absolute top-3 right-3 z-10 opacity-0 transition-opacity group-hover:opacity-100">
                    <Badge variant="outline" className="border-zinc-800 bg-zinc-900/50 text-zinc-400">
                      JSON Editor
                    </Badge>
                  </div>
                  <textarea
                    value={schema}
                    onChange={(e) => setSchema(e.target.value)}
                    className="h-full w-full resize-none bg-transparent p-6 font-mono text-blue-300 text-xs outline-none selection:bg-primary/30"
                    spellCheck={false}
                  />
                </div>
              </TabsContent>

              <TabsContent value="prompt" className="mt-0 h-[400px]">
                <div className="group relative h-full overflow-hidden rounded-xl border bg-zinc-950 shadow-inner">
                  <div className="absolute top-3 right-3 z-10 opacity-0 transition-opacity group-hover:opacity-100">
                    <Badge variant="outline" className="border-zinc-800 bg-zinc-900/50 text-zinc-400">
                      Markdown Editor
                    </Badge>
                  </div>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="h-full w-full resize-none bg-transparent p-6 font-mono text-sm text-zinc-300 leading-relaxed outline-none selection:bg-primary/30"
                    spellCheck={false}
                  />
                </div>
              </TabsContent>
            </ScrollArea>

            <Separator />
            <div className="flex items-center justify-between p-4">
              <span className="text-muted-foreground text-xs">
                <Sparkles className="mr-1 inline-block size-3 text-primary" />
                Generated by AI-Native Model (Studio V2)
              </span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Export All
                </Button>
                <Button size="sm" className="gap-2">
                  <Code2 className="size-4" />
                  Register Template
                </Button>
              </div>
            </div>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
