import {Wrapper,Container, ResetBtn, Check} from './Buttons.styles';

function Buttons(){

    return(
        <Wrapper>
            <Container>
                <label>Reset the form:</label>
                {/* // to alert if we are sure we want to clear the data */}
                <ResetBtn type="reset" /> 
            </Container>
            <Container>
                <label>Do you agree with the Terms and Conditions?</label>
                <Check type="checkbox" />
            </Container>
        </Wrapper>
    )
}

export default Buttons;