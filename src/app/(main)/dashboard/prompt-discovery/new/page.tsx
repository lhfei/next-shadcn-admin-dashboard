"use client";

import { DiscoveryStudio } from "../_components/discovery-studio";

export default function NewPromptPage() {
  return (
    <div className="flex h-screen max-h-[calc(100vh-64px)] flex-col gap-6 overflow-hidden p-4 md:p-8">
      <div className="flex flex-col gap-1">
        <h1 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text font-bold text-3xl text-transparent tracking-tight">
          规则发现工作台
        </h1>
        <p className="text-muted-foreground text-sm">AI 原生交互空间，将监管法规精准转化为可执行的专家指令。</p>
      </div>

      <DiscoveryStudio />
    </div>
  );
}
