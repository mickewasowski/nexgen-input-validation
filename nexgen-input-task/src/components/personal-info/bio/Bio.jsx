import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import {Label, ErrorMessage, Textarea} from '../PersonalInfo.styles';


function Bio(){
    const {updateData, formData, errors, updateError} = useContext(FormContext);
    const [input, setInput] = useState(null);

    useEffect(() => {
        if(input === '' || input === null){
            updateError({bio: ''});
            updateData({bio: null})
        }
        else if (input.length > 40) {
            updateError({bio: 'Bio must be between no more than 40 characters.'})
        }
        else{
            updateData({bio: input})
            updateError({bio: null});
        }
    }, [input]);


    return(
        <>
            <Label>Bio:</Label>
            <Textarea name="bio" defaultValue={formData.bio === null ? "" : formData.bio} onChange={(e) => setInput(e.target.value)}></Textarea>
            <ErrorMessage>{errors.bio !== null ? errors.bio : ''}</ErrorMessage>
        </>
    )
}

export default Bio;