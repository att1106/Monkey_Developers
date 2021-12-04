import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

import { CustomTabsData } from "../../constants/customTabsData";
import "./customTabs.styles.scss";

const CustomTabs = () => {
  const [value, setValue] = useState(1);
  const { imageURL, header, title, infos } = CustomTabsData[value];

  return (
    <section>
      <div className="tabs__btn__container">
        {CustomTabsData.map((tab, index) => {
          return (
            <div
              key={index}
              className={
                index === value ? "tabs__btn active--btn" : "tabs__btn"
              }
              onClick={() => setValue(index)}
            >
              <tab.image className="tabs__icon" />
              <h5 className="tabs__title--desktop">{tab.title}</h5>
            </div>
          );
        })}
      </div>

      <article className="tab__text__container">
        <h3 className="tab__text__title--mobile">{title} - {header}</h3>
        <h3 className="tab__text__title--desktop">{header}</h3>
        <ul>
          {infos.map((item, index) => {
            return (
              <li key={index} className="tab__text">
                <span className="tab__text__bullet">
                  <FaAngleDoubleRight />
                </span>
                {item.description}
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};

export default CustomTabs;
