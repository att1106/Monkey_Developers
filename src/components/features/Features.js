import React from "react";
import { Link } from "gatsby";

import "./features.styles.scss";
import featuresData from "../../constants/featuresData";

const Features = () => {
  return (
    <section id="features" lassName="features-section">
      <div className="features">
        {featuresData.map((feature) => {
          return (
            <div key={feature.id} className="feature">
              <feature.icon className="feature-icon" />
              <h2>{feature.header}</h2>
              <p>{feature.text}</p>
            </div>
          );
        })}
      </div>
      <button className="button-2">
        <Link to="/leistungen">Erfahre mehr</Link>
      </button>
    </section>
  );
};

export default Features;
