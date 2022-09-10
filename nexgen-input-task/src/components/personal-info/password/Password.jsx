import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import {Label, InputField, ErrorMessage} from '../PersonalInfo.styles';

function Password(){
    const {updateData, formData, errors, updateError} = useContext(FormContext);
    const [input, setInput] = useState(null);

    useEffect(() => {
        if(input === ''){
            updateError({password: 'Password is required!'});
        }
        else if(input === null){
            return;
        }
        else if (input.length < 6 || input.length > 12) {
            updateError({password: 'Password must be between 6 and 12 characters.'})
        }
        else{
            updateData({password: input})
            updateError({password: null});
        }
    }, [input]);


    return(
        <>
            <Label>Password*:</Label>
            <InputField type="password" name="password" defaultValue={formData.password === null ? "" : formData.password} required onChange={(e) => setInput(e.target.value)} />
            <ErrorMessage>{errors.password !== null ? errors.password : ''}</ErrorMessage>
        </>
    )
}

export default Password;