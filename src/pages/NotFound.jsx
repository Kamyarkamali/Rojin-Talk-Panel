import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "16px",
        textAlign: "center",
        background: "linear-gradient(135deg, #e6f7ff, #ffffff)",
        animation: "fadeIn 0.8s ease-in-out",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(60px, 15vw, 120px)",
          color: "#1890ff",
          fontWeight: "bold",
          margin: 0,
          animation: "bounce 1.2s infinite",
        }}
      >
        404
      </h1>
      <h2 style={{ fontSize: "clamp(18px, 3vw, 28px)", margin: "16px 0 8px" }}>
        صفحه مورد نظر یافت نشد!
      </h2>
      <p
        style={{
          fontSize: "clamp(14px, 2vw, 18px)",
          color: "#595959",
          marginBottom: 24,
        }}
      >
        ممکن است مسیر اشتباه وارد شده باشد یا صفحه حذف شده باشد.
      </p>
      <Button
        type="primary"
        size="large"
        onClick={() => navigate("/dashboard")}
        style={{ minWidth: 160 }}
      >
        بازگشت به داشبورد
      </Button>

      {/* استایل‌های انیمیشن */}
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default NotFound;
