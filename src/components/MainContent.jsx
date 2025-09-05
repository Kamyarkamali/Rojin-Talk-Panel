// MainContent.js
import React, { useEffect, useState } from "react";
import { Card } from "antd";
import NotFound from "../pages/NotFound";

const MainContent = ({ activeMenu, collapsed, isMobile }) => {
  const [marginRight, setMarginRight] = useState(220);

  useEffect(() => {
    if (isMobile) {
      setMarginRight(0); // موبایل: محتوا پشت Drawer نیست
    } else {
      setMarginRight(collapsed ? 90 : 30); // دسکتاپ: فاصله از سایدبار
    }
  }, [collapsed, isMobile]);

  const renderContent = () => {
    switch (activeMenu) {
      case "1":
        return <Card title="اپلیکیشن">محتوای اپلیکیشن</Card>;
      case "2":
        return <Card title="ارز دیجیتال">محتوای ارز دیجیتال</Card>;
      case "3":
        return <Card title="مدیریت مشتری">محتوای مدیریت مشتری</Card>;
      default:
        return (
          <Card>
            <NotFound />
          </Card>
        );
    }
  };

  return (
    <div
      className={`transition-all duration-300 p-4 md:p-6`}
      style={{
        marginRight: marginRight,
        marginLeft: 16,
        marginTop: 80, // فاصله از هدر
      }}
    >
      {renderContent()}
    </div>
  );
};

export default MainContent;
