import React from "react";
import styles from "./Section3.module.scss";
import clsx from "clsx";

const Section3 = () => {
  return (
    <div className={clsx(styles.Section3_container)}>
      <div>
        <img src="./img/img_7.png" width={470} height="auto" alt="" />
      </div>
      <div className={clsx(styles.Section3_content)}>

        <h1>Guides by Thousand Sunny</h1>

        <p>
          Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip.
        </p>

        <button className="mt15 btn btn-primary">Download</button>
      </div>
    </div>
  );
};

export default Section3;
