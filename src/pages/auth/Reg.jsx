import React, { useState } from "react";
import "./Auth.scss";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Einput from "../../ui/Einput";

const Reg = () => {
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
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [password, setPassword] = useState("");
  let [test, setTest] = useState("");
  function heandlInput(name) {
    setTest(name);
  }
  return (
    <div className="content">
      <div className="content__header">
        <img src={process.env.PUBLIC_URL + "/image/svg/logo.svg"} />
      </div>
      <div className="content__main">
        <form>
          <h2>Регистрация на Eparts</h2> {test}
          <Einput onChange={heandlInput}></Einput>
          <button className="content__form-btn">Зарегистрироваться</button>
          <div className="content__form-footer">
            <p className="content__link-reg">У меня уже есть аккаунт</p>
          </div>
        </form>
        <img
          className="content__main-img"
          src={process.env.PUBLIC_URL + "/image/png/tractor.png"}
        />
      </div>
    </div>
  );
};
export default Reg;
