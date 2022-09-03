import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import {Label, ErrorMessage, Textarea} from '../PersonalInfo.styles';


function Bio(){
    const {updateData} = useContext(FormContext);
    const [input, setInput] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        if(input === '' || input === null){
            setError('');
            updateData({bio: null})
        }
        else if (input.length > 40) {
            setError('Bio must be between no more than 40 characters.')
        }
        else{
            updateData({bio: input})
            setError('');
        }
    }, [input]);


    return(
        <>
            <Label>Bio:</Label>
            {/* validation for length and for special symbols */}
            <Textarea name="bio" onChange={(e) => setInput(e.target.value)}></Textarea>
            <ErrorMessage>{error}</ErrorMessage>
        </>
    )
}

export default Bio;