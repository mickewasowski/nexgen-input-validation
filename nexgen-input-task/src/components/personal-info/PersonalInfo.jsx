import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../contexts/FormContext';
import {Wrapper,Div, Label, InputField, ErrorMessage,FileUpload, Textarea} from './PersonalInfo.styles';
import FullName from './full-name/FullName';
import Email from './email/Email';
import Age from './age/Age';
import Password from './password/Password';
import Birthday from './birthday/Birthday';
import PhoneNumber from './phone-number/PhoneNumber';
import ProfilePicture from './profile-picture/ProfilePicture';
import Website from './website/Website';
import Bio from './bio/Bio';

function PersonalInfo(){
    const {updateFormData} = useContext(FormContext);

    const validateImageUpload = (e) => {
        let maxSizeInKb = 3000;
        let supportedTypes = ['image/jpeg', 'image/jpg']
        if (e.target.files.length > 0) {
            let {type, size} = e.target.files[0];
            let sizeInKb = size/1000.00;
            
            if (!(sizeInKb <= maxSizeInKb) && !(supportedTypes.includes(type))) {
                setErrors(prevState => {return {...prevState, profilePicture: 'Maximum image size is 3MB. Supported types are .jpeg and .jpg'}})
            }
        }
    }

    return(
        <Wrapper id="personalInfo">
            <Div>
                <FullName />
                <Email />
                <Age />
                {/* <Password /> */}
                {/* <Birthday />  */}
            </Div>
            <Div>
                {/* <PhoneNumber />
                <ProfilePicture />
                <Website />
                <Bio />                 */}
            </Div>
        </Wrapper>
    )
}

export default PersonalInfo;