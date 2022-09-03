import { useContext, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import {Label,ErrorMessage,FileUpload} from '../PersonalInfo.styles';


function ProfilePicture(){
    const {updateData} = useContext(FormContext);
    const [error, setError] = useState('');

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