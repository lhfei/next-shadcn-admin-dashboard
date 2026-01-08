export default function RuntimeValidationPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-2xl tracking-tight">LangExtract / JSON 校验</h1>
        <p className="text-muted-foreground">运行时提取结果的数据完整性与 schema 合规性检查。</p>
      </div>
      <div className="flex items-center justify-center rounded-lg border border-dashed p-20 text-muted-foreground">
        页面开发中...
      </div>
    </div>
  );
}
