"use client";

import { PromptTable } from "./_components/prompt-table";

export default function PromptDiscoveryPage() {
  return (
    <div className="flex flex-col gap-6 p-1 sm:p-4 md:p-8">
      <div className="flex flex-col gap-2">
        <h1 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text font-bold text-3xl text-transparent tracking-tight">
          Prompt 模板库
        </h1>
        <p className="text-muted-foreground">高级 AI 提示词工程与金融文档智能模板管理。</p>
      </div>

      <div className="grid gap-6">
        <PromptTable />
      </div>
    </div>
  );
}
