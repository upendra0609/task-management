import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import style from "./Auth.module.css";

const Signin = ({ togglePannel }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1 className={`text-lg font-bold text-center pb-8`}>Login</h1>
      <form onSubmit={handleSubmit} className={`space-y-3`}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        ></TextField>
        <div>
          <Button
            fullWidth
            sx={{ padding: "0.9rem" }}
            className={style.customButton}
            type="submit"
          >
            Login
          </Button>
        </div>
      </form>
      <div className={`mt-5 flex items-center gap-2 py-5 justify-center`}>
        <span>don't have account?</span>
        <Button onClick={togglePannel}>Signup</Button>
      </div>
    </div>
  );
};

export default Signin;
