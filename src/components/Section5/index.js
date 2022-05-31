import React from "react";
import styles from "./Section5.module.scss";
import clsx from "clsx";

const Section5 = () => {
  return (
    <div className={clsx(styles.Section5_container)}>
      <div className={clsx(styles.Section5_content)}>
        <h3>Featured destinations</h3>
        <button className="btn btn-noborder">View all</button>
      </div>
      <div className={clsx(styles.Section5_imgs)}>
        <div
          className="pos_relative"
          style={{
            backgroundImage: "url(./img/img_9.png)",
            width: 230,
            height: 200,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <h5>The many benefits of taking a healing holiday</h5>
            <p>
              ‘Helaing holidays’ are on the rise to help maximise your health
              and happines...
            </p>
            <button className="btn btn-noborder">Read more</button>
          </div>
        </div>
        
        <div
          className="pos_relative"
          style={{
            backgroundImage: "url(./img/img_10.png)",
            width: 230,
            height: 200,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <h5>The many benefits of taking a healing holiday</h5>
            <p>
              ‘Helaing holidays’ are on the rise to help maximise your health
              and happines...
            </p>
            <button className="btn btn-noborder">Read more</button>
          </div>
        </div>

        <div
          className="pos_relative"
          style={{
            backgroundImage: "url(./img/img_11.png)",
            width: 230,
            height: 200,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <h5>The many benefits of taking a healing holiday</h5>
            <p>
              ‘Helaing holidays’ are on the rise to help maximise your health
              and happines...
            </p>
            <button className="btn btn-noborder">Read more</button>
          </div>
        </div>

        <div
          className="pos_relative"
          style={{
            backgroundImage: "url(./img/img_12.png)",
            width: 230,
            height: 200,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <h5>The many benefits of taking a healing holiday</h5>
            <p>
              ‘Helaing holidays’ are on the rise to help maximise your health
              and happines...
            </p>
            <button className="btn btn-noborder">Read more</button>
          </div>
        </div>
          
      </div>
      <div></div>
    </div>
  );
};

export default Section5;
