import React from "react";
import styles from "./Header.module.scss";
import clsx from "clsx";

const Header = () => {
  return (
    <div className={clsx(styles.header_container)}>
      <div>
        <img src={"./img/logo.png"} alt="" className={clsx(styles.logo_img)} />
      </div>
      <div className={clsx(styles.header_list_nav,'text')}>
        <ul className={clsx(styles.header_nav)}>
          <li className={clsx(styles.header_nav__item,'text_active')}>Home</li>
          <li className={clsx(styles.header_nav__item)}>Destinations</li>
          <li className={clsx(styles.header_nav__item)}>About</li>
          <li className={clsx(styles.header_nav__item)}>Partner</li>
        </ul>
        <div className={clsx(styles.header_button)}>
          <button className="btn btn-secondary">Login</button>
          <button className="btn btn-primary">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
