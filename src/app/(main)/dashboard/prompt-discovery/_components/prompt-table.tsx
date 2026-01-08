"use client";

import * as React from "react";

import { Plus, Search } from "lucide-react";
import { toast } from "sonner";

import { DataTable as DataTableBase } from "@/components/data-table/data-table";
import { DataTablePagination } from "@/components/data-table/data-table-pagination";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useDataTableInstance } from "@/hooks/use-data-table-instance";

import { getPromptColumns } from "./prompt-columns";
import { PromptFormDialog } from "./prompt-form-dialog";
import type { Prompt } from "./schema";

const initialPrompts: Prompt[] = [
  {
    id: "1",
    name: "Executive Summary Extractor",
    category: "Financial Analysis",
    description: "Extracts key highlights from executive summaries in annual reports.",
    content: "You are a financial analyst. Please extract the top 5 strategic priorities from the following text...",
    version: "1.2.0",
    updatedAt: "2024-03-20",
  },
  {
    id: "2",
    name: "Risk Factor Classifier",
    category: "Compliance",
    description: "Categorizes risk factors mentioned in IPO prospectuses.",
    content: "Identify and classify all risk factors into Legal, Market, Operational, or Financial categories...",
    version: "2.1.0",
    updatedAt: "2024-03-21",
  },
  {
    id: "3",
    name: "Balance Sheet Parser",
    category: "Data Extraction",
    description: "Converts balance sheet tables from PDF text into structured JSON.",
    content: "Extract current assets, non-current assets, and liabilities from the provided text accurately...",
    version: "1.0.5",
    updatedAt: "2024-03-22",
  },
];

export function PromptTable() {
  const [data, setData] = React.useState<Prompt[]>(initialPrompts);
  const [search, setSearch] = React.useState("");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [editingPrompt, setEditingPrompt] = React.useState<Prompt | null>(null);

  const filteredData = React.useMemo(() => {
    return data.filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase()),
    );
  }, [data, search]);

  const handleCreate = () => {
    setEditingPrompt(null);
    setIsDialogOpen(true);
  };

  const handleEdit = (prompt: Prompt) => {
    setEditingPrompt(prompt);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setData((prev) => prev.filter((p) => p.id !== id));
    toast.success("Prompt deleted successfully");
  };

  const handleSubmit = (formData: Partial<Prompt>) => {
    if (editingPrompt) {
      setData((prev) => prev.map((p) => (p.id === editingPrompt.id ? ({ ...p, ...formData } as Prompt) : p)));
      toast.success("Prompt updated successfully");
    } else {
      const newPrompt = {
        ...formData,
        id: Math.random().toString(36).substr(2, 9),
        updatedAt: new Date().toISOString().split("T")[0],
      } as Prompt;
      setData((prev) => [newPrompt, ...prev]);
      toast.success("Prompt created successfully");
    }
    setIsDialogOpen(false);
  };

  const columns = getPromptColumns({ onEdit: handleEdit, onDelete: handleDelete });
  const table = useDataTableInstance({
    data: filteredData,
    columns,
    getRowId: (row) => row.id,
  });

  return (
    <Card className="border-none bg-transparent shadow-none">
      <CardHeader className="px-0 pt-0">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-bold text-2xl tracking-tight">Prompt 模板库</CardTitle>
            <CardDescription>集中管理各类金融监管与情报抽取的 AI 指令模板。</CardDescription>
          </div>
          <Button onClick={handleCreate} className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="mr-2 size-4" />
            新建模板
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 px-0">
        <div className="flex items-center gap-2">
          <div className="relative max-w-sm flex-1">
            <Search className="absolute top-2.5 left-2.5 size-4 text-muted-foreground" />
            <Input
              placeholder="Search prompts..."
              className="h-9 pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="overflow-hidden rounded-md border bg-card">
          <DataTableBase table={table} columns={columns} />
        </div>
        <DataTablePagination table={table} />
      </CardContent>

      <PromptFormDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSubmit={handleSubmit}
        prompt={editingPrompt}
      />
    </Card>
  );
}
