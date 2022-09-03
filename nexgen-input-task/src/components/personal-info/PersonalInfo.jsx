import {Wrapper,Div, Label, InputField,FileUpload, Textarea} from './PersonalInfo.styles';

function PersonalInfo(){

    return(
        <Wrapper id="personalInfo">
            <Div>
                <Label>Full name*:</Label>
                <InputField type="text" id="fullName" required />
                <Label>Email*:</Label>
                <InputField type="email" id="email" required />
                <Label>Age*:</Label>
                <InputField type="number" id="age" required />
                <Label>Password*:</Label>
                <InputField type="password" id="password" required />
                <Label>Birth date*:</Label>
                <InputField type="date" id="dateOfBirth" required />
            </Div>
            <Div>
                <Label>Mobile number:</Label>
                <InputField type="tel" id="phoneNumber" />
                <Label>Profile picture:</Label>
                <FileUpload type="file" />
                <Label>Website:</Label>
                <InputField type="url" />
                <Label>Bio:</Label>
                <Textarea></Textarea>
            </Div>
        </Wrapper>
    )
}

export default PersonalInfo;