import React from "react";
import { useNavigate, Link } from "react-router-dom";
import RegisterForm from "../components/auth/RegisterForm";
import authApi from "../api/authApi";
import useAuth from "../hooks/useAuth";

const RegisterPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (payload) => {
    const data = await authApi.register(payload);
    login(data);
    navigate("/");
  };

  return (
    <div>
      <h2>Register</h2>
      <RegisterForm onSubmit={handleRegister} />
      <p>
        Already have account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
