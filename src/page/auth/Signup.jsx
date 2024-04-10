import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, TextField } from "@mui/material";
import style from "./Auth.module.css";

const Signup = ({ togglePannel }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    role: "",
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
      <h1 className={`text-lg font-bold text-center pb-8`}>Register</h1>
      <form onSubmit={handleSubmit} className={`space-y-3`}>
        <TextField
          fullWidth
          label="fullName"
          name="fullName"
          placeholder="Enter your fullName"
          value={formData.fullName}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        ></TextField>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.role}
            label="Role"
            name="role"
            onChange={handleChange}
          >
            <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
            <MenuItem value={"USER"}>USER</MenuItem>
          </Select>
        </FormControl>
        <div>
          <Button
            fullWidth
            sx={{ padding: "0.9rem" }}
            className={style.customButton}
            type="submit"
          >
            Register
          </Button>
        </div>
      </form>
      <div className={`flex items-center gap-2 justify-center`}>
        <span>Already have an account?</span>
        <Button onClick={togglePannel}>Login</Button>
      </div>
    </div>
  );
};

export default Signup;
