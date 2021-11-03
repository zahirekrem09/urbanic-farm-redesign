import React from "react";
import style from "./section-3.module.css";
import FirstSVG from "../icons/section-3/first";
import SecondSVG from "../icons/section-3/second";
import ThirdSVG from "../icons/section-3/third";

export default function Section3() {
  return (
    <div className={style.mainContainer}>
      <div className={style.title}>Find Fresh Food</div>
      <div className={style.svgGroup}>
        <div className={style.svg}>
          <FirstSVG />
          <p>Eat local fresh food</p>
        </div>
        <div className={style.svg}>
          <SecondSVG />
          <p
            style={{
              width: "450px",
              paddingTop: "25px",
              textAlign: "center",
              paddingBottom: "40px",
            }}
          >
            Get your weekly grocery directly <br /> from producers delivered to
            your door
          </p>
          <button className={style.register}>Register now</button>
        </div>
        <div className={style.svg}>
          <ThirdSVG />
          <p>Reach to organic food</p>
        </div>
      </div>
    </div>
  );
}
