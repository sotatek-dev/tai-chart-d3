import { useMemo, useState, ReactElement } from "react";
import classnames from "classnames";
import styled from "styled-components";
import { Button } from "antd";

interface TabDefine {
  key: string;
  label: string;
}

export function useTabs(tabs: Array<TabDefine>): { currentTab: string; tabsDom: ReactElement } {
  const [currentTab, setCurrentTab] = useState(tabs[0].key);
  const tabsDom = useMemo(() => {
    return (
      <TabWrapper className="TabWrapper flex gap-5 mb-2">
        {tabs.map((btn) => (
          <Button
            key={btn.key}
            onClick={() => setCurrentTab(btn.key)}
            className={classnames("btn-tab", btn.key, { "tab-active": currentTab === btn.key })}
          >
            {btn.label}
          </Button>
        ))}
      </TabWrapper>
    );
  }, [currentTab, tabs]);

  return { currentTab, tabsDom };
}

const TabWrapper = styled.div`
  .tab-active {
    background: #000000;
    color: #ffffff;
    border: none;
    :hover {
      background: unset;
    }
  }

  .btn-tab {
    position: relative;
    cursor: pointer;

    :hover {
      color: #ffffff;
      border: none;
      background: #000000;
    }

    .btn-tab-text {
      position: relative;
      z-index: 1;
      font-weight: 700;

      @media screen and (max-width: 500px) {
        font-size: 16px;
        line-height: 18px;
      }
    }
  }
`;
