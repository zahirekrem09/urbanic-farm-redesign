import React from "react";
import style from "./section-7.module.css";

export default function Section7() {
  return (
    <div className={style.mainContainer}>
      <div className={style.board}>
        <div className={style.img} />
        <div className={style.right}>
          <p
            style={{
              color: "#6EC558",
              fontSize: "24px",
              fontWeight: "bold",
              padding: "15px 0",
            }}
          >
            Reduce waste, strengthen your community
          </p>
          <p
            style={{
              color: "#3D435A",
              fontSize: "12px",
              padding: "15px 0",
              fontWeight: "medium",
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
