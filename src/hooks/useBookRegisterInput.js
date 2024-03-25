import { useState } from "react"

export const useBookRegisterInput = (enterFn, ref) => {
    const [ value, setValue ] = useState("");
    console.log(ref);

    const handleOnChange = (e) => {
        setValue(() => e.target.value);
    }

    const handleOnKeyUp = (e) => {
        if(e.keyCode === 13) {
            enterFn(ref);
        }
    }

    return { value, handleOnChange, handleOnKeyUp, setValue };
}