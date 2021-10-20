import { useState } from "react";

function useForm(initialValue = "") {
    const [values, setValues] = useState(initialValue);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Submit!", values);
    }

    return { values, handleChange, handleSubmit }
}

export { useForm };

