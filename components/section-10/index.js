import React from "react";
import style from "./section-10.module.css";
import UrbanicFarm from "../icons/urbanicFarm";
import Support from "../icons/section-10/Support";

export default function Section10() {
  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.logo}>
          <UrbanicFarm />
        </div>
        <div className={style.links}>
          <div style={{ width: "20%" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className={style.firstlinks}>
            <div>About Us</div>
            <div>Contacts</div>
            <div>Services</div>
          </div>
          <div className={style.firstlinks}>
            <div>How it works</div>
            <div>Faq</div>
          </div>
          <div className={style.firstlinks}>
            <div>Login</div>
            <div>Register</div>
          </div>
          <div>
            <div style={{ cursor: "pointer" }}>
              <Support />
            </div>
            <div className={style.socialMedia}>
              <p>Follow Us</p>
              <div>
                <img src="/facebook.svg" alt="" />
              </div>
              <div>
                <img src="/instagram.svg" alt="" />
              </div>
              <div>
                <img src="/twitter.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.url}>
        <p>www.urbanicfarm.com - All Rights Reserved</p>
      </div>
    </>
  );
}
