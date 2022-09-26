import type { ActiveElement } from "chart.js";
import { Chart } from "chart.js";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useDrawLine = (vertical = false, horizontal = false, dash?: number[], color?: string): any => {
  const draw = (canvas: CanvasRenderingContext2D) => {
    canvas.setLineDash(dash || [0, 0]);
    canvas.lineWidth = 1;
    canvas.strokeStyle = color || "rbg(1,1,1)";
    canvas.stroke();
  };
  if (horizontal) {
    return {
      id: "draw-line",
      beforeDraw: (chart: Chart) => {
        const { ctx, chartArea } = chart;
        const { left, right } = chartArea;
        const activeElement = chart.getActiveElements();
        let points: { x: number; y: number }[] = [];
        if (activeElement.length) {
          points = activeElement.map((el: ActiveElement) => ({ x: el.element.x, y: el.element.y }));
        }
        points &&
          points.forEach((point) => {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(right, point.y);
            ctx.lineTo(left, point.y);
            draw(ctx);
          });
      },
    };
  }
  if (vertical) {
    return {
      id: "draw-line",
      beforeDraw: (chart: Chart) => {
        const { ctx, chartArea } = chart;
        const { top, bottom } = chartArea;
        const activeElement = chart.getActiveElements();
        let points: { x: number; y: number }[] = [];
        if (activeElement.length) {
          points = activeElement.map((el: ActiveElement) => ({ x: el.element.x, y: el.element.y }));
        }
        points &&
          points.forEach((point) => {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(point.x, top);
            ctx.lineTo(point.x, bottom);
            draw(ctx);
          });
      },
    };
  }
  if (horizontal && vertical) {
    return {
      id: "draw-line",
      beforeDraw: (chart: Chart) => {
        const { ctx, chartArea } = chart;
        const { top, bottom, left, right } = chartArea;
        const activeElement = chart.getActiveElements();
        let points: { x: number; y: number }[] = [];
        if (activeElement.length) {
          points = activeElement.map((el: ActiveElement) => ({ x: el.element.x, y: el.element.y }));
        }
        points &&
          points.forEach((point) => {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(right, point.y);
            ctx.lineTo(left, point.y);
            draw(ctx);
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(point.x, top);
            ctx.lineTo(point.x, bottom);
            draw(ctx);
          });
      },
    };
  }
};

export default useDrawLine;
