"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartDataPoint } from "@/lib/mock-data";
import { createCustomTooltip } from "./custom-tooltip";

interface UsersChartProps {
  data: ChartDataPoint[];
}

export function UsersChart({ data }: UsersChartProps) {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader>
        <CardTitle>Active Users</CardTitle>
        <CardDescription>
          Daily active users for the past week
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 10, right: 15, left: 5, bottom: 10 }}>
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
              width={50}
            />
            <Tooltip content={createCustomTooltip()} />
            <Bar
              dataKey="value"
              fill="var(--chart-2)"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

