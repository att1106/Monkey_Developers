import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { examplesData } from "../../constants/examplesData";
import { IoRocketOutline } from "react-icons/io5";


import "./contentWrapper.styles.scss";

const query = graphql`
  {
    allFile(
      filter: { relativeDirectory: { regex: "/websites/" } }
      sort: { fields: name }
    ) {
      totalCount
      nodes {
        name
        childImageSharp {
          gatsbyImageData(layout: FIXED, placeholder: BLURRED)
        }
      }
    }
  }
`;

const ContentWrapper = () => {
  const data = useStaticQuery(query);
  const nodes = data.allFile.nodes;

  return (
    <section className="project-section" id="projekte">
      {/* {nodes.map((image, index) => {
        const { name } = image;
        const pathToImage = getImage(image);
        console.log("beispiel path", {pathToImage})
        return (
          <article key={index}>
            <p>{name}</p>
            <GatsbyImage image={pathToImage} />
          </article>
        );
      })} */}

      {examplesData.map((example, index) => {
        {
          /* console.log(nodes[index].name); */
        }
        const image = nodes[index];
        const pathToImage = getImage(image);
        {
          /* console.log({ pathToImage }); */
        }

        return (
          <article
            key={example.id}
            className="example"
            style={{ backgroundColor: example.bgColor }}
          >
            <div className="example-image-container">
              <GatsbyImage
                image={pathToImage}
                alt="example-image"
                className="example-image__image"
                objectFit="contain"
              />
            </div>
            <div className="example-text">
              <p className="example-text__title">{example.title}</p>
              <p className="example-text__description">
                {example.description} Statte {example.name} einen Besuch ab!
              </p>
            </div>
            <p className="example-url">
              <a href={example.url}>
                <IoRocketOutline />
              </a>
            </p>
          </article>
        );
      })}
    </section>
  );
};

export default ContentWrapper;
