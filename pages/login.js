import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { httpPost } from "../api";
import { notifyError, notifySuccess } from "../components/NotifyButton";
import { setAccessToken } from "../components/Login/login.helpers";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const router = useRouter();
  const { qrcode } = router.query;

  useEffect(() => {
    // cookies.set('access_token', 'test')
    // setTimeout(() => {
    //     router.push(`/?qrcode=${qrcode || ''}`)
    // }, 1000)
  }, []);

  const handleLoginForm = (e) => {
    e.preventDefault();
    httpPost({
      url: `/api/login`,
      data: formData,
    }).then((response) => {
      const { success, token, user } = response.data || {};
      if (!success) {
        notifyError("Неверные данные");
      } else if (success) {
        setAccessToken(token);
        localStorage.setItem("kitchenUser", user?.username || "");
        notifySuccess("Успешно авторизован!", 1000);
        setTimeout(() => {
          router.push(`/?qrcode=${qrcode || ""}`);
        }, 1000);
      }
    });
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="login-wrapper">
      <form className="login-box" onSubmit={handleLoginForm}>
        <h1>Авторизация</h1>
        <input
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Номер телефона"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Пароль"
          required
        />
        <input type="submit" name="" value="Войти" />
      </form>
    </div>
  );
}
