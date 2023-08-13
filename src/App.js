import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import { Layout, Menu, Divider, Space, Button, theme } from "antd";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./components/Home";
import Form from "./components/Home/Form";
import Dashboard from "./components/assets/dashboard.png";
import Assessment from "./components/assets/note_alt.png";
import Quiz from "./components/assets/quiz.png";
import ham from "./components/assets/ham.png";
import cut from "./components/assets/cut.png";
import roundStatus from "./components/assets/quiz.png";

const MenuComponent = () => {
  return (
    <Menu className="MenuItem" defaultSelectedKeys={["1"]} mode="vertical">
      <Menu.Item
        key="1"
        icon={<img src={Dashboard} className="imgMenu" alt="Dashboard" />}
      >
        <Link to="/" className="textMenu">
          Dashboard
        </Link>
      </Menu.Item>
      <Menu.Item
        key="2"
        icon={<img src={Assessment} className="imgMenu" alt="Assessment" />}
      >
        <Link to="/" className="textMenu">
          Assessment
        </Link>
      </Menu.Item>
      <Menu.Item
        key="3"
        icon={<img src={Quiz} className="imgMenu" alt="Quiz" />}
      >
        <Link to="/form" className="textMenu">
          My Library
        </Link>
      </Menu.Item>
      <div
        className="adminSider"
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          border: "1px solid #D63500",
          borderRadius: "50px",
          marginTop: "40px",
        }}
      >
        <p style={{ color: "#D63500", fontSize: "12px" }}>Admin</p>
      </div>
      <Menu.Item
        key="4"
        icon={
          <img
            src={roundStatus}
            style={{ height: "fit-content", alignSelf: "center" }}
            alt="Status"
          />
        }
      >
        <Link to="/" className="textMenu">
          Round Status
        </Link>
      </Menu.Item>
    </Menu>
  );
};

function App() {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(true);
  const [collapsedwidth, setCollapsedWidth] = useState(
    window.innerWidth >= 768 ? 140 : 0
  );

  const openCollapsed = () => {
    setCollapsed(false);
  };

  const closeCollapsed = () => {
    setCollapsed(true);
  };

  return (
    <Router>
      <div className="App">
        <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
          <Layout>
            <Sider
              style={{ background: "white", padding: "16px 20px 20px 30px" }}
              trigger={null}
              collapsible={window.innerWidth >= 768 ? false : true}
              width={window.innerWidth >= 768 ? collapsedwidth : "100%"}
              collapsed={window.innerWidth > 768 ? false : collapsed}
              breakpoint="lg"
              collapsedWidth={0}
            >
              {window.innerWidth < 768 && (
                <div className="cuttrigger" onClick={closeCollapsed}>
                  <div className="cutMenu">Menu</div>
                  <img src={cut} className="imgMenu" alt="ham" />
                </div>
              )}
              <MenuComponent />
            </Sider>
            {/* {window.innerWidth < 768 && ( */}
            <div className="trigger" onClick={openCollapsed}>
              <img src={ham} className="imgMenu" alt="ham" />
            </div>
            {/* )} */}
            <Layout style={{ background: "white" }}>
              <Content style={{}}>
                <Routes>
                  <Route path="/" element={<Navigate to="/home" />} />
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/form" element={<Form />} />
                </Routes>
              </Content>
            </Layout>
          </Layout>
        </Space>
      </div>
    </Router>
  );
}

export default App;
