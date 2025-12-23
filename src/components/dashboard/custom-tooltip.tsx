"use client";

import { TooltipProps } from "recharts";

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value?: number | string;
    name?: string;
    color?: string;
  }>;
  label?: string | number;
  formatter?: (value: number) => string;
  labelFormatter?: (label: string) => string;
}

export function CustomTooltip({
  active,
  payload,
  label,
  formatter,
  labelFormatter,
}: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-card p-3 shadow-lg">
        <p className="mb-2 text-sm font-medium text-card-foreground">
          {labelFormatter ? labelFormatter(String(label)) : String(label)}
        </p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-muted-foreground">
              {entry.name || "Value"}:
            </span>
            <span className="font-semibold text-card-foreground">
              {formatter
                ? formatter(Number(entry.value))
                : Number(entry.value).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

export function createCustomTooltip(
  formatter?: (value: number) => string,
  labelFormatter?: (label: string) => string
) {
  const TooltipWrapper = (props: TooltipProps<number, string>) => (
    <CustomTooltip
      {...props}
      formatter={formatter}
      labelFormatter={labelFormatter}
    />
  );
  TooltipWrapper.displayName = "CustomTooltipWrapper";
  return TooltipWrapper;
}
