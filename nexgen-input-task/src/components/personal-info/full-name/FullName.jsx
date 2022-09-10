import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';

import {Label, InputField, ErrorMessage} from '../PersonalInfo.styles';

function FullName(){
    const {updateData, formData, errors, updateError} = useContext(FormContext);
    const [input, setInput] = useState(null);

    useEffect(() => {
        if(input === ''){
            updateError({fullName: 'Fullname cannot be empty!'});
        }
        else if(input === null){
            return;
        }
        else if (input.length < 10 || input.length > 30) {
            updateError({fullName: 'Fullname must be between 10 and 30 characters.'})
        }else{
            updateData({fullName: input})
            updateError({fullName: null});
        }
    }, [input]);

    return(
        <>
            <Label>Full name*:</Label>
            <InputField type="text" name="fullName" defaultValue={formData.fullName === null ? "" : formData.fullName} required onChange={(e) => setInput(e.target.value)} />
            <ErrorMessage>{errors.fullName !== null ? errors.fullName : ''}</ErrorMessage>
        </>
    )
}

export default FullName;