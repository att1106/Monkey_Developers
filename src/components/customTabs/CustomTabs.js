import React, { useState } from "react";
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
      <div className="tabs-btn-container">
        {CustomTabsData.map((tab, index) => {
          return (
            <div
              key={index}
              className={index === value ? "tabs-btn active-btn" : "tabs-btn"}
              onClick={() => setValue(index)}
            >
              <tab.image className="tabs-icon" />
              <h5>{tab.title}</h5>
            </div>
          );
        })}
      </div>

      <article className="tab-text-container">
        <h3>{header}</h3>
        {infos.map((item, index) => {
          return (
            <div key={index} className="tab-text">
              <FaAngleDoubleRight className="tab-text-bullet" />
              <p>{item.description}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default CustomTabs;
