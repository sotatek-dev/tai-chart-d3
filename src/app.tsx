import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// Redux
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import configureStore from "./redux/store";
// Components
import MainLayout from "./components/MainLayout/MainLayout";
// Register Chart
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  CoreInteractionOptions,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);
// Css
import "./index.scss";
import "antd/dist/antd.css";
import BarChart from "./components/Chart/BarChart";

const container = document.getElementById("app");
if (!container) throw new Error("Failed to find the root element");
const root = createRoot(container);
const store = configureStore();
const options = {
  hover: {
    mode: "index",
    intersect: false,
  } as Record<any, any>,
  plugins: {
    tooltip: {
      mode: "index",
      intersect: false,
    },
  } as Record<any, any>,
};
const data = {
  labels: new Array(12).fill(undefined).map((_: unknown, index: number) => `${index} ST`),
  datasets: [
    {
      label: "Dataset 1",
      data: new Array(12).fill(undefined).map((_: unknown) => Math.floor(Math.random() * 100)),
      backgroundColor: "#1fc7d4",
    },
    {
      label: "Dataset 2",
      data: new Array(12).fill(undefined).map((_: unknown) => Math.floor(Math.random() * 100)),
      backgroundColor: "rgb(225,11,19)",
    },
  ],
};
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <BrowserRouter>
          {/* <MainLayout /> */}
          <BarChart data={data} options={options} chartId="bar-chart" />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
