import React from "react";
import Layout from "../components/layout/Layout";
import TextCard from "../components/textCard/TextCard";
import { impressungText } from "../constants/impressung";

const Datenschutzerklaerung = () => {
  return (
    <>
      <Layout buttonLink= "/" buttonText= "Zurück zur Startseite">
        <main className="page datenschutzerklaerung">
          <TextCard title="Datenschutzerklärung" cardText={impressungText} />
        </main>
      </Layout>
    </>
  );
};

export default Datenschutzerklaerung;
