import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "gatsby";
import CustomTabs from "../components/customTabs/CustomTabs";

const Leistungen = () => {
  return (
    <Layout buttonLink="/" buttonText="Zurück zur Startseite">
      <main className="page leistungen">

          <CustomTabs/>
        <h1>Was ist Gatsby?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          vestibulum, sapien id semper egestas, lorem neque consectetur tortor,
          vel finibus ex elit eget erat. Donec eu rhoncus sapien, bibendum
          luctus nibh. Sed ut nisl nec odio venenatis venenatis. Sed volutpat
          enim sem. Morbi auctor sapien tincidunt magna semper dignissim. Morbi
          eget posuere tortor. Maecenas arcu urna, iaculis ut felis non,
          pulvinar lobortis enim. Nulla eget ultricies odio. Aenean sodales enim
          nec nibh consectetur lacinia. Nam nulla turpis, lacinia quis lacus ut,
          bibendum bibendum erat. In volutpat dolor nec eros faucibus gravida.
          Nullam non varius augue. Nullam ac mauris turpis. Duis facilisis,
          magna ut dapibus vehicula, orci magna luctus quam, sed imperdiet arcu
          eros ut mauris. Nullam convallis a ipsum id blandit.
        </p>
      </main>
    </Layout>
  );
};

export default Leistungen;
