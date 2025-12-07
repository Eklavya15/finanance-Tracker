import React from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import authApi from "../api/authApi";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (payload) => {
    const data = await authApi.login(payload);
    login(data);
    navigate("/");
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onSubmit={handleLogin} />
      <p>
        No account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
