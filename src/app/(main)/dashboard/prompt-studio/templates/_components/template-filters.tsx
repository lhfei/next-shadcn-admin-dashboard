"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function TemplateFilters() {
  return (
    <div className="flex flex-wrap items-center gap-3 border-muted-foreground/10 border-b py-3">
      <div className="flex items-center gap-2">
        <Select defaultValue="all-areas">
          <SelectTrigger className="h-9 w-[130px] border-muted-foreground/20 bg-background/50 text-xs">
            <SelectValue placeholder="全部领域" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-areas">全部领域</SelectItem>
            <SelectItem value="finance">金融领域</SelectItem>
            <SelectItem value="legal">法律领域</SelectItem>
            <SelectItem value="tech">科技领域</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all-scenes">
          <SelectTrigger className="h-9 w-[130px] border-muted-foreground/20 bg-background/50 text-xs">
            <SelectValue placeholder="全部场景" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-scenes">全部场景</SelectItem>
            <SelectItem value="ipo">IPO分析</SelectItem>
            <SelectItem value="report">财报分析</SelectItem>
            <SelectItem value="contract">合同审查</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all-status">
          <SelectTrigger className="h-9 w-[130px] border-muted-foreground/20 bg-background/50 text-xs">
            <SelectValue placeholder="全部状态" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-status">全部状态</SelectItem>
            <SelectItem value="active">启用中</SelectItem>
            <SelectItem value="draft">草稿</SelectItem>
            <SelectItem value="archived">已归档</SelectItem>
          </SelectContent>
        </Select>

        <div className="relative ml-2 hidden w-64 md:block">
          <Search className="absolute top-1/2 left-3 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="搜索模型名称、描述或标签..."
            className="h-9 border-muted-foreground/20 bg-background/30 pl-9 text-xs focus-visible:ring-primary/20"
          />
        </div>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <span className="font-medium text-muted-foreground text-xs">排序:</span>
        <Select defaultValue="popular">
          <SelectTrigger className="h-9 w-[120px] border-muted-foreground/20 bg-background/50 text-xs">
            <SelectValue placeholder="近期热门" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">近期热门</SelectItem>
            <SelectItem value="latest">最新创建</SelectItem>
            <SelectItem value="usage">调用次数</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
