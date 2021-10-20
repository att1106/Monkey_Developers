import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./imageGallery.styles.scss";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useImage } from "../../hooks/useImage";
import ImageModalWrapper from "../imageModalWrapper/ImageModalWrapper";
import Modal from "../modal/Modal";
import { ImageModalContext } from "../../provider/Provider";

const ImageGallery = () => {

  const { allFile: { nodes } } = useStaticQuery(graphql`
    query {
    allFile(filter: {relativeDirectory: {eq: "imageGallery"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData
            #(transformOptions: {fit: COVER})
        }
      }
    }
  }
    `);

  const { imageIndex, onImageIndex } = useImage();
  const { isOpen, handleIsOpen, handleIsOpenModal } = useContext(ImageModalContext);

  const ImageModalWrapperComponent = () => {
    var gatsbyImage = getImage(nodes[imageIndex]);
    var imgHeight = gatsbyImage.height;
    var imgWidth = gatsbyImage.width;

    return <ImageModalWrapper renderContent={() => <GatsbyImage image={gatsbyImage} layout="constrained" alt="img" className="img-modal" />} />;
  }

  return (
    <div className="image-gallery">
      <Modal
        renderContent={ImageModalWrapperComponent}
        isOpen={isOpen}
        handleIsOpenModal={handleIsOpenModal}
      />
      {nodes.map((item, index) => {
        var image = getImage(item);
        return (
          <div className="image-gallery__item" key={index}>
            <GatsbyImage className="image" image={image} alt="image" onClick={() => {
              onImageIndex(index);
              handleIsOpen();
            }} />
          </div>)
      })}
    </div>
  )
}

export default ImageGallery;
