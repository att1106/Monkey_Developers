import React from "react";
import Layout from "../components/layout/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import { SiGatsby } from "react-icons/si";
import { FaLightbulb } from "react-icons/fa";
import { BsSignpost2 } from "react-icons/bs";
import IconPlusText from "../components/iconPlusText/IconPlusText";
import CustomTabs from "../components/customTabs/CustomTabs";

const Leistungen = () => {
  return (
    <Layout buttonLink="/" buttonText="Zurück zur Startseite">
      <main className="page leistungen">
        <StaticImage
          src="../images/freepik/Leistungen_webdev.svg"
          className="hero-image"
          alt="webdev image"
          objectFit="covera"
        />

        <CustomTabs />

        <div className="page-info">
          <IconPlusText
            mainText={<h3>Was ist Gatsby?</h3>}
            subText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            vestibulum, sapien id semper egestas, lorem neque consectetur tortor,
            vel finibus ex elit eget erat. Donec eu rhoncus sapien, bibendum
            luctus nibh. Sed ut nisl nec odio venenatis venenatis. Sed volutpat
            enim sem. Morbi auctor sapien tincidunt magna semper dignissim. Morbi
            eget posuere tortor. Sed ut nisl nec odio venenatis venenatis. Sed volutpat
            enim sem. Morbi auctor sapien tincidunt magna semper dignissim. Morbi
            eget posuere tortor. "
            icon={<SiGatsby />}
            iconLeft={true}
          />
          <IconPlusText
            mainText={<h3>Welche Vorteile bietet Gatsby</h3>}
            subText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            vestibulum, sapien id semper egestas, lorem neque consectetur tortor,
            vel finibus ex elit eget erat. Donec eu rhoncus sapien, bibendum
            luctus nibh. Sed ut nisl nec odio venenatis venenatis. Sed volutpat
            enim sem. Morbi auctor sapien tincidunt magna semper dignissim. Morbi
            eget posuere tortor. Sed ut nisl nec odio venenatis venenatis. Sed volutpat
            enim sem. Morbi auctor sapien tincidunt magna semper dignissim. Morbi
            eget posuere tortor. "
            icon={<FaLightbulb />}
            iconLeft={false}
          />
          <IconPlusText
            mainText={<h3>Gatsby vs. Wordpress</h3>}
            subText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            vestibulum, sapien id semper egestas, lorem neque consectetur tortor,
            vel finibus ex elit eget erat. Donec eu rhoncus sapien, bibendum
            luctus nibh. Sed ut nisl nec odio venenatis venenatis. Sed volutpat
            enim sem. Morbi auctor sapien tincidunt magna semper dignissim. Morbi
            eget posuere tortor. Sed ut nisl nec odio venenatis venenatis. Sed volutpat
            enim sem. Morbi auctor sapien tincidunt magna semper dignissim. Morbi
            eget posuere tortor. "
            icon={<BsSignpost2 />}
            iconLeft={true}
          />
        </div>
      </main>
    </Layout>
  );
};

export default Leistungen;
