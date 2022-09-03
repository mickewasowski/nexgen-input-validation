import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import {Label, InputField, ErrorMessage} from '../PersonalInfo.styles';

const phoneNumberRegex = /^(\+\d{1,3}\s)?\(?\d{3}\)?[\s.-]\d{2}[\s.-]\d{4}$/;

function PhoneNumber(){
    const {updateData} = useContext(FormContext);
    const [input, setInput] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        if(input === '' || input === null){
            updateData({password: ''})
        }
        else if (!input.match(phoneNumberRegex)) {
            setError('Invalid phone number!')
        }
        else{
            updateData({password: input})
            setError('');
        }
    }, [input]);


    return(
        <> 
            <Label>Mobile number:</Label>
            {/* validation for lenght and to start with a code, search for regex for phone numbers */}
            <InputField type="tel" name="phoneNumber" onChange={(e) => setInput(e.target.value)} placeholder="+359 010 01 0101" />
            <ErrorMessage>{error}</ErrorMessage>
        </>
    )
}

export default PhoneNumber;