import React, { useState } from "react";

const RegisterForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={submit}>
      <div>
        <label>Name</label>
        <input name="name" value={form.name} onChange={change} />
      </div>
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
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
