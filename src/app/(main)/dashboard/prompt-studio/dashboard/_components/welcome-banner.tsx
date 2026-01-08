"use client";

import { Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function WelcomeBanner() {
  return (
    <Card className="overflow-hidden border-none bg-gradient-to-r from-primary/10 via-primary/5 to-background shadow-sm">
      <CardContent className="p-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="space-y-1">
            <h2 className="font-bold text-2xl tracking-tight">下午好，分析师 张</h2>
            <p className="text-muted-foreground">准备好开始 Prompt 的魔法了吗？您今天有 3 个待办任务。</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative w-full md:w-64">
              <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="搜索模板..." className="w-full bg-background pl-8" />
            </div>
            <Button>
              <Plus className="mr-2 size-4" />
              新建分析
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
