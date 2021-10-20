import { increment, decrement } from "./actionTypes";

export function inDecrementReducerInit(initialCount = 0, sliderLength = 0) {
    const initialState = { count: initialCount, length: sliderLength }

    function inDecrementReducer(state, action) {
        switch (action.type) {
            case decrement:
                return { ...state, count: state.count === 0 ? state.length - 1 : state.count - 1 };
            case increment:
                return { ...state, count: state.count === state.length - 1 ? 0 : state.count + 1 };
            default:
                throw new Error("Wrong action type")
        }
    }

    return { initialState, inDecrementReducer }
}

