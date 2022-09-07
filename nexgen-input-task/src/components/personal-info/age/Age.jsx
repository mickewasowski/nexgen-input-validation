import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import {Label, InputField, ErrorMessage} from '../PersonalInfo.styles';


function Age(){
    const {updateData, formData} = useContext(FormContext);
    const [input, setInput] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        if(input === 0){
            setError('Age is mandatory!');
        }
        else if(input === null){
            return;
        }
        else if (input < 16 || input > 70) {
            setError('Age must be between 16 and 70!')
        }else{
            updateData({age: input})
            setError('');
        }
    }, [input]);



    return(
        <>
            <Label>Age*:</Label>
            <InputField type="number" name="age" defaultValue={formData.age === null ? "" : formData.age} required onChange={(e) => setInput(Number(e.target.value))} />
            <ErrorMessage>{error}</ErrorMessage>
        </>
    )
}

export default Age;