import React from "react";
import "./imageBackground.styles.scss";

const ImageBackground = ({ render = () => <h1>Image Backround Content</h1> }) => {
    return (
        <div className="image-background">
            {render()}
        </div>
    )
}

export default ImageBackground;

