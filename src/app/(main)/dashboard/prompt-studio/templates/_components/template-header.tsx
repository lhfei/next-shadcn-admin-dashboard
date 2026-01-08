"use client";

import { LayoutGrid, List, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

interface TemplateHeaderProps {
  onNewTemplate: () => void;
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
}

export function TemplateHeader({ onNewTemplate, viewMode, setViewMode }: TemplateHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-2xl text-foreground/90 tracking-tight">Prompt 模板库 - 金融领域</h1>
        <p className="text-muted-foreground text-sm">浏览、搜索和管理您的 Prompt 模板</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 rounded-lg border border-muted-foreground/10 bg-muted/50 p-1">
          <Button
            variant={viewMode === "grid" ? "secondary" : "ghost"}
            size="icon"
            className="size-8"
            onClick={() => setViewMode("grid")}
          >
            <LayoutGrid className="size-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "secondary" : "ghost"}
            size="icon"
            className="size-8"
            onClick={() => setViewMode("list")}
          >
            <List className="size-4" />
          </Button>
        </div>

        <Button onClick={onNewTemplate} className="bg-primary shadow-lg shadow-primary/20 hover:bg-primary/90">
          <Plus className="mr-2 size-4" />
          新建模板
        </Button>
      </div>
    </div>
  );
}
