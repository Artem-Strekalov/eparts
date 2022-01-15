import React from "react";
import "./Auth.scss";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const Auth = () => {
  const MyInput = styled(TextField)({
    width: "333px",
    background: "white",
    borderRadius: "10px",
    "& .MuiOutlinedInput-input": {
      color: "#222",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "white",
        borderRadius: "10px",
      },
    },
  });

  return (
    <div className="content">
      <div className="content__header">
        <img src={process.env.PUBLIC_URL + "/image/svg/logo.svg"} />
      </div>
      <div className="content__main">
        <form>
          <h2>Авторизация на Eparts</h2>
          <div className="content__input">
            <p>Введите e-mail</p>
            <MyInput size="small" placeholder="e-mail" focused id="custom-css-outlined-input" />
          </div>
          <div className="content__input">
            <p>Введите пароль</p>
            <MyInput size="small" placeholder="пароль" focused id="custom-css-outlined-input" />
          </div>
          <button className="content__form-btn">Войти</button>
          <div className="content__form-footer">
            <p className="content__link-reg">Зарегистрироваться</p>
            <p>Забыли пароль?</p>
          </div>
        </form>
        <img className="content__main-img" src={process.env.PUBLIC_URL + "/image/png/tractor.png"} />
      </div>
    </div>
  );
};
export default Auth;
