"use client";

import { useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Download,
  FileText,
  FileUp,
  Loader2,
  MessageSquareQuote,
  Network,
  Play,
  Search,
  Settings,
  Sparkles,
  Table as TableIcon,
} from "lucide-react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, title: "Upload", icon: FileUp },
  { id: 2, title: "Match", icon: Cpu },
  { id: 3, title: "Config", icon: Settings },
  { id: 4, title: "Execution", icon: Play },
];

export default function DocumentProcessingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isExecuting, setIsExecuting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleExecute = () => {
    setIsExecuting(true);
    let p = 0;
    const interval = setInterval(() => {
      p += 10;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setIsExecuting(false);
        setIsDone(true);
        toast.success("Extraction complete!");
      }
    }, 400);
  };

  return (
    <div className="flex flex-col gap-6 p-4 md:p-8">
      <div className="flex flex-col gap-1">
        <h1 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text font-bold text-3xl text-transparent tracking-tight">
          Intelligence Processing Hub
        </h1>
        <p className="text-muted-foreground text-sm">
          Automated intelligence extraction for business documents via expert prompts.
        </p>
      </div>

      {/* Stepper */}
      <div className="mx-auto mb-8 flex w-full max-w-2xl items-center justify-between px-2">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = currentStep >= step.id;
          return (
            <div key={step.id} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`flex size-10 items-center justify-center rounded-full border-2 transition-all ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-glow"
                      : "border-muted text-muted-foreground"
                  }`}
                >
                  <Icon className="size-5" />
                </div>
                <span className={`font-medium text-xs ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                  {step.title}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div className={`mx-4 h-0.5 flex-1 ${currentStep > step.id ? "bg-primary" : "bg-muted"}`} />
              )}
            </div>
          );
        })}
      </div>

      {!isDone ? (
        <Card className="mx-auto w-full max-w-3xl border-none bg-background/50 shadow-premium backdrop-blur-sm">
          <CardHeader>
            <CardTitle>{steps[currentStep - 1].title} Phase</CardTitle>
            <CardDescription>Follow the guide to process your business documents.</CardDescription>
          </CardHeader>
          <CardContent className="flex min-h-[300px] flex-col items-center justify-center py-12">
            {currentStep === 1 && (
              <div className="w-full max-w-md cursor-pointer space-y-4 rounded-xl border-2 border-dashed p-12 text-center transition-colors hover:border-primary/50">
                <FileUp className="mx-auto size-12 text-muted-foreground" />
                <p className="font-medium text-sm">Drag business reports (.pdf) here</p>
                <p className="text-muted-foreground text-xs">Example: Apple_2024_Q3_Report.pdf</p>
              </div>
            )}
            {/* Step 2: Match */}
            {currentStep === 2 && (
              <div className="fade-in slide-in-from-right-4 w-full animate-in space-y-4 duration-500">
                {[
                  {
                    name: "Annual Report Metrics Extractor",
                    score: 98,
                    desc: "Identify finance, compliance and MD&A info",
                    selected: true,
                  },
                  {
                    name: "Risk Category Template",
                    score: 85,
                    desc: "Auto-classify risks into S1-S4 grades",
                    selected: false,
                  },
                ].map((p) => (
                  <div
                    key={p.name}
                    className={cn(
                      "flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-all",
                      p.selected
                        ? "border-primary bg-primary/5 shadow-glow-sm"
                        : "border-transparent bg-muted/30 opacity-60",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Sparkles className={cn("size-5", p.selected ? "text-primary" : "text-muted-foreground")} />
                      <div>
                        <p className="font-medium text-sm">{p.name}</p>
                        <p className="text-[10px] text-muted-foreground">{p.desc}</p>
                      </div>
                    </div>
                    <Badge variant={p.selected ? "default" : "outline"}>
                      {p.selected ? "Selected" : `Match ${p.score}%`}
                    </Badge>
                  </div>
                ))}
              </div>
            )}

            {/* Step 3: Config */}
            {currentStep === 3 && (
              <div className="fade-in slide-in-from-right-4 w-full animate-in space-y-6 duration-500">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Model</p>
                    <Badge
                      variant="outline"
                      className="w-full justify-start border-primary bg-primary/5 px-3 py-2 font-normal"
                    >
                      Qwen-Max (Recommended)
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Creativity</p>
                    <Badge variant="outline" className="w-full justify-start px-3 py-2 font-normal">
                      0.3 (Strict)
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <div className="flex items-center gap-2 font-medium text-sm">
                    <div className="size-2 animate-pulse rounded-full bg-green-500" />
                    Auto-Healing
                  </div>
                  <Badge>Enabled</Badge>
                </div>
              </div>
            )}

            {/* Step 4: Execution */}
            {currentStep === 4 && (
              <div className="w-full space-y-8 text-center">
                {/* Streaming Phase Indicator */}
                <div className="mb-4 grid grid-cols-4 gap-2">
                  {[
                    { label: "Parsing", icon: FileText, status: "done" },
                    {
                      label: "AI Analysis",
                      icon: Search,
                      status: isExecuting ? "loading" : isDone ? "done" : "pending",
                    },
                    { label: "Mapping", icon: Network, status: isExecuting ? "loading" : isDone ? "done" : "pending" },
                    { label: "Syncing", icon: Database, status: isDone ? "done" : "pending" },
                  ].map((phase) => (
                    <div
                      key={phase.label}
                      className={cn(
                        "flex flex-col items-center gap-1 rounded-lg border p-2 transition-all duration-500",
                        phase.status === "done"
                          ? "border-green-500/20 bg-green-500/10 text-green-600"
                          : phase.status === "loading"
                            ? "animate-pulse border-primary/20 border-dashed bg-primary/10 text-primary"
                            : "border-transparent bg-muted/30 text-muted-foreground",
                      )}
                    >
                      <phase.icon className="size-4" />
                      <span className="font-medium text-[10px]">{phase.label}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="font-medium text-sm">
                    {isExecuting ? "Executing intelligence extraction..." : isDone ? "Process Complete" : "Ready"}
                  </p>
                  <Progress value={progress} className="h-2 shadow-glow-sm" />
                </div>
                {isExecuting && (
                  <div className="flex flex-col items-start gap-2 rounded border bg-muted/30 p-4 font-mono text-muted-foreground text-xs">
                    <div className="flex items-center gap-2">
                      <div className="size-1 rounded-full bg-green-500" />✅ OCR Text Cleaned...
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-1 rounded-full bg-green-500" />✅ Expert Prompt Matched (Annual-V2.1)...
                    </div>
                    <div className="flex items-center gap-2">
                      <Loader2 className="size-3 animate-spin text-primary" />🔄 Building knowledge graph nodes (Step
                      4/12)...
                    </div>
                  </div>
                )}
                {!isExecuting && !isDone && (
                  <Button size="lg" className="w-full gap-2 shadow-glow" onClick={handleExecute}>
                    <Play className="size-4" />
                    Start Execution
                  </Button>
                )}
              </div>
            )}
          </CardContent>
          <Separator />
          <CardFooter className="justify-between p-6">
            <Button variant="ghost" onClick={prevStep} disabled={currentStep === 1 || isExecuting}>
              <ArrowLeft className="mr-2 size-4" />
              Back
            </Button>
            {currentStep < 4 ? (
              <Button onClick={nextStep}>
                Next
                <ArrowRight className="ml-2 size-4" />
              </Button>
            ) : (
              <Button onClick={() => setIsDone(true)} className="bg-green-600 shadow-glow hover:bg-green-700">
                View Results
                <CheckCircle2 className="ml-2 size-4" />
              </Button>
            )}
          </CardFooter>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <Card className="border-none shadow-premium">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <TableIcon className="size-5 text-primary" />
                    Extraction Results
                  </CardTitle>
                  <CardDescription>Structured metrics from Apple_2024_Q3_Report.pdf</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="size-3" />
                  Export CSV
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden rounded-xl border">
                  <table className="w-full text-sm">
                    <thead className="border-b bg-muted/50 font-bold text-[11px] text-muted-foreground uppercase tracking-wider">
                      <tr>
                        <th className="px-4 py-4 text-left font-bold">Field Name</th>
                        <th className="px-4 py-4 text-left font-bold">Extracted Value</th>
                        <th className="px-4 py-4 text-left font-bold">Confidence</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        { field: "Total Revenue", value: "$85.8 Billion", confidence: 99 },
                        { field: "Gross Margin", value: "46.3%", confidence: 97 },
                        { field: "EPS", value: "$1.40", confidence: 100 },
                        { field: "R&D", value: "$7.6 Billion", confidence: 95 },
                      ].map((row) => (
                        <tr key={row.field} className="transition-colors hover:bg-muted/30">
                          <td className="px-4 py-4 font-medium text-sm">{row.field}</td>
                          <td className="px-4 py-4 font-mono text-xs">{row.value}</td>
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-2">
                              <Progress value={row.confidence} className="h-1 w-12" />
                              <span className="font-bold text-[10px] text-green-600">{row.confidence}%</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-none bg-primary/[0.02] shadow-premium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <MessageSquareQuote className="size-4 text-primary" />
                  AI Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                <p>Apple reported strong revenue growth, primarily driven by **Services** and **iPad** segments.</p>
                <p className="mt-2 text-primary/80">Gross margin reached a record high of **46.3%**.</p>
                <div className="mt-4 flex gap-2 rounded-xl border border-primary/20 bg-primary/10 p-3 text-primary shadow-glow-sm">
                  <Sparkles className="mt-0.5 size-4 shrink-0" />
                  <p className="text-xs italic">
                    Insight: "Operating cash flow remains a core strength at $29.0 billion."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-premium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Database className="size-4 text-primary" />
                  Storage & Sync Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border border-transparent bg-muted/30 p-3 text-xs transition-all hover:border-primary/20">
                  <span className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-green-500 shadow-glow" />
                    PostgreSQL
                  </span>
                  <span className="font-mono text-muted-foreground">Synced (UID: CR-88)</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-transparent bg-muted/30 p-3 text-xs transition-all hover:border-primary/20">
                  <span className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-green-500 shadow-glow" />
                    HugeGraph
                  </span>
                  <span className="font-mono text-muted-foreground">14 Nodes Extended</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-transparent bg-muted/30 p-3 text-xs transition-all hover:border-primary/20">
                  <span className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-green-500 shadow-glow" />
                    Milvus
                  </span>
                  <span className="font-mono text-muted-foreground">32 Shards Vectorized</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-2 text-xs" variant="outline" onClick={() => setIsDone(false)}>
                  <Play className="size-3" />
                  Start Next Task
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
