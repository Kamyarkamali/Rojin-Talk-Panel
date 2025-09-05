import { useState, useEffect } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  LineChartOutlined,
  MailOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({
  collapsed,
  activeMenu,
  setActiveMenu,
  isMobile,
  setDrawerVisible,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { key: "1", icon: <AppstoreOutlined />, label: "اپلیکیشن", path: "/app" },
    {
      key: "3",
      icon: <LineChartOutlined />,
      label: "جدول تستی2",
      path: "/customers",
    },
    {
      key: "4",
      icon: <LineChartOutlined />,
      label: "جدول تستی3",
      path: "/analytics",
    },
    { key: "11", icon: <MailOutlined />, label: "ایمیل", path: "/email" },
    {
      key: "12",
      icon: <CalendarOutlined />,
      label: "تقویم",
      path: "/calendar",
    },
  ];

  useEffect(() => {
    const currentItem = menuItems.find(
      (item) => item.path === location.pathname
    );
    if (currentItem) setActiveMenu(currentItem.key);
  }, [location.pathname]);

  const handleClick = (e) => {
    setActiveMenu(e.key);
    const selected = menuItems.find((item) => item.key === e.key);
    if (selected) {
      navigate(selected.path);
      if (isMobile && setDrawerVisible) setDrawerVisible(false);
    }
  };

  return (
    <div
      className={`fixed top-0 h-full right-0 flex flex-col bg-[#001529] text-white z-[100] ${
        collapsed && !isMobile ? "w-20" : "w-56"
      } transition-all duration-300`}
    >
      <div className="h-16 flex items-center justify-center border-b border-white/10 text-[#1890ff] font-bold text-xl">
        {collapsed && !isMobile ? "ک" : "کامیار"}
      </div>

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[activeMenu]}
        inlineCollapsed={collapsed && !isMobile}
        onClick={handleClick}
        items={menuItems}
        className="flex-1  bg-transparent border-none"
      />
    </div>
  );
};

export default Sidebar;
