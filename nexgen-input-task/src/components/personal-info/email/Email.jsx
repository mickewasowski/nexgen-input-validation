import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import {Label, InputField, ErrorMessage} from '../PersonalInfo.styles';

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function Email(){
    const {updateData, formData, errors, updateError} = useContext(FormContext);
    const [input, setInput] = useState(null);

    useEffect(() => {
        if(input === ''){
            updateError({email: 'Email cannot be empty!'});
        }
        else if(input === null){
            return;
        }
        else if (!input.match(emailRegex)) {
            updateError({email: 'Invalid email address!'})
        }else{
            updateData({email: input})
            updateError({email:null});
        }
    }, [input]);


    return(
        <>
            <Label>Email*:</Label>
            <InputField type="email" name="email" defaultValue={formData.email === null ? "" : formData.email} required onChange={(e) => setInput(e.target.value)}/>
            <ErrorMessage>{errors.email !== null ? errors.email : ''}</ErrorMessage>
        </>
    )
}

export default Email;