import React from "react";
import styles from "./Footer.module.scss";
import clsx from "clsx";

const Footer = () => {
  return (
    <div className={clsx(styles.Footer_container)}>
      <div className={clsx(styles.Footer_content)}>
        <div className={clsx(styles.Footer_info)}>
          <img src="./img/logo.png" alt="" />
          <p>
            Plan and book your perfect trip with expert advice, travel tips
            destination information from us
          </p>
          <span>©2020 Thousand Sunny. All rights reserved</span>
        </div>

        <div className={clsx(styles.Footer_Destinations)}>
            <h4>Destinations</h4>
            <ul>
                <li>Africa</li>
                <li>Antarctica</li>
                <li>Asia</li>
                <li>Europe</li>
                <li>America</li>
            </ul>
        </div>

        <div className={clsx(styles.Footer_Shop)}>
            <h4>Shop</h4>
            <ul>
                <li>Destination Guides</li>
                <li>Pictorial & Gifts</li>
                <li>Special Offers</li>
                <li>Delivery Times</li>
                <li>FAQs</li>
            </ul>
        </div>

        <div className={clsx(styles.Footer_Interests)}>
            <h4>Interests</h4>
            <ul>
                <li>Adventure Travel</li>
                <li>Art And Culture</li>
                <li>Wildlife And Nature</li>
                <li>Wildlife And Nature</li>
                <li>Food And Drink</li>
            </ul>
        </div>
      </div>

      <div className={clsx(styles.Footer_media)}>
          <img src="./img/social_media.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
