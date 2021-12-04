import React from "react";
import { Link } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";

import "./hero.styles.scss";

const Hero = ({ image, imagePath, children }) => {
  // const imageLink = "../../images/freepik/Leistungen_webdev.png"
  // console.log("heroimage hier", `../../images/${image}`)
  return (
    <section className="hero">
      <div className="hero__container__image">
        <img src={image} alt="hero" className="hero__image"></img>

        {/*        
        <GatsbyImage
          image={`../../images/${image}`}
         
          alt="hero-image"
          placeholder="blurred"
          className="hero__image"
          objectFit="contain"
        /> */}
      </div>
      <div className="hero__container__content">{children}</div>
    </section>
  );
};

export default Hero;
