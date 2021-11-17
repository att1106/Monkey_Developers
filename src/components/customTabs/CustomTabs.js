import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FaAngleDoubleRight } from "react-icons/fa";

import { CustomTabsData } from "../../constants/customTabsData";
import "./customTabs.styles.scss";

const CustomTabs = () => {
  const [value, setValue] = useState(1);
  const { imageURL, header, infos } = CustomTabsData[value];
  console.log("button", value);
  console.log("button", { imageURL });

  return (
    <section>
      {/* <div className="tabs-image-container">
        <img src={imageURL} alt="image"/>
      </div> */}

      <div className="tabs-btn-container">
        {CustomTabsData.map((button, index) => {
          return (
            <button
              key={index}
              className={index === value ? "tabs-btn active-btn" : "tabs-btn"}
              onClick={() => setValue(index)}
            >
              {button.title}
            </button>
          );
        })}
      </div>

      <article>
        <h3>{header}</h3>
        {infos.map((item, index) => {
          return (
            <span key={index}>
              <FaAngleDoubleRight/>
              <p>{item.description}</p>
            </span>
          );
        })}
      </article>

      {/* {CustomTabsData.map((tab, index) => {
        return (
          <article key={index}>
            <h2>{tab.header}</h2>

            {tab.infos.map((item, index) => {
              return (
                <span key={index}>
                  <FaAngleDoubleRight />
                  <p>{item.description}</p>
                </span>
              );
            })}
          </article>
        );
      })} */}
    </section>
  );
};

export default CustomTabs;
