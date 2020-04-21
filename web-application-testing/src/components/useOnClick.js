import { useState } from "react";

export const useOnClick = () => {
    const [value, setValue] = useState(0);

    const handleOnClick = event => {
    event.preventDefault();
    setValue(value + 1);
    };

    return [value, setValue, handleOnClick];
};