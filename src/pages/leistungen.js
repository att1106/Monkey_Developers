import React from "react";
import Layout from "../components/layout/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Hero from "../components/hero/Hero";
import Button from "../components/button/Button";
import Accordion from "../components/accordion/Accordion";
import { SiGatsby, SiHellofresh } from "react-icons/si";
import { ImArrowDown2 } from "react-icons/im";
import { FaLightbulb, FaAngleDoubleRight } from "react-icons/fa";

import { BsSignpost2 } from "react-icons/bs";
import IconPlusText from "../components/iconPlusText/IconPlusText";
import CustomTabs from "../components/customTabs/CustomTabs";

import heroimage from "../images/features/Hero_image.jpg";
import infoGuy from "../images/features/info_guy.jpg";
import infoGirl from "../images/features/info_girl.jpg";
import infoLb from "../images/features/info_lb.jpg";

import { bgInfosData } from "../constants/featuresData";

const Leistungen = () => {
  return (
    <Layout buttonLink="/" buttonText="Zurück zur Startseite">
      <Hero image={heroimage}>
        <h3>Willst Du endlich online gehen?</h3>
        <Button
          btnText={<Link to="/kontakt">Schick uns gleich eine Anfrage</Link>}
        />
      </Hero>

      <div
        className="titleimage-container background-start"
        style={{
          backgroundImage: `url(${"../images/features/Hero_image.jpg"})`,
        }}
      ></div>

      <main className="page leistungen">
        {/* <StaticImage
          src="../images/freepik/Leistungen_webdev.svg"
          className="hero__image"
          alt="webdev image"
          objectFit="covera"
        /> */}

        <section className="section leistungen">
          <p>
            Schön, dass Du mehr erfahren willst! Mit uns bist Du nur noch wenige
            Schritte von Deiner eigenen Website entfernt. Gerne begleiten wir
            Dich vom ersten Schritt der Designerstellung an bis hin zum
            Onlinegang Deiner Website. Was darfst Du alles von uns erwarten?
          </p>

          <ul>
            {/* Website */}
            <li className="leistungen__list">
              <span className="leistungen__list--icon">
                <FaAngleDoubleRight />
              </span>
              Erstellung und Gestaltung Deiner Website
            </li>
            {/* Services */}
            <li className="leistungen__list">
              <span className="leistungen__list--icon">
                <FaAngleDoubleRight />
              </span>
              Erstellung eines Content-Management-System für Deine Website
            </li>
            <li className="leistungen__list">
              <span className="leistungen__list--icon">
                <FaAngleDoubleRight />
              </span>
              Hosting Deiner Website
            </li>
            <li className="leistungen__list">
              <span className="leistungen__list--icon">
                <FaAngleDoubleRight />
              </span>
              Wartung Deiner Website bei Änderungswünschen
            </li>
            {/* SEO */}
            <li className="leistungen__list">
              <span className="leistungen__list--icon">
                <FaAngleDoubleRight />
              </span>
              Suchmaschinenoptimierung (search engine optimization - SEO) Deiner
              Website
            </li>
            {/* <li className="leistungen__list">
              <FaAngleDoubleRight className="leistungen__list--icon" />
              Design Deiner Website
            </li> */}
          </ul>

          <CustomTabs />
        </section>

        <div className="leistungen--message">
          <div className="leistungen--message__container--mobile">
            <img
              src={infoLb}
              className="leistungen--message__container--mobile__image"
            ></img>
          </div>
          <div className="leistungen--message__container--desktop">
            <img
              src={infoGirl}
              className="leistungen--message__container--desktop__image img1"
            ></img>
          </div>

          <div className="leistungen--message__container--text">
            <h3>Nutze die gleichen Vorteile wie viele Global Player</h3>
            <p>
              Unternehmen wie Facebook, Airbnb, Netflix und sogar die New York
              Times setzen auf das React.JS Framework zur Webseitenerstellung.
              Auch wir bauen auf React.JS. Um aber die mächtigen Vorteile von
              React.JS mit bsp. optimierten Datenmanagement und SEO zu vereinen,
              kommt bei uns Gatsby zum Einsatz. Du fragst Dich, was dahinter
              steckt? Finde es in den nächsten Abschnitten heraus!
            </p>
            {/* <Link className="leistungen__link" to="#leistungen__bginfo">
              <ImArrowDown2 className="leistungen--message__icon" />
            </Link> */}
          </div>
          <div className="leistungen--message__container--desktop">
            <img
              src={infoGuy}
              className="leistungen--message__container--desktop__image img2"
            ></img>
          </div>
        </div>

        <section id="leistungen__bginfo" className="section leistungen__bginfo">
          {bgInfosData.map((bgInfo) => {
            return (
              <Accordion
                key={bgInfo.id}
                renderHeader={() => (
                  <div className="leistungen__bginfo__infobox">
                    <div className="leistungen__bginfo__infobox--icon">
                      <bgInfo.icon />
                    </div>
                    <div className="leistungen__bginfo__infobox--text">
                      <h3>{bgInfo.header}</h3>
                    </div>
                  </div>
                )}
                renderContent={() => <p>{bgInfo.text}</p>}
              />
            );
          })}
        </section>
        <button className="button btn-2">
          <Link to="/">Zurück zur Startseite</Link>
        </button>
      </main>
    </Layout>
  );
};

export default Leistungen;
