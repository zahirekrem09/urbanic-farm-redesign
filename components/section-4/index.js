import React from "react";
import style from "./section-4.module.css";

export default function Section4() {
  return (
    <div className={style.mainContainer}>
      <div className={style.card}>
        <img className={style.img} src="/vegetables.png" alt="vegetables" />
        <div className={style.cardInside}>
          <p className={style.sell}>Sell Your Products</p>
          <p className={style.extra}>
            Have extra produce,
            <br />
            sell/share/trade with UrbanicFarm
          </p>
          <div className={style.buttonGroup}>
            <button>SELL</button>
            <button>SHARE</button>
            <button>TRADE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
