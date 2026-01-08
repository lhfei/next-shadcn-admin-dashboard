export default function CompilerInstructionPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-2xl tracking-tight">Prompt → LLM 指令</h1>
        <p className="text-muted-foreground">将结构化 Prompt 编译为特定的模型指令。</p>
      </div>
      <div className="flex items-center justify-center rounded-lg border border-dashed p-20 text-muted-foreground">
        页面开发中...
      </div>
    </div>
  );
}
