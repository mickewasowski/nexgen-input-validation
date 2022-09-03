import PersonalInfo from "../personal-info/PersonalInfo";
import Buttons from "../buttons/Buttons";
import {Wrapper,H2,Form,Submit} from './AllInputs.styles';

function AllInputs(){

    const handleSubmit = (e) => {
        e.preventDefault();

        
    }

    return(
        <Wrapper>
            <H2>Registration form:</H2>
            <Form>
                <PersonalInfo />
                <Buttons />

                <Submit type="submit" onClick={handleSubmit} />
            </Form>
        </Wrapper>
    )
}

export default AllInputs;