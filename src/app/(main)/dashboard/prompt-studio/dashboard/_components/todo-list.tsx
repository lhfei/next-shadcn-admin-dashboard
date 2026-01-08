"use client";

import { AlertCircle, CheckCircle2, Clock } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const todos = [
  {
    id: 1,
    title: "完成 XX 公司 IPO 招股书分析",
    status: "pending",
    priority: "high",
  },
  {
    id: 2,
    title: "审核团队模板",
    status: "pending",
    priority: "medium",
  },
  {
    id: 3,
    title: "参加 Prompt 工程培训",
    status: "pending",
    priority: "low",
  },
];

export function TodoList() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckCircle2 className="size-5 text-primary" />
          今日待办
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-start gap-3 rounded-lg border p-3 transition-colors hover:bg-muted/50"
            >
              <div className="mt-0.5">
                {todo.priority === "high" ? (
                  <AlertCircle className="size-4 text-destructive" />
                ) : (
                  <Clock className="size-4 text-muted-foreground" />
                )}
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-medium text-sm leading-none">{todo.title}</p>
                <p className="text-muted-foreground text-xs">今日截止</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
