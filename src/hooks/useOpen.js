import { useState } from 'react'

function useOpen(initialState = false) {
    const [isOpen, setIsOpen] = useState(initialState);

    const handleIsOpen = () => setIsOpen(!isOpen);

    const handleIsOpenModal = (event, ref) => {
        if (ref.current === event.target) {
            handleIsOpen();
        }
    };

    return { isOpen, setIsOpen, handleIsOpen, handleIsOpenModal };
}

export { useOpen };