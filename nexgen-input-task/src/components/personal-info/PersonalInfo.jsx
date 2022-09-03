import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../contexts/FormContext';
import {Wrapper,Div, Label, InputField, ErrorMessage,FileUpload, Textarea} from './PersonalInfo.styles';
import FullName from './full-name/FullName';


const errorInitialState = {
    fullName: '',
    email: '',
    age: '',
    password: '',
    birthDate: '',
    phoneNumber: '',
    profilePicture: '',
    website: '',
    bio: ''
}

function PersonalInfo(){
    const [currentData, setCurrentData] = useState({});
    const [errors, setErrors] = useState(errorInitialState);
    const {updateFormData} = useContext(FormContext);

    useEffect(() => {

    }, [errors]);


    const handleOnChange = (e) => {
        setCurrentData(prevState => {return {...prevState, [e.target.name]: e.target.value}})
    }

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

                <Label>Email*:</Label>
                <InputField type="email" name="email" required onChange={handleOnChange} />
                <ErrorMessage>{errors.email}</ErrorMessage>

                <Label>Age*:</Label>
                <InputField type="number" name="age" required onChange={handleOnChange} />
                <ErrorMessage>{errors.age}</ErrorMessage>

                <Label>Password*:</Label>
                <InputField type="password" name="password" required onChange={handleOnChange} />
                <ErrorMessage>{errors.password}</ErrorMessage>

                <Label>Birth date*:</Label>
                <InputField type="date" name="birthDate" required onChange={handleOnChange} />
                <ErrorMessage>{errors.birthDate}</ErrorMessage>
            </Div>
            <Div>
                <Label>Mobile number:</Label>
                {/* validation for lenght and to start with a code, search for regex for phone numbers */}
                <InputField type="tel" name="phoneNumber" onChange={handleOnChange} />
                <ErrorMessage>{errors.phoneNumber}</ErrorMessage>

                <Label>Profile picture:</Label>
                {/* validation for size */}
                <FileUpload type="file" name="profilePicture" onChange={validateImageUpload} />
                <ErrorMessage>{errors.profilePicture}</ErrorMessage>

                <Label>Website:</Label>
                {/* validation for https */}
                <InputField type="url" name="website" onChange={handleOnChange} />
                <ErrorMessage>{errors.website}</ErrorMessage>

                <Label>Bio:</Label>
                {/* validation for length and for special symbols */}
                <Textarea name="bio" onChange={handleOnChange}></Textarea>
                <ErrorMessage>{errors.bio}</ErrorMessage>
            </Div>
        </Wrapper>
    )
}

export default PersonalInfo;