// used in: components/navbar 


import { useState } from "react";

function useToggle(initialVal = false) {
    
    // set intial value to true 
    const [state, setState] = useState(initialVal);

    const toggle = () => {
        setState(!state);   
    };

    // return state, and function to change state
    return [state, toggle];
}
export default useToggle;
