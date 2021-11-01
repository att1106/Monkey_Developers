import React from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { profileData } from "../../constants/profileData";
import "./profile.styles.scss";

const Profile = () => {
  // const image = getImage(img);

  return (
    <section className="profile-section">
      <h1>Wer wir sind?</h1>

      {profileData.map((profile) => {
        console.log(profile.image);
        return (
          <div key={profile.id} className="profile">
            <figure className="profile-figure">
              <StaticImage
                src="../../images/james.jpeg"
                alt={profile.alt}
                className="profile-figure-image"
                placeholder="none"
                objectFit="covera"
                // imgStyle={{ borderRadius: "50%" }}
                quality={100}
              />
              <figcaption className="profile-figure-image__caption">
                {profile.name}
              </figcaption>
            </figure>

            {/* <GatsbyImage
              scr="../../images/james.jpeg"
              alt={profile.alt}
              placeholder="none"
              imgStyle={{ borderRadius: "50%" }}
              quality={100}
            /> */}

            <div className="profile-text">
              <h2>{profile.capture}</h2>
              <p>{profile.text}</p>
            </div>
          </div>
        );
      })}
      {/* <GatsbyImage image={image} alt={imgAlt} placeholder="none" imgStyle={{ "borderRadius": "50%" }} quality={100} />
            <h2>{name}</h2>
            <p className="profile-text">{text}</p> */}
    </section>
  );
};

export default Profile;
