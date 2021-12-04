import React from "react";
import { Link } from "gatsby";

import "./features.styles.scss";
import {featuresData} from "../../constants/featuresData";

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="features__container">
        {featuresData.map((feature) => {
          console.log(feature.iconLink);
          return (
            <div key={feature.id} className="feature">
              <feature.icon className="feature__icon" />
              <h2>{feature.header}</h2>
              <p>{feature.text}</p>
            </div>
          );
        })}
      </div>
      <button className="button btn-2">
        <Link to="/leistungen">Erfahre mehr</Link>
      </button>
    </section>
  );
};

export default Features;
