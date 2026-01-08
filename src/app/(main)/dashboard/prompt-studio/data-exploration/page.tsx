"use client";

import { BarChart3, History, MessageSquare, Search, Share2, Table as TableIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ChatView } from "./_components/chat-view";
import { GraphView } from "./_components/graph-view";
import { SummaryView } from "./_components/summary-view";

export default function DataExplorationPage() {
  return (
    <div className="fade-in flex animate-in flex-col gap-4 p-4 duration-500 md:gap-8 md:p-8">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-2xl tracking-tight">数据探索</h1>
        <p className="text-muted-foreground">分析和可视化您处理后的文档数据。</p>
      </div>

      <Tabs defaultValue="summary" className="w-full">
        <div className="mb-6 flex items-center justify-between">
          <TabsList className="rounded-xl border border-muted-foreground/10 bg-muted/50 p-1">
            <TabsTrigger
              value="summary"
              className="gap-2 rounded-lg data-[state=active]:bg-background data-[state=active]:text-primary"
            >
              <BarChart3 className="size-4" /> 摘要
            </TabsTrigger>
            <TabsTrigger
              value="table"
              className="gap-2 rounded-lg data-[state=active]:bg-background data-[state=active]:text-primary"
            >
              <TableIcon className="size-4" /> 表格
            </TabsTrigger>
            <TabsTrigger
              value="graph"
              className="gap-2 rounded-lg data-[state=active]:bg-background data-[state=active]:text-primary"
            >
              <Share2 className="size-4" /> 图谱
            </TabsTrigger>
            <TabsTrigger
              value="vector"
              className="gap-2 rounded-lg data-[state=active]:bg-background data-[state=active]:text-primary"
            >
              <Search className="size-4" /> 检索
            </TabsTrigger>
            <TabsTrigger
              value="chat"
              className="gap-2 rounded-lg data-[state=active]:bg-background data-[state=active]:text-primary"
            >
              <MessageSquare className="size-4" /> 对话
            </TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="h-9 gap-2 text-muted-foreground hover:text-foreground">
              <History className="size-4" /> 历史分析
            </Button>
            <div className="relative hidden w-64 md:block">
              <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="在结果中搜索..."
                className="h-9 w-full rounded-lg border-muted-foreground/20 bg-background/50 pl-8"
              />
            </div>
          </div>
        </div>

        <TabsContent value="summary" className="mt-0">
          <SummaryView />
        </TabsContent>

        <TabsContent value="table" className="mt-0">
          <Card className="border-muted-foreground/10 bg-card/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">结构化提取结果</CardTitle>
              <CardDescription>来自您最新分析任务的详细提取字段。</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/30 hover:bg-muted/30">
                    <TableHead className="font-bold">编号</TableHead>
                    <TableHead className="font-bold">源文件</TableHead>
                    <TableHead className="font-bold">实体类型</TableHead>
                    <TableHead className="font-bold">提取字段</TableHead>
                    <TableHead className="text-right font-bold">置信度</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { id: "EXT-001", file: "XX_Tech_IPO.pdf", type: "公司", fields: "名称, 资本, 地址", conf: "98%" },
                    { id: "EXT-002", file: "XX_Tech_IPO.pdf", type: "人员", fields: "姓名, 职位, 经验", conf: "95%" },
                    {
                      id: "EXT-003",
                      file: "Financial_Report_2023.pdf",
                      type: "财务",
                      fields: "收入, 利润, 利润率",
                      conf: "99%",
                    },
                    {
                      id: "EXT-004",
                      file: "Regulatory_Guide.pdf",
                      type: "合规",
                      fields: "条款, 风险, 义务",
                      conf: "92%",
                    },
                  ].map((row) => (
                    <TableRow key={row.id} className="transition-colors hover:bg-muted/10">
                      <TableCell className="font-mono text-xs">{row.id}</TableCell>
                      <TableCell className="text-xs">{row.file}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="border-none bg-primary/5 text-[10px] text-primary">
                          {row.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground text-xs">{row.fields}</TableCell>
                      <TableCell className="text-right">
                        <span className="font-bold text-green-500 text-xs">{row.conf}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="graph" className="mt-0">
          <GraphView />
        </TabsContent>

        <TabsContent value="vector" className="mt-0">
          <Card className="flex h-[700px] items-center justify-center rounded-2xl border border-muted-foreground/10 border-dashed bg-card/40 backdrop-blur-md">
            <div className="max-w-sm space-y-4 text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Search className="size-8" />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-lg">语义检索</p>
                <p className="text-muted-foreground text-sm">
                  通过自然语言在海量文档片段中精准定位信息，支持向量相似度匹配。
                </p>
              </div>
              <Button variant="outline" className="rounded-full">
                开始检索
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="chat" className="mt-0">
          <ChatView />
        </TabsContent>
      </Tabs>
    </div>
  );
}
