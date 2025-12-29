"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Clock,
} from "lucide-react";
import { MetricCard as MetricCardType } from "@/lib/mock-data";

interface MetricCardProps {
  metric: MetricCardType;
}

const iconMap = {
  "dollar-sign": DollarSign,
  users: Users,
  "trending-up": TrendingUp,
  clock: Clock,
};

export function MetricCard({ metric }: MetricCardProps) {
  const Icon = iconMap[metric.icon as keyof typeof iconMap] || DollarSign;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Card className="transition-all hover:shadow-md cursor-help">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {metric.title}
            </CardTitle>
            <Icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {metric.trend === "up" ? "+" : ""}{Math.abs(metric.change)}% from last month
            </p>
          </CardContent>
        </Card>
      </TooltipTrigger>
      <TooltipContent>
        <p>
          {metric.trend === "up" ? "Increased" : "Decreased"} by{" "}
          {Math.abs(metric.change)}% compared to last month
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
