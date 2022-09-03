import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import {Label,ErrorMessage,FileUpload} from '../PersonalInfo.styles';


function ProfilePicture(){
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

    const validateImageUpload = (e) => {
        let maxSizeInKb = 3000;
        let supportedTypes = ['image/jpeg', 'image/jpg']
        if (e.target.files.length > 0) {
            let {type, size} = e.target.files[0];
            let sizeInKb = size/1000.00;

            if ((sizeInKb > maxSizeInKb) || (supportedTypes.find(x => x === type) === undefined)) {
                setError('Maximum image size is 3MB. Supported types are .jpeg and .jpg');
            }
            else{
                updateData({profilePicture: e.target.files[0]})
                setError('');
            }
        }
    }

    return(
        <>
            <Label>Profile picture:</Label>
            {/* validation for size */}
            <FileUpload type="file" name="profilePicture" onChange={validateImageUpload} />
            <ErrorMessage>{error}</ErrorMessage>
        </>
    )
}

export default ProfilePicture;