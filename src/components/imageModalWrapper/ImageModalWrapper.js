import React, { useContext } from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { AiOutlineClose } from "react-icons/ai";
import "./imageModalWrapper.styles.scss";
import { ImageModalContext } from '../../provider/Provider';

const ImageModalWrapper = ({ renderContent }) => {

    const { handleIsOpen } = useContext(ImageModalContext);

    return (
        <div className="img-modal__container">
            <button className="img-modal__btn">
                <AiOutlineClose onClick={handleIsOpen} />
            </button>
            <div className="img-modal__wrapper">
                {renderContent()}
            </div>
        </div>
    )
}

export default ImageModalWrapper;
