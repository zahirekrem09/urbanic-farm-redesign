import React from "react";
import style from "./section-6.module.css";
import SVGComponent from "../icons/section-6/section-6-svg";
import JoinForFree from "../icons/section-6/join-for-free";
import SearchNearby from "../icons/section-6/search-nearby";
import GetInAnHour from "../icons/section-6/get-in-an-hour";

export default function Section6() {
  return (
    <div>
      <SVGComponent
        style={{
          display: "flex",
          margin: "0px",
          padding: "0",
          backgroundSize: "cover",
          width: "100%",
          height: "auto",
        }}
      />
      <div className={style.space}>
        <div className={style.title}>
          <p>How it works</p>
        </div>
        <div className={style.desc}>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
          <p>
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>
        <div className={style.svgGroups}>
          <GreyCircle
            icon={<JoinForFree />}
            title="Join For Free"
            des="Lorem Ipsum is simply dummy text
of the printing and typesetting industry."
          />
          <GreyCircle
            icon={<SearchNearby />}
            title="Join For Free"
            des="Lorem Ipsum is simply dummy text
of the printing and typesetting industry."
          />
          <GreyCircle
            icon={<GetInAnHour />}
            title="Join For Free"
            des="Lorem Ipsum is simply dummy text
of the printing and typesetting industry."
          />
        </div>
      </div>
    </div>
  );
}

const GreyCircle = ({ icon, title, des }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "100%",
          backgroundColor: "#EAEAEA",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>

      <p
        style={{
          fontSize: "16px",
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontSize: "12px",
          width: "300px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {des}
      </p>
    </div>
  );
};
