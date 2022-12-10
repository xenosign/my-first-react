import React, { useEffect, useState } from "react";
import ProfileComponent from "./ProfileComponent";
// 기존 코드

export default function UseEffectFetch() {
  const [dataArr, setDataArr] = useState([]);

  async function fetchData() {
    const resFetch = await fetch("http://localhost:4000/", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await resFetch.json();
    setDataArr(data);
    console.log(dataArr);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {dataArr.map((el) => {
        return (
          <ProfileComponent
            key={el.name}
            name={el.name}
            age={el.age}
            nickName={el.nickName}
          />
        );
      })}
    </>
  );
}
