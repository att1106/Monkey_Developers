import React from "react";
import Form from "../components/form/Form";
import { form } from "../constants/formData";

import Layout from "../components/layout/Layout";

const Kontakt = () => {
  return (
    <Layout buttonLink= "/" buttonText= "Zurück zur Startseite"
    >
      <main className="page contact">
        <h2> Schön, dass Du Dich für uns interessierst!</h2>
        <h2> Schick uns unten einfach Dein Anliegen, wir melden uns bald bei Dir!</h2>
        <Form handleIsOpen={true} form={form} />


        <p>Oder möchtest uns lieber anrufen? Kein Problem, wir sind auch unter folgender Nummer erreichbar:</p>
        <p>xxxx xxxxxxxxx</p>
      </main>
    </Layout>
  );
};

export default Kontakt;
