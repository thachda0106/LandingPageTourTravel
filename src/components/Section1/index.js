import React from "react";
import styles from "./Section1.module.scss";
import clsx from "clsx";

const Section1 = () => {
  return (
    <div className={clsx(styles.Section1_container)}>
      <div>
        <img src="./img/img_2.png" width={470} height="auto" alt="" />
      </div>
      <div className={clsx(styles.Section1_content)}>

        <h1>A new way to explore the world </h1>

        <p>
          For decades travellers have reached for Lonely Planet books when
          looking to plan and execute their perfect trip, but now, they can also
          let Lonely Planet Experiences lead the way
        </p>

        <button className="mt15 btn btn-primary">Explore</button>
      </div>
    </div>
  );
};

export default Section1;
