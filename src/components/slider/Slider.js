import React, { useReducer } from "react";
import { inDecrementReducerInit } from "../../reducer/reducer";
import { increment, decrement } from "../../reducer/actionTypes"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./slider.styles.scss";

const Slider = ({ slides, renderContent }) => {

    const { initialState, inDecrementReducer } = inDecrementReducerInit(0, slides.length);

    const [state, dispatch] = useReducer(inDecrementReducer, initialState)

    return (
        <div className="slider">
            <MdKeyboardArrowLeft className="slider__left-arrow" onClick={() => dispatch({ type: decrement })} />
            <MdKeyboardArrowRight className="slider__right-arrow" onClick={() => dispatch({ type: increment })} />
            {slides.map((slide, index) => {
                return (
                    <div key={index} className={state.count === index ? "slider__content active" : "slider__content"}>
                        {state.count === index &&
                            renderContent(slide)
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default Slider;
