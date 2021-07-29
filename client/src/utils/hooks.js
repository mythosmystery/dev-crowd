import { useState } from 'react';

export const useForm = (callback, initalState = {}) => {
    const [values, setValues] = useState(initalState);

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.values })
    };

    const onSubmit = (event) => {
        event.preventDefault();
        callback();
    };

    return {
        onChange,
        onSubmit,
        values
    };
};