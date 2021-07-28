import React, { useState } from 'react';
import gql from '@apollo/client';
import { useMutation } from '@apollo/client';


const useForm = (callback, initalState = {}) => {
    const [values, setValues] = useState(initalState);

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.values })
    };

    const onSumbit = (event) => {
        event.preventDefault();
        callback();
    };

    return {
        onChange,
        onSumbit,
        values
    };
};

