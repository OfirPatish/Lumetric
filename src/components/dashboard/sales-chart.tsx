"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartDataPoint } from "@/lib/mock-data";
import { createCustomTooltip } from "./custom-tooltip";

interface SalesChartProps {
  data: ChartDataPoint[];
}

export function SalesChart({ data }: SalesChartProps) {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
        <CardDescription>
          Monthly revenue for the past year
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 10, right: 15, left: 5, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--muted)" opacity={0.3} />
            <XAxis
              dataKey="date"
              tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              interval="preserveStartEnd"
            />
            <YAxis
              tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value / 1000}k`}
              width={50}
            />
            <Tooltip
              content={createCustomTooltip((value: number) => `$${value.toLocaleString()}`)}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="var(--chart-1)"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 6, fill: "var(--chart-1)", strokeWidth: 2, stroke: "var(--background)" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

