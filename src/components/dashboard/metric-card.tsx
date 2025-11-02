"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
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
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card className="transition-all hover:shadow-md cursor-help">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <Icon className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center text-xs flex-wrap gap-1">
                {metric.trend === "up" ? (
                  <TrendingUp
                    className="mr-1 h-3 w-3"
                    style={{ color: "var(--chart-4)" }}
                  />
                ) : (
                  <TrendingDown
                    className="mr-1 h-3 w-3"
                    style={{ color: "var(--destructive)" }}
                  />
                )}
                <span
                  className="font-medium"
                  style={{
                    color:
                      metric.trend === "up" ? "var(--chart-4)" : "var(--destructive)",
                  }}
                >
                  {Math.abs(metric.change)}%
                </span>
                <span className="ml-1 text-muted-foreground">from last month</span>
              </div>
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
    </TooltipProvider>
  );
}
