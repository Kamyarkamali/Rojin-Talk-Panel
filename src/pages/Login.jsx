import { useState } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import toast, { Toaster } from "react-hot-toast";
import images from "/images/png.jpg";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorFields, setErrorFields] = useState({
    username: false,
    password: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasError = !username.trim() || !password.trim();
    setErrorFields({
      username: !username.trim(),
      password: !password.trim(),
    });

    if (hasError) {
      toast.error("لطفاً نام کاربری و رمز عبور را وارد کنید", {
        style: { background: "#FFA500", color: "#fff" },
      });
      return;
    }

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success(`خوش آمدید، ${username}!`, {
        style: { background: "#FFA500", color: "#fff" },
      });
    } catch {
      toast.error("ورود انجام نشد، دوباره تلاش کنید", {
        style: { background: "#FFA500", color: "#fff" },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
        {/* فرم سمت راست */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-8 text-center sm:text-right border-b-2 border-green-600 pb-2">
            روژین تاک
          </h1>

          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            {/* نام کاربری */}
            <div>
              <label className="block mb-1 text-gray-800 font-medium text-sm sm:text-base">
                نام کاربری
              </label>
              <div
                className={`flex items-center rounded-md p-2 border ${
                  errorFields.username
                    ? "border-orange-500"
                    : "border-gray-400 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-300"
                }`}
              >
                <input
                  type="text"
                  placeholder="نام کاربری"
                  className="w-full text-right outline-none px-2 py-2 sm:px-3 sm:py-2 text-sm sm:text-base bg-[#FFFFFF]"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <UserOutlined className="text-gray-600 ml-2 text-sm sm:text-base" />
              </div>
            </div>

            {/* رمز عبور */}
            <div>
              <label className="block mb-1 text-gray-800 font-medium text-sm sm:text-base">
                رمز عبور
              </label>
              <div
                className={`flex items-center rounded-md p-2 border ${
                  errorFields.password
                    ? "border-orange-500"
                    : "border-gray-400 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-300"
                }`}
              >
                <input
                  type="password"
                  placeholder="رمز عبور"
                  className="w-full text-right outline-none px-2 py-2 sm:px-3 sm:py-2 text-sm sm:text-base bg-[#FFFFFF]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <LockOutlined className="text-gray-600 ml-2 text-sm sm:text-base" />
              </div>
            </div>

            {/* دکمه ورود */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white text-base sm:text-lg font-medium py-2.5 sm:py-3 rounded-md shadow-md flex justify-center items-center gap-2"
              disabled={loading}
            >
              ورود
              {loading && (
                <svg
                  className="w-5 h-5 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              )}
            </button>
          </form>
        </div>

        {/* عکس سمت چپ */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${images})`, minHeight: "400px" }}
        ></div>
      </div>
    </div>
  );
}

export default Login;
