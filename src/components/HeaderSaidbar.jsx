import { Layout, Button, Avatar, Dropdown, Space } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";

const { Header: AntHeader } = Layout;

const Header = ({ collapsed, toggleSidebar, isMobile }) => {
  const userMenuItems = [
    { key: "1", label: "پروفایل" },
    { key: "2", label: "تنظیمات" },
    { key: "3", label: "خروج" },
  ];

  return (
    <AntHeader className="fixed top-0 left-0 right-0 z-[1001] h-16 flex items-center justify-between px-4 bg-white shadow">
      <Button
        type="text"
        icon={
          isMobile ? (
            <MenuUnfoldOutlined />
          ) : collapsed ? (
            <MenuUnfoldOutlined />
          ) : (
            <MenuFoldOutlined />
          )
        }
        onClick={toggleSidebar}
        className="flex items-center justify-center w-12 h-12 text-lg"
      />

      <Dropdown menu={{ items: userMenuItems }} trigger={["click"]}>
        <Space className="cursor-pointer items-center">
          <div className="text-right leading-tight">
            <div className="font-bold">کامیار کمالی</div>
            <div className="text-xs text-gray-500">مدیر سیستم</div>
          </div>
          <Avatar icon={<UserOutlined />} />
          <DownOutlined />
        </Space>
      </Dropdown>
    </AntHeader>
  );
};

export default Header;
