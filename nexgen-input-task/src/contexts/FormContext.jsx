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

    return(
        <FormContext.Provider value={{formData, resetFormData, updateData}}>
            {children}
        </FormContext.Provider>
    )
}