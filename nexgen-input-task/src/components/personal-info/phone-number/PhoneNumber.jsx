import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import {Label, InputField, ErrorMessage} from '../PersonalInfo.styles';

const phoneNumberRegex = /^(\+\d{1,3}\s)?\(?\d{3}\)?[\s.-]\d{2}[\s.-]\d{4}$/;

function PhoneNumber(){
    const {updateData, formData, errors, updateError} = useContext(FormContext);
    const [input, setInput] = useState(null);

    useEffect(() => {
        if(input === '' || input === null){
            updateData({password: ''})
        }
        else if (!input.match(phoneNumberRegex)) {
            updateError({phoneNumber: 'Invalid phone number!'})
        }
        else{
            updateData({password: input})
            updateError({phoneNumber: null});
        }
    }, [input]);


    return(
        <> 
            <Label>Mobile number:</Label>
            <InputField type="tel" name="phoneNumber" defaultValue={formData.phoneNumber === null ? "" : formData.phoneNumber} onChange={(e) => setInput(e.target.value)} placeholder="+359 010 01 0101" />
            <ErrorMessage>{errors.phoneNumber !== null ? errors.phoneNumber : ''}</ErrorMessage>
        </>
    )
}

export default PhoneNumber;