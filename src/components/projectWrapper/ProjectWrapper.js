import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { projectData } from "../../constants/projectData";
import { IoRocketOutline } from "react-icons/io5";


import "./projectWrapper.styles.scss";

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

const ProjectWrapper = () => {
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

      {projectData.map((project, index) => {
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
            key={project.id}
            className="project"
            style={{ backgroundColor: project.bgColor }}
          >
            <div className="project__image-container">
              <GatsbyImage
                image={pathToImage}
                alt="project-image"
                className="project__image-container__image"
                objectFit="contain"
              />
            </div>
            <div className="project__text-container">
              <p className="project__text-container__title">{project.title}</p>
              <p className="project__text-container__description">
                {project.description} Statte {project.name} einen Besuch ab!
              </p>
            </div>
            <p className="project__url">
              <a href={project.url}>
                <IoRocketOutline />
              </a>
            </p>
          </article>
        );
      })}
    </section>
  );
};

export default ProjectWrapper;
