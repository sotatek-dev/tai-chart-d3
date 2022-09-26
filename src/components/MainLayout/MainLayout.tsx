import { ReactElement, useMemo } from "react";
import { Layout, Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import routes from "../../routes";
import "./MainLayout.scss";

const { Header, Content, Footer, Sider } = Layout;

interface ItemType {
  label: string;
  key: string;
  icon?: ReactElement;
}

interface MenuItem extends ItemType {
  children?: ItemType[];
}

function getItem(label: string, key: string, icon?: ReactElement, children?: MenuItem[]): MenuItem {
  return { label, key, icon, children } as MenuItem;
}

const items = [getItem("Dashboard", "/dashboard", <HomeOutlined />)];

export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedItem = useMemo(() => {
    const pathname = location.pathname;
    return items.filter((_, index) => index !== 0).find((i) => pathname.startsWith(i.key)) || items[0];
  }, [location]);

  return (
    <Layout className={"MainLayout"}>
      <Sider breakpoint="lg" collapsible collapsedWidth="80">
        <div className={"text-center"}>logo</div>
        <Menu
          theme="dark"
          selectedKeys={[selectedItem.key]}
          onSelect={(e) => navigate(e.key)}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className={"innerLayout ps-4 pe-4 "}>
        <Header className={"d-flex ps-0 pe-0 align-items-center"}>
          <h1 className={"flex-grow-1"}>{selectedItem.label}</h1>
        </Header>
        <Content>{routes}</Content>
        <Footer />
      </Layout>
    </Layout>
  );
}
