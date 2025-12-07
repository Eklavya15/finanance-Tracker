import React, { useState } from "react";

const LoginForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={submit}>
      <div>
        <label>Email</label>
        <input name="email" value={form.email} onChange={change} />
      </div>
      <div>
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={change}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
