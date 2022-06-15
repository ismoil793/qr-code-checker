import React, { useEffect } from "react";
// import { useRouter } from "next/router";
// import Cookies from 'universal-cookie';
import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  // const router = useRouter()
  // const cookies = new Cookies()
  // const { qrcode } = router.query

  useEffect(() => {
    // cookies.set('access_token', 'test')
    // setTimeout(() => {
    //     router.push(`/?qrcode=${qrcode || ''}`)
    // }, 1000)
  }, []);

  const handleLoginForm = (e) => {
    e.preventDefault();
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
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Имя пользователя"
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
