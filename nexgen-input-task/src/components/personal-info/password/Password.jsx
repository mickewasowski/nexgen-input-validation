import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import {Label, InputField, ErrorMessage} from '../PersonalInfo.styles';

function Password(){
    const {updateData} = useContext(FormContext);
    const [input, setInput] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        if(input === ''){
            setError('Password is required!');
        }
        else if(input === null){
            return;
        }
        else if (input.length < 6 || input.length > 12) {
            setError('Password must be between 6 and 12 characters.')
        }
        else{
            updateData({password: input})
            setError('');
        }
    }, [input]);


    return(
        <>
            <Label>Password*:</Label>
            <InputField type="password" name="password" required onChange={(e) => setInput(e.target.value)} />
            <ErrorMessage>{error}</ErrorMessage>
        </>
    )
}

export default Password;