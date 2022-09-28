import { useMemo } from "react";
import { useTabs } from "../../hooks/useTabs";
import { useSelect } from "../../hooks/useSelect";
import "./Dashboard.scss";

export default function Dashboard() {
  const { tabsDom, currentTab } = useTabs([
    { key: "all", label: "All business days " },
    { key: "today", label: "Today's status" },
    { key: "current", label: "Current Month" },
  ]);

  const { currentSelected, selectDom } = useSelect({
    data: [
      { key: "all", label: "All" },
      { key: "1st", label: "1ST" },
      { key: "2st", label: "2ST" },
      { key: "3st", label: "3ST" },
      { key: "4st", label: "4ST" },
    ],
    disabled: false,
    showSearch: false,
    // status: "error",
    // isMulti: "multiple"
  });

  const tabContent = useMemo(() => {
    let content: JSX.Element | undefined;
    switch (currentTab) {
      case "all":
        content = <div />;
        break;
    }
    return content;
  }, [currentTab]);

  return (
    <div className="site-card-wrapper Dashboard">
      {tabsDom}
      {selectDom}
    </div>
  );
}
