import { useState } from "react";

function useImage(initialState = 0) {

    const [imageIndex, setImageIndex] = useState(initialState)

    const onImageIndex = index => setImageIndex(index);

    return { imageIndex, setImageIndex, onImageIndex }
}

export { useImage };