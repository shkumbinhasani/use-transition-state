import {Dispatch, SetStateAction, useState} from "react";
import {flushSync} from "react-dom";

declare global {
    interface Document {
        startViewTransition?(callback: () => void): void;
    }
}
const useTransitionedState = <T>(initialState: T | (() => T)): [T, Dispatch<SetStateAction<T>>] => {
    const [state, setState] = useState(initialState);

    const setStateWithTransition = (newState: SetStateAction<T>) => {
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                flushSync(() => {
                    setState(newState);
                });
            });
        } else {
            setState(newState);
        }
    }

    return [state, setStateWithTransition];
}

export default useTransitionedState;
