"use client";

import { MoreHorizontal, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const templates = [
  {
    id: 1,
    title: "上市公司IPO分析模板",
    area: "金融",
    scene: "IPO",
    rating: 4.8,
    usageCount: 1234,
    updatedAt: "2024-03-15",
  },
  {
    id: 2,
    title: "财报智能分析模板",
    area: "金融",
    scene: "财报",
    rating: 4.5,
    usageCount: 892,
    updatedAt: "2024-03-14",
  },
  {
    id: 3,
    title: "合同风险审查",
    area: "法律",
    scene: "合规",
    rating: 4.7,
    usageCount: 756,
    updatedAt: "2024-03-13",
  },
];

export function TemplateList() {
  return (
    <div className="mt-2 overflow-hidden rounded-lg border border-muted-foreground/10 bg-card/60 backdrop-blur-sm">
      <Table>
        <TableHeader className="bg-muted/30">
          <TableRow>
            <TableHead className="w-[300px]">名称</TableHead>
            <TableHead>领域</TableHead>
            <TableHead>场景</TableHead>
            <TableHead>评分</TableHead>
            <TableHead>使用数</TableHead>
            <TableHead>更新时间</TableHead>
            <TableHead className="text-right">操作</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {templates.map((template) => (
            <TableRow key={template.id} className="hover:bg-muted/20">
              <TableCell className="font-medium">{template.title}</TableCell>
              <TableCell>{template.area}</TableCell>
              <TableCell>{template.scene}</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Star className="size-3 fill-current text-yellow-500" />
                  <span className="font-bold text-xs">{template.rating}</span>
                </div>
              </TableCell>
              <TableCell>{template.usageCount.toLocaleString()}</TableCell>
              <TableCell>{template.updatedAt}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8 rounded-full">
                      <MoreHorizontal className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>操作菜单</DropdownMenuLabel>
                    <DropdownMenuItem>使用模板</DropdownMenuItem>
                    <DropdownMenuItem>查看详情</DropdownMenuItem>
                    <DropdownMenuItem>收藏</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>分享</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
