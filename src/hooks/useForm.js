import { useEffect, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {

    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({})

    useEffect(() => {
        createValidators();
    }, [formState])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    const formCheckedValues = {};

    const createValidators = () => {
        for (const formField of Object.keys(formValidations)) {
            console.log(formField);
        }
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}