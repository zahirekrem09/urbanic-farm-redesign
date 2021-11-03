import React from "react";
import style from "./section-8.module.css";
import Heart from "../icons/section-8/Heart";

export default function Section8() {
  return (
    <div>
      <div className={style.testimonials}>
        <p>Testimonials</p>
      </div>
      <div className={style.card}>
        <div className={style.icon}>{"<"}</div>
        <div>
          <CommentComponent />
        </div>
        <div className={style.icon}>{">"}</div>
      </div>
    </div>
  );
}

const CommentComponent = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.avatar} />
      <div>
        <div className={style.testimonialsHeader}>
          <div style={{ display: "flex", padding: "0" }}>
            <p style={{ padding: "5px" }}>Murat Yalçın</p>
            <p style={{ padding: "5px", fontWeight: "300", color: "gray" }}>
              Country Club
            </p>
          </div>
          <p style={{ fontWeight: "bold", padding: "0", cursor: "pointer" }}>
            ...
          </p>
        </div>
        <div className={style.Maincontent}>
          <div className={style.content}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolor
            dolorem enim error excepturi exercitationem fuga labore magnam neque
            nostrum odit officiis omnis perspiciatis quasi qui, rem suscipit
            tempora voluptatem.
          </div>
          <div className={style.footer}>
            <div className={style.footer}>
              <p style={{ fontWeight: "200", color: "gray" }}>7 June</p>
              <p
                style={{
                  fontWeight: "bold",
                  color: "red",
                  textDecoration: "underline",
                }}
              >
                like
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  color: "turquoise",
                }}
              >
                reply
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  color: "turquoise",
                }}
              >
                share
              </p>
            </div>
            <div className={style.heart}>
              <Heart />
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
