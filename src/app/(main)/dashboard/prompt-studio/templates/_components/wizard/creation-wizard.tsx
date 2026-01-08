"use client";

import { useState } from "react";

import { Check, ChevronLeft, ChevronRight, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Step1BasicInfo } from "./steps/step-1-basic-info";
import { Step2ProfessionalRole } from "./steps/step-2-professional-role";
import { Step3AnalysisFramework } from "./steps/step-3-analysis-framework";
import { Step7TestPublish } from "./steps/step-7-test-publish";

const STEPS = ["基本信息", "专业角色", "分析框架", "输出结构", "存储配置", "模板设计", "测试发布"];

interface CreationWizardProps {
  onClose: () => void;
}

export function CreationWizard({ onClose }: CreationWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="slide-in-from-right flex animate-in flex-col gap-6 p-4 duration-500 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl text-foreground/90 tracking-tight">创建新模板</h1>
        <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
          <X className="size-5" />
        </Button>
      </div>

      {/* Step Indicator */}
      <div className="relative mx-auto mb-8 flex w-full max-w-4xl justify-between px-4">
        {/* Connection Line */}
        <div className="absolute top-5 right-8 left-8 -z-10 h-0.5 bg-muted-foreground/10" />
        <div
          className="absolute top-5 left-8 -z-10 h-0.5 bg-primary transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
        />

        {STEPS.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <div key={step} className="group flex flex-col items-center gap-2">
              <div
                className={cn(
                  "flex size-10 items-center justify-center rounded-full border-2 transition-all duration-300",
                  isActive
                    ? "scale-110 border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : isCompleted
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-muted-foreground/20 bg-background text-muted-foreground",
                )}
              >
                {isCompleted ? <Check className="size-5" /> : <span className="font-bold text-sm">{stepNumber}</span>}
              </div>
              <span
                className={cn(
                  "font-medium text-xs transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground",
                )}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="mx-auto w-full max-w-4xl flex-1 rounded-2xl border border-muted-foreground/10 bg-card/40 p-8 shadow-xl backdrop-blur-md">
        {currentStep === 1 && <Step1BasicInfo />}
        {currentStep === 2 && <Step2ProfessionalRole />}
        {currentStep === 3 && <Step3AnalysisFramework />}
        {currentStep > 3 && currentStep < 7 && (
          <div className="py-20 text-center text-muted-foreground italic">
            <p className="text-lg">
              步骤 {currentStep}: {STEPS[currentStep - 1]} 页面正在开发中...
            </p>
            <p className="mt-2 text-sm">点击“下一步”预览最终测试页面</p>
          </div>
        )}
        {currentStep === 7 && <Step7TestPublish />}
      </div>

      {/* Footer Actions */}
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between border-muted-foreground/10 border-t pt-6">
        <Button variant="outline" onClick={prevStep} disabled={currentStep === 1} className="rounded-full px-6">
          <ChevronLeft className="mr-2 size-4" />
          上一步
        </Button>

        <div className="flex gap-3">
          <Button variant="ghost" onClick={onClose}>
            取消
          </Button>
          <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
            保存草稿
          </Button>
          {currentStep === STEPS.length ? (
            <Button className="rounded-full bg-primary px-8 shadow-lg shadow-primary/20 hover:bg-primary/90">
              发布模板
            </Button>
          ) : (
            <Button onClick={nextStep} className="rounded-full bg-primary px-8 shadow-md hover:bg-primary/90">
              下一步
              <ChevronRight className="ml-2 size-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
