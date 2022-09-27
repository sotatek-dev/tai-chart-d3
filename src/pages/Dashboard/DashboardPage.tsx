import { useMemo } from "react";
import { useTabs } from "../../hooks/useTabs";
import "./Dashboard.scss";

export default function Dashboard() {
  const { tabsDom, currentTab } = useTabs([
    { key: "all", label: "All business days " },
    { key: "today", label: "Today's status" },
    { key: "current", label: "Current Month" },
  ]);
  const tabContent = useMemo(() => {
    let content: JSX.Element | undefined;
    switch (currentTab) {
      case "all":
        content = <div />;
        break;
    }
    return content;
  }, [currentTab]);
  console.log(tabContent);
  return <div className="site-card-wrapper Dashboard">{tabsDom}</div>;
}
