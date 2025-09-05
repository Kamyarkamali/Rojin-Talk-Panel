import { useState, useEffect } from "react";
import { Layout, Spin, Drawer } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/HeaderSaidbar";
import Sidebar from "../components/Saidbar";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import MainContent from "../components/MainContent";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState("1");
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) setDrawerVisible(!drawerVisible);
    else setCollapsed(!collapsed);
  };

  const sidebarWidth = collapsed ? 80 : 220;

  return (
    <Spin
      spinning={loading}
      size="large"
      tip="در حال بارگذاری..."
      className="fixed top-0 left-0 w-screen h-screen z-[9999] flex justify-center items-center bg-white/60"
    >
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/*"
          element={
            <div className="min-h-screen flex flex-row-reverse">
              {/* سایدبار دسکتاپ */}
              {!isMobile && (
                <Sidebar
                  collapsed={collapsed}
                  activeMenu={activeMenu}
                  setActiveMenu={setActiveMenu}
                  style={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    height: "100vh",
                    width: sidebarWidth,
                    zIndex: 50,
                  }}
                />
              )}

              {/* Drawer موبایل */}
              {isMobile && (
                <Drawer
                  placement="right"
                  closable={false}
                  onClose={() => setDrawerVisible(false)}
                  visible={drawerVisible}
                  bodyStyle={{ padding: 0 }}
                  width={220}
                  className="pt-16"
                >
                  <Sidebar
                    collapsed={false}
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                    isMobile={true}
                    setDrawerVisible={setDrawerVisible}
                  />
                </Drawer>
              )}

              <div
                className="flex-1 flex flex-col transition-all duration-300"
                style={{
                  marginRight: !isMobile ? sidebarWidth : 0,
                  marginLeft: 0,
                }}
              >
                {/* هدر */}
                <Header
                  collapsed={collapsed}
                  toggleSidebar={toggleSidebar}
                  isMobile={isMobile}
                />

                {/* محتوا */}
                <Layout
                  style={{
                    marginTop: 64, // فاصله از هدر
                    flex: 1,
                  }}
                >
                  <div className="p-4 bg-gray-100 min-h-screen">
                    <Routes>
                      <Route
                        path="/app"
                        element={<MainContent activeMenu="1" />}
                      />
                      <Route
                        path="/crypto"
                        element={<MainContent activeMenu="2" />}
                      />
                      <Route
                        path="/customers"
                        element={<MainContent activeMenu="3" />}
                      />
                      <Route
                        path="/analytics"
                        element={<MainContent activeMenu="3" />}
                      />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </div>
                </Layout>
              </div>
            </div>
          }
        />
      </Routes>
    </Spin>
  );
}

export default App;
