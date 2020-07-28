import React from 'react';

type Hook = (initialValues: any) => void;

export const useForm: Hook = initialValues => {
    const [values, setValuse,] = React.useState(initialValues);

    return [
        values,
        (e: { target: { name: any, value: any, }; }) => {
            setValuse({
                ...values,
                [e.target.name]: e.target.value
            });
        },
    ];
};