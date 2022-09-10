import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import {Label, InputField, ErrorMessage} from '../PersonalInfo.styles';

const websiteUrlRegex = /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/;

function Website(){
    const {updateData, formData, errors, updateError} = useContext(FormContext);
    const [input, setInput] = useState(null);

    useEffect(() => {
        if(input === '' || input === null){
            updateData({website: null})
            updateError({website: ''});
        }
        else if (!input.match(websiteUrlRegex)) {
            updateError({website: 'Invalid website format!'})
        }
        else{
            updateData({website: input})
            updateError({website: null});
        }
    }, [input]);


    return(
        <>
            <Label>Website:</Label>
            <InputField type="url" name="website" defaultValue={formData.website === null ? "" : formData.website} onChange={(e) => setInput(e.target.value)} />
            <ErrorMessage>{errors.website !== null ? errors.website : ''}</ErrorMessage>
        </>
    )
}

export default Website;