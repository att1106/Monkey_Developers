import React from "react";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { examplesData } from "../../constants/examplesData";
import {IoRocketOutline} from  "react-icons/io5"

import "./contentWrapper.styles.scss";

const ContentWrapper = () => {
  return (
    <div>
      {examplesData.map((example) => {
        return (
          <section
            key={example.id}
            className="website-example"
            style={{ backgroundColor: example.bgColor }}
          >
            <div className="example-image-container">
              <StaticImage
                src="../../images/pexels-photo-6072557.jpeg"
                alt="example-image"
                className="example-image"
                placeholder="blurred"
                objectFit="contain"
              />
            </div>

            {/* <GatsbyImage
              src={`../../images/${example.image}`}
              alt="example-image"
              //   placeholder="blurred"
              objectFit="contain"
            /> */}
            <div className="example-text-container">
            <p className="example-title">{example.title}</p>
            <p className="example-description">{example.description} Statte {example.name} einen Besuch ab!</p>
            

            </div>
            <p className="example-url"><a href={example.url}><IoRocketOutline/></a></p>
            
          </section>
        );
      })}
    </div>
  );
};

export default ContentWrapper;
