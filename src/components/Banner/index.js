import React from "react";
import styles from "./Banner.module.scss";
import clsx from "clsx";

const Banner = () => {
  return (
    <div className={clsx(styles.banner_container)}>
      <div className={clsx(styles.banner_content)}>
        <h1>Explore and <br/> Travel</h1>
        <div>
          <h3 className="mt55">Holiday finder</h3>
          <div style={{width:32,height:1,backgroundColor:'#202336',borderRadius:4}}></div>
          <div className={clsx(styles.banner_combobox,'mt47')}>
            <div className="combobox">
              <span>Location <img src="./img/down.png" className="editfont" alt="DropDown" /> </span>
            </div>
            <div className="combobox">
              <span>Location <img src="./img/down.png" className="editfont" alt="DropDown" /> </span>
            </div>
            <div className="combobox">
              <span>Location <img src="./img/down.png" className="editfont" alt="DropDown" /> </span>
            </div>
            <div className="combobox">
              <span>Location <img src="./img/down.png" className="editfont" alt="DropDown" /> </span>
            </div>
          </div>
          <button className="mt47 btn btn-primary">Explore</button>
        </div>
      </div>
      <div>
        <img src="./img/img_1.png" width={470} height={447} alt="" />
      </div>
    </div>
  );
};

export default Banner;
