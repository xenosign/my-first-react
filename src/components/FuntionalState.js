import React, { useState } from "react";
function FuntionalState() {
  const [message, setMessage] = useState("");
  const func = () => {};

  return (
    <div>
      <button onClick={func()}>입장</button>
      <h1>{message}</h1>
    </div>
  );
}
export default FuntionalState;
