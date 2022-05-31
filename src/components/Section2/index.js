import React from "react";
import styles from "./Section2.module.scss";
import clsx from "clsx";

const Section2 = () => {
  return (
    <div className={clsx(styles.Section2_container)}>
      <div className={clsx(styles.Section2_content)}>
        <h3>Featured destinations</h3>
        <button className="btn btn-noborder">View all</button>
      </div>
      <div className={clsx(styles.Section2_imgs)}>
        <div style={{backgroundImage:"url(./img/img_3.png)",width:230,height:337,backgroundRepeat:"no-repeat"}}/>
        <div style={{backgroundImage:"url(./img/img_4.png)",width:230,height:337,backgroundRepeat:"no-repeat"}}/>
        <div style={{backgroundImage:"url(./img/img_5.png)",width:230,height:337,backgroundRepeat:"no-repeat"}}/>
        <div style={{backgroundImage:"url(./img/img_6.png)",width:230,height:337,backgroundRepeat:"no-repeat"}}/>
      </div>
    </div>
  );
};

export default Section2;
