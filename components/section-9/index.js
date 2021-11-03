import React from "react";
import style from "./section-9.module.css";
import Wefunder from "../icons/section-9/wefunder";
import Higher from "../icons/section-9/icon-higher";

export default function Section9() {
  return (
    <div className={style.mainContainer}>
      <div className={style.left}>
        <h2>Invest in UrbanicFarm</h2>
        <p>
          Why to invest ? See <Wefunder /> campaign
        </p>
        <ListItems
          text="Decrease use of chemicals in food
(pesticide, herbicide)"
        />
        <ListItems text="Provide fresh&organic food to people" />
        <ListItems
          text="Contribute to the health of the society by letting them
eat local fresh food"
        />
        <ListItems
          text="Reinstate the loose connections of the community to
create a better society"
        />
        <ListItems
          text="Fight against hunger by creating a local food network
"
        />
      </div>
      <div className={style.rightImage}>
        <button className={style.gofunderButton}>GO WEFUNDER</button>
      </div>
    </div>
  );
}

const ListItems = ({ text }) => {
  return (
    <div className={style.listItems}>
      <p
        style={{
          padding: "5px 8px",
          border: "1px solid #D8E8DE",
          borderRadius: "100%",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <Higher />
      </p>
      <p
        style={{ paddingLeft: "20px", fontWeight: "lighter", fontSize: "18px" }}
      >
        {text}
      </p>
    </div>
  );
};
