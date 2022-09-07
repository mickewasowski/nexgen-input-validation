import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import {Label, InputField, ErrorMessage} from '../PersonalInfo.styles';

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function Email(){
    const {updateData, formData} = useContext(FormContext);
    const [input, setInput] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        if(input === ''){
            setError('Email cannot be empty!');
        }
        else if(input === null){
            return;
        }
        else if (!input.match(emailRegex)) {
            setError('Invalid email address!')
        }else{
            updateData({email: input})
            setError('');
        }
    }, [input]);


    return(
        <>
            <Label>Email*:</Label>
            <InputField type="email" name="email" defaultValue={formData.email === null ? "" : formData.email} required onChange={(e) => setInput(e.target.value)}/>
            <ErrorMessage>{error}</ErrorMessage>
        </>
    )
}

export default Email;