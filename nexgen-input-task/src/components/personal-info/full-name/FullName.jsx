import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';

import {Label, InputField, ErrorMessage} from '../PersonalInfo.styles';

function FullName(){
    const {updateData} = useContext(FormContext);
    const [input, setInput] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        if(input === ''){
            setError('Fullname cannot be empty!');
        }
        else if(input === null){
            return;
        }
        else if (input.length < 10 || input.length > 30) {
            setError('Fullname must be between 10 and 30 characters.')
        }else{
            updateData({fullName: input})
            setError('');
        }
    }, [input]);

    return(
        <>
            <Label>Full name*:</Label>
            <InputField type="text" name="fullName" required onChange={(e) => setInput(e.target.value)} />
            <ErrorMessage>{error}</ErrorMessage>
        </>
    )
}

export default FullName;