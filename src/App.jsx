import React, { useEffect, useState } from "react";
import { ColorMessage } from "./components/ColorMessage";

export const App = () => {
  console.log("最初");
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchFaseFlg = () => {
    setFaseFlg(!faseFlg);
  };

  const [num, setNum] = useState(0);
  const [faseFlg, setFaseFlg] = useState(true);

  useEffect(() => {
    if (num % 3 === 0) {
      faseFlg || setFaseFlg(!faseFlg);
    } else {
      faseFlg && setFaseFlg(!faseFlg);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは、React!</h1>
      <p>GW中にマスター！</p>
      <ColorMessage color="blue">お元気ですか？</ColorMessage>
      <ColorMessage color="pink">元気です！</ColorMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchFaseFlg}>On/Off</button>
      <p>{num}</p>
      {/* <p>{faseFlg ? "ლ(╹◡╹ლ)" : ""}</p> */}
      <p>{faseFlg && "ლ(╹◡╹ლ)"}</p>
    </>
  );
};
