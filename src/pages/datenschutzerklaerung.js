import React from "react";
import Layout from "../components/layout/Layout";
import TextCard from "../components/textCard/TextCard";
import { impressungText } from "../constants/impressung";

const Datenschutzerklaerung = () => {
  return (
    <>
      <Layout>
        <main className="datenschutzerklaerung">
          <TextCard title="Datenschutzerklärung" cardText={impressungText} />
        </main>
      </Layout>
    </>
  );
};

export default Datenschutzerklaerung;
