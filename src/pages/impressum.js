import React from "react";
import Layout from "../components/layout/Layout";
import TextCard from "../components/textCard/TextCard";
import { impressungText } from "../constants/impressung";

const Impressum = () => {
  return (
    <>
      <Layout>
        <main className="impressum">
          <TextCard title="Impressum" cardText={impressungText} />
        </main>
      </Layout>
    </>
  );
};

export default Impressum;
