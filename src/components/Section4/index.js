import React from "react";
import styles from "./Section4.module.scss";
import clsx from "clsx";

const Section4 = () => {
  return (
    <div className={clsx(styles.Section4_container)}>
      <div>
        <img src="./img/img_8.png" width={300} height="auto" alt="" />
      </div>
      <div className={clsx(styles.Section4_content)}>
        <h3>Testimonials</h3>
        <img src="./img/star.png" alt=""  />
        <p>
          “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus
          ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis
          nec”
        </p>
        <span>Edward Newgate</span>
        <p>Founder Circle</p>
      </div>
    </div>
  );
};

export default Section4;
