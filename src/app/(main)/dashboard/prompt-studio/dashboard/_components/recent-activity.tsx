"use client";

import { Activity } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
  {
    id: 1,
    time: "10:30",
    action: "使用了 'IPO 分析' 模板",
    details: "分析了 XX 公司招股书",
  },
  {
    id: 2,
    time: "09:15",
    action: "创建了 '专利评估' 模板",
    details: "版本 1.0 已发布到团队",
  },
  {
    id: 3,
    time: "昨天",
    action: "下载了分析报告",
    details: "导出了 3 个文件",
  },
];

export function RecentActivity() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="size-5 text-primary" />
          最近活动
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative space-y-6 border-l pl-6">
          {activities.map((activity) => (
            <div key={activity.id} className="relative">
              <span className="absolute top-1 -left-[29px] h-3 w-3 rounded-full bg-primary/20 ring-4 ring-background" />
              <div className="flex flex-col gap-1">
                <span className="font-medium text-muted-foreground text-xs">{activity.time}</span>
                <span className="font-medium text-sm">{activity.action}</span>
                <span className="text-muted-foreground text-xs">{activity.details}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
