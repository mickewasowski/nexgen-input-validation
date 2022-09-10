import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import {Label, InputField, ErrorMessage} from '../PersonalInfo.styles';

const dateOldest = Date.parse("1956-01-01");
const dateYounges = Date.parse("2006-01-01");

function Birthday(){
    const {updateData, formData, errors, updateError} = useContext(FormContext);
    const [input, setInput] = useState(null); 

    useEffect(() => {
        let currentDate = Date.parse(input);

        if(input === ''){
            updateError({birthDate: 'Birthday is required!'});
        }
        else if(input === null){
            return;
        }
        else if (currentDate < dateOldest || currentDate > dateYounges) {
            updateError({birthDate: 'You must be between 16 and 70 years old.'})
        }
        else{
            updateData({birthDate: input})
            updateError({birthDate: null});
        }
    }, [input]);

    return(
        <>
            <Label>Birth date*:</Label>
            <InputField type="date" name="birthDate" defaultValue={formData.birthDate === null ? "" : formData.birthDate} required onChange={(e) => setInput(e.target.value)} />
            <ErrorMessage>{errors.birthDate !== null ? errors.birthDate : ''}</ErrorMessage>
        </>
    )
}

export default Birthday;