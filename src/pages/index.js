import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BLOCKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import ImageGallery from "../components/imageGallery/ImageGallery";
import ContactBanner from "../components/contactBanner/ContactBanner";
import Layout from "../components/layout/Layout";
import TextCard from "../components/textCard/TextCard";
import Button from "../components/button/Button";
import { AiOutlineCheck } from "react-icons/ai";
import Input from "../components/input/Input";
import Form from "../components/form/Form";
import Modal from "../components/modal/Modal";
import { useOpen } from "../hooks/useOpen";
import { form } from "../constants/formData";
import Map from "../components/map/Map";
import Navbar from "../components/navbar/Navbar";
import formData from "../constants/formData";

import SidebarWrapper from "../components/fixedSidebar/SidebarWrapper";
import ContentWrapper from "../components/contentWrapper/ContentWrapper";
import Profile from "../components/profile/Profile";
import Footer from "../components/footer/Footer";

// const firstOptions = {
//   renderNode: {
//     [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
//     [BLOCKS.UL_LIST]: (node, children) => (
//       <div className="custom-ul-li">
//         <div className="ul-li__bullet">
//           <AiOutlineCheck size={25} />
//         </div>
//         <ul>{children}</ul>
//       </div>
//     ),
//   },
// };

// const secondOptions = {
//   renderNode: {
//     [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
//     // [BLOCKS.LIST_ITEM]: (node, children) => <li><AiOutlineCheck />{children}</li>,
//     //[BLOCKS.OL_LIST]: (node, chilren) => <ol>{chilren}</ol>
//   },
// };

const IndexPage = () => {
  return (
    <div className="page__body">
      <main>
        <SidebarWrapper />
        <ContentWrapper />
        <Profile />
        <Footer />
      </main>
    </div>
  );
};

export default IndexPage;
