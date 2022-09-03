import {Wrapper,Div} from './PersonalInfo.styles';
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
    return(
        <Wrapper id="personalInfo">
            <Div>
                <FullName />
                <Email />
                <Age />
                <Password />
                <Birthday /> 
            </Div>
            <Div>
                <PhoneNumber />
                <ProfilePicture />
                <Website />
                <Bio />                
            </Div>
        </Wrapper>
    )
}

export default PersonalInfo;