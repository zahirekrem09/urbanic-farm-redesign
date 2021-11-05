import React from "react";
import style from "./section-7.module.css";

export default function Section7() {
  return (
    <div className={style.mainContainer}>
      <div className={style.board}>
        <div className={style.img}>
          <img src="/img.png" alt="Reduce" />
        </div>
        <div className={style.right}>
          <p
            style={{
              color: "#6EC558",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            Reduce waste, strengthen your community
          </p>
          <p
            style={{
              color: "#3D435A",
              fontSize: "12px",

              fontWeight: "medium",
              lineHeight: "1.5",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <button className={style.btn1}>Whats Near You</button>
          <button className={style.btn2}>Post Your Goods</button>
        </div>
      </div>
    </div>
  );
}
