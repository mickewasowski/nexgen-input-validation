import { createContext, useState } from "react";

export const FormContext = createContext();

const initialState = {
    fullName: null,
    email: null,
    age: null,
    password: null,
    birthDate: null,
    phoneNumber: null,
    profilePicture: null,
    website: null,
    bio: null,
    isChecked: null
}

const initialErrors = {
    fullName: null,
    email: null,
    age: null,
    password: null,
    birthDate: null,
    phoneNumber: null,
    website: null,
    bio: null,
    isChecked: null
}

export const FormProvider = ({children}) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState(initialErrors);

    const resetFormData = () => {setFormData(initialState)};

    const updateData = (object) => { setFormData(prevState => {return {...prevState, ...object}})}

    const updateIsChecked = (bool) => { setFormData((prevState) => {return {...prevState, isChecked: bool}})};

    const updateError = (errorObject) => {
        setErrors(prevState => {return {...prevState, ...errorObject}})
    };

    return(
        <FormContext.Provider value={{formData,errors, resetFormData, updateData, updateIsChecked, updateError}}>
            {children}
        </FormContext.Provider>
    )
}