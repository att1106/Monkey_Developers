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


const firstOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.UL_LIST]: (node, children) => <div className="custom-ul-li"><div className="ul-li__bullet"><AiOutlineCheck size={25} /></div><ul>{children}</ul></div>,
  }
}

const secondOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    // [BLOCKS.LIST_ITEM]: (node, children) => <li><AiOutlineCheck />{children}</li>,
    //[BLOCKS.OL_LIST]: (node, chilren) => <ol>{chilren}</ol>
  }
}

const IndexPage = ({ data: { allFile: { nodes }, allContentfulCardText } }) => {

  const { isOpen, setOpen, handleIsOpenModal, handleIsOpen } = useOpen()


  let solution = allContentfulCardText.nodes[0];
  let problem = allContentfulCardText.nodes[1];
  let expose = allContentfulCardText.nodes[2];
  let aboutMe = allContentfulCardText.nodes[3];
  let nextSteps = allContentfulCardText.nodes[4];
  let location = allContentfulCardText.nodes[5];
  console.log(solution);


  return (
    <div className="page__body">
      <Layout>
        <main>
          <ContactBanner />
          <div className="page-element">
            <TextCard
              title={solution.title}
              img={solution.image}
              imgAlt={solution.name}
              subTitle={solution.subTitle}
              cardText={renderRichText(solution.text, firstOptions)}
              imgTop={false}
              imgLeft={true} />
          </div>
          <div className="page-element negative__color">
            <TextCard
              title={problem.title}
              img={problem.image}
              imgAlt={problem.name}
              subTitle={problem.subTitle}
              cardText={renderRichText(problem.text, firstOptions)}
              negative={true}
              imgTop={false}
              imgLeft={false} />
          </div>
          <div className="page-element">
            <TextCard
              title={expose.title}
              img={expose.image}
              imgAlt={expose.name}
              subTitle={expose.subTitle}
              cardText={renderRichText(expose.text, firstOptions)}
              negative={false}
              imgTop={false}
              imgLeft={true} />
            <ImageGallery />
          </div>
          <div className="page-element negative__color">
            <TextCard
              title={aboutMe.title}
              img={aboutMe.image}
              imgAlt={aboutMe.name}
              subTitle={aboutMe.subTitle}
              cardText={renderRichText(aboutMe.text, firstOptions)}
              negative={true}
              imgTop={false}
              imgLeft={true} />
          </div>
          <div className="page-element">
            <TextCard
              title={nextSteps.title}
              img={nextSteps.image}
              imgAlt={nextSteps.name}
              subTitle={nextSteps.subTitle}
              cardText={renderRichText(nextSteps.text, secondOptions)}
              imgTop={false}
              imgLeft={false} />
          </div>
          <div className="page-element">
            <h1>{location.title}</h1>
            <h2>{location.subTitle}</h2>
            <GatsbyImage
              image={getImage(location.image)}
              alt={location.name}
              objectFit="contain"
              style={{ marginBottom: "20px" }}
            />
            <Map />
          </div>
          <div className="page-element small-padding">
          </div>
          {/* <Slider slides={nodes} renderContent={(image) => <GatsbyImage image={getImage(image)} alt="image" layout="constrained" className="slider__img" />} /> */}
          {/* <div className="page-element small-padding" >
            <Button btnText="Kontaktiere mich jetzt!" onClick={() => window.location.href = `mailto:vducnguyen92@yahoo.com`} />
          </div> */}
          <Modal renderContent={() => <Form handleIsOpen={handleIsOpen} form={form} />} isOpen={isOpen} handleIsOpenModal={handleIsOpenModal} />
        </main>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "imageGallery"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData
            #(transformfirstOptions: {fit: COVER})
        }
      }
    }
    allContentfulCardText(sort: {fields: contentfulid, order: ASC}) {
    nodes {
      subTitle
      title
      image {
        gatsbyImageData
      }
      contentfulid
      text {
        raw
      }
      name
    }
  }
  }
`

export default IndexPage;
