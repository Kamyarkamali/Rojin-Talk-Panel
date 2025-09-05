import { useState } from "react";
import { Spin } from "antd";

const AppWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255,255,255,0.7)",
            zIndex: 9999,
          }}
        >
          <Spin size="large" tip="در حال بارگذاری..." />
        </div>
      )}
      {children({ showLoading, hideLoading })}
    </div>
  );
};

export default AppWrapper;
