import React, { createContext } from "react";
import { useOpen } from "../hooks/useOpen";

export const ImageModalContext = createContext();

const Provider = ({ children }) => {

    const { isOpen, setIsOpen, handleIsOpen, handleIsOpenModal } = useOpen(false)

    return (
        <ImageModalContext.Provider value={{
            isOpen,
            setIsOpen,
            handleIsOpen,
            handleIsOpenModal
        }}>
            {children}
        </ImageModalContext.Provider>
    )
};

export default ({ element }) => (
    <Provider>
        {element}
    </Provider>
);
