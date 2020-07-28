import React from 'react'
import { useForm, } from '../../utils/useForm';

export default function UseStateExample() {

    const [values, handleChange,]: any = useForm({ email: '', password: '' });

    return (
        <div>
            <h1>Use State Example:</h1>
            <input
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
            />
            <p>{`Your email is: ${values.email}, and your password is: ${values.password}.`}</p>
        </div>
    )
}
