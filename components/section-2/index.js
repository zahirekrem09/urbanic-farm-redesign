import React from "react";
import style from "./section-2.module.css";
import LeftSVG from "../icons/section-2/Left";
import RightSVG from "../icons/section-2/Rigt";

export default function Section2() {
  return (
    <div className={style.mainContainer}>
      <div className={style.leftSvg}>
        <LeftSVG />
      </div>

      <MiddleComponent />

      <div className={style.rightSvg}>
        <img className={style.image} src="/right1.png" alt="" />
      </div>
    </div>
  );
}

const MiddleComponent = () => {
  return (
    <div className={style.middleCOntainer}>
      <div className={style.title}>Eat </div>
      <div className={style.title}>Local Fresh Food </div>
      <div className={style.contentText}>
        Are you worried about the <br /> chemicals applied in the farm &
        additives for long shelf life? Here is way to reach locally grown, fresh
        food.
      </div>
      <div>
        <button className={style.shopButton}>SHOP NOW</button>
      </div>
    </div>
  );
};
