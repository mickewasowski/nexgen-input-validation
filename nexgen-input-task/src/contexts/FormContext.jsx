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

export const FormProvider = ({children}) => {
    const [formData, setFormData] = useState(initialState);

    const resetFormData = () => {setFormData(initialState)};

    const updateData = (object) => { setFormData(prevState => {return {...prevState, ...object}})}

    const updateIsChecked = (bool) => { setFormData((prevState) => {return {...prevState, isChecked: bool}})};

    return(
        <FormContext.Provider value={{formData, resetFormData, updateData, updateIsChecked}}>
            {children}
        </FormContext.Provider>
    )
}