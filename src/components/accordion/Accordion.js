import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./accordion.styles.scss";

const Accordion = ({ renderHeader = () => "Accordio title", renderContent = () => <p>Hello</p>, indented, white, noPadding }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }

    const contentRef = useRef(null);

    useEffect(() => {
        contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0px'
    }, [contentRef, isOpen])

    return (
        <div className={`accordion${white ? " white" : ""}${noPadding ? " no-padding" : ""}`}>
            <div className="accordion__header-container">
                <div className="accordion__header">{renderHeader()}</div>
                <IoIosArrowDown
                    className={`fa-lg accordion-icon${isOpen ? " rotate" : ""}`}
                    onClick={toggleAccordion}
                />
            </div>
            <div
                ref={contentRef}
                className={`accordion__content-container${indented ? " indented" : ""}`}
            >
                {!indented && <hr />}
                {renderContent()}
            </div>
        </div>
    )
}

export default Accordion;
