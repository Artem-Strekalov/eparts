import React from "react";
import "./Auth.scss";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";

const Auth = () => {
  const MyInput = styled(TextField)({
    width: "300px",
    marginBottom: "25px",

    "& .MuiOutlinedInput-input": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  });
  return (
    <div className="content">
      <div className="content__header">
        <img src={process.env.PUBLIC_URL + "/image/svg/logo.svg"} />
      </div>
      <div className="content__main">
        <form className="content__main-form">
          <h2>Авторизация</h2>
          <MyInput
            placeholder="e-mail"
            label="Введите e-mail"
            focused
            id="custom-css-outlined-input"
            margin="normal"
          />
          <MyInput
            placeholder="пароль"
            label="Введите пароль"
            focused
            id="custom-css-outlined-input"
          />
        </form>
        <div className="content__main-img"></div>
      </div>
    </div>
  );
};
export default Auth;
