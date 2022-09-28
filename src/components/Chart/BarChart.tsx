import {
  BarControllerChartOptions,
  ChartData,
  CoreChartOptions,
  DatasetChartOptions,
  ElementChartOptions,
  PluginChartOptions,
  ScaleChartOptions,
} from "chart.js";
import Chart from "chart.js/auto";
import { _DeepPartialObject } from "chart.js/types/utils";
import useDrawLine from "../../plugins/DrawLine";
import { useEffect, useRef, useMemo } from "react";

type ChartProps = {
  data: ChartData<"bar">;
  chartId: string;
  options?:
    | _DeepPartialObject<
        CoreChartOptions<"bar"> &
          ElementChartOptions<"bar"> &
          PluginChartOptions<"bar"> &
          DatasetChartOptions<"bar"> &
          ScaleChartOptions<"bar"> &
          BarControllerChartOptions
      >
    | undefined;
};

export default function BarChart({ data, chartId, options }: ChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const DrawLine = useMemo(() => useDrawLine(false, true), []);
  useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        type: "bar",
        data: data,
        options: options || undefined,
        plugins: [DrawLine],
      });
      //cleanup chart
      return () => {
        chart.destroy();
      };
    }
  }, []);
  return (
    <>
      <canvas id={chartId} ref={chartRef} />
    </>
  );
}
