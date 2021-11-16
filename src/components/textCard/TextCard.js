import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import "./textCard.styles.scss";

 
const TextCard = ({
  img,
  imgTop = false,
  imgLeft = true,
  imgAlt = "leaves",
  titleAttribute = "title",
  title,
  subTitleAttribute,
  subTitle,
  negative = false,
  cardText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
}) => {
  return (
    <article className={`card-text${imgTop ? " top" : ""}‚`}>
      {img && (
        <div className={`card-text__img-container${imgLeft ? " left" : ""}`}>
          <GatsbyImage
            image={getImage(img)}
            alt={imgAlt}
            className={`card-text__img${imgLeft ? " left" : ""}`}
            objectFit="contain"
          />
        </div>
      )}
      <div className={`card-text__text-container${imgTop ? " top" : ""}`}>
        <h1 title={titleAttribute}>{title}</h1>
        {subTitle && <h2 title={subTitleAttribute}>{subTitle}</h2>}
        <div className="card-text__text">{cardText}</div>
      </div>
    </article>
  );
};

export default TextCard;
