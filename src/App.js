import { useState } from "react";
import "./App.css";
import BtnToNaver from "./components/BtnToNaver";
import ChangeObj from "./components/ChangeObj";
import ClassState from "./components/ClassState";
import Comparing from "./components/Comparing";
import Counter from "./components/Counter";
import FuntionalState from "./components/FuntionalState";
import ImgComponent from "./components/ImgComponent";
import MainHeader from "./components/MainHeader";

function App() {
  const pororoObjArr = [
    {
      name: "뽀로로",
      age: "5",
      nickName: "사고뭉치",
    },
    {
      name: "루피",
      age: "4",
      nickName: "공주님",
    },
    {
      name: "크롱이",
      age: "5",
      nickName: "장난꾸러기",
    },
  ];
  return (
    <div className="App">
      <ChangeObj objArr={pororoObjArr} />
    </div>
  );
}
export default App;
