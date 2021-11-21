import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { profileData } from "../../constants/profileData";
import "./profile.styles.scss";

const query = graphql`
  {
    allFile(
      filter: { relativeDirectory: { regex: "/profiles/" } }
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

const Profile = () => {
  const data = useStaticQuery(query);
  const nodes = data.allFile.nodes;

  return (
    <section id="profile" className="profile-section">
      <h1>Wer wir sind?</h1>

      {profileData.map((profile, index) => {
        const image = nodes[index];
        const pathToImage = getImage(image);

        return (
          <div key={profile.id} className="profile">
            <figure className="profile__figure">
              {/* <StaticImage
                src="../../images/james.jpeg"
                alt={profile.alt}
                className="profile-figure-image"
                placeholder="none"
                // objectFit="covera"
                // imgStyle={{ borderRadius: "50%" }}
                quality={100}
              /> */}

              <GatsbyImage
                image={pathToImage}
                alt={profile.alt}
                className="profile__figure__image"
                placeholder="none"
                style={{ height: "100%", width: "100%" }}
                imgStyle={{ objectFit: "cover" }}
                // quality={100}
              />
              <figcaption className="profile__figure__image__caption">
                {profile.name}
              </figcaption>
            </figure>

            <div className="profile__text">
              <h2>{profile.capture}</h2>
              <p>{profile.text}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Profile;
