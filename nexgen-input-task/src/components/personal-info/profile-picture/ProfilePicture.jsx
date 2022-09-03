import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import {Label,ErrorMessage,FileUpload} from '../PersonalInfo.styles';


function ProfilePicture(){

    return(
        <>
            <Label>Profile picture:</Label>
            {/* validation for size */}
            <FileUpload type="file" name="profilePicture" onChange={validateImageUpload} />
            <ErrorMessage>{errors.profilePicture}</ErrorMessage>
        </>
    )
}

export default ProfilePicture;