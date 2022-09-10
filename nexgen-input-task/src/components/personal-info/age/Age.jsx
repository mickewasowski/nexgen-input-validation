import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import {Label, InputField, ErrorMessage} from '../PersonalInfo.styles';


function Age(){
    const {updateData, formData, errors, updateError} = useContext(FormContext);
    const [input, setInput] = useState(null);

    useEffect(() => {
        if(input === 0){
            updateError({age: 'Age is mandatory!'});
        }
        else if(input === null){
            return;
        }
        else if (input < 16 || input > 70) {
            updateError({age: 'Age must be between 16 and 70!'})
        }else{
            updateData({age: input})
            updateError({age: null});
        }
    }, [input]);



    return(
        <>
            <Label>Age*:</Label>
            <InputField type="number" name="age" defaultValue={formData.age === null ? "" : formData.age} required onChange={(e) => setInput(Number(e.target.value))} />
            <ErrorMessage>{errors.age !== null ? errors.age : ''}</ErrorMessage>
        </>
    )
}

export default Age;