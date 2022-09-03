import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import {Label, InputField, ErrorMessage} from '../PersonalInfo.styles';

const dateOldest = Date.parse("1956-01-01");
const dateYounges = Date.parse("2006-01-01");

function Birthday(){
    const {updateData} = useContext(FormContext);
    const [input, setInput] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        let currentDate = Date.parse(input);

        if(input === ''){
            setError('Birthday is required!');
        }
        else if(input === null){
            return;
        }
        else if (currentDate < dateOldest || currentDate > dateYounges) {
            setError('You must be between 16 and 70 years old.')
        }
        else{
            updateData({password: input})
            setError('');
        }
    }, [input]);

    return(
        <>
            <Label>Birth date*:</Label>
            <InputField type="date" name="birthDate" required onChange={(e) => setInput(e.target.value)} />
            <ErrorMessage>{error}</ErrorMessage>
        </>
    )
}

export default Birthday;