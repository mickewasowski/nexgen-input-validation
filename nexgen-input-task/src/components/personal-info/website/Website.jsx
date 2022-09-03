import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import {Label, InputField, ErrorMessage} from '../PersonalInfo.styles';

const websiteUrlRegex = /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/;

function Website(){
    const {updateData} = useContext(FormContext);
    const [input, setInput] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        if(input === '' || input === null){
            updateData({website: null})
            setError('');
        }
        else if (!input.match(websiteUrlRegex)) {
            setError('Invalid website format!')
        }
        else{
            updateData({website: input})
            setError('');
        }
    }, [input]);


    return(
        <>
            <Label>Website:</Label>
            {/* validation for https */}
            <InputField type="url" name="website" onChange={(e) => setInput(e.target.value)} />
            <ErrorMessage>{error}</ErrorMessage>
        </>
    )
}

export default Website;