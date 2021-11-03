import React from "react";
import style from "./section-5.module.css";

export default function Section5() {
  return (
    <div>
      <div className={style.title}>
        Contribution to the Environment and Society
      </div>
      <div className={style.description}>
        <p>
          Lorem Ipsum is not simply random <br /> It has roots in a piece of
          classical Latin literature from 45 BC, making it over 2000 years old.
        </p>
      </div>
      <div className={style.svgGroups}>
        <img src="/first.png" alt="" />
        <img src="/second.png" alt="" />
        <img src="/third.png" alt="" />
        <img src="/fourth.png" alt="" />
        <img src="/fifth.png" alt="" />
      </div>
      <div className={style.btn}>
        <button>Register Now</button>
      </div>
    </div>
  );
}
