"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartDataPoint } from "@/lib/mock-data";
import { createCustomTooltip } from "./custom-tooltip";

interface EngagementChartProps {
  data: ChartDataPoint[];
}

export function EngagementChart({ data }: EngagementChartProps) {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader>
        <CardTitle>Engagement Rate</CardTitle>
        <CardDescription>
          Weekly email engagement metrics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data} margin={{ top: 10, right: 15, left: 5, bottom: 10 }}>
            <defs>
              <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-3)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--chart-3)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--muted)" opacity={0.3} />
            <XAxis
              dataKey="date"
              tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
              width={50}
            />
            <Tooltip
              content={createCustomTooltip((value: number) => `${value}%`)}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="var(--chart-3)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorEngagement)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

