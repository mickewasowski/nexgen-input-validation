import {Wrapper,Container, ResetBtn, Check} from './Buttons.styles';
import {useState, useContext, useEffect} from 'react';
import { FormContext } from '../../contexts/FormContext';


function Buttons(){
    const [check, setCheck] = useState(false);
    const {updateIsChecked, resetFormData, resetErrors} = useContext(FormContext);

    useEffect(() => {
        updateIsChecked(check);
    }, [check])

    return(
        <Wrapper>
            <Container>
                <label>Reset the form:</label>
                <ResetBtn 
                    type="reset" 
                    onClick={() => {
                        resetFormData(); 
                        resetErrors();
                    }} /> 
            </Container>
            <Container>
                <label>Do you agree with the Terms and Conditions?</label>
                <Check type="checkbox" value={check} onChange={(e) => {setCheck(!check)}} />
            </Container>
        </Wrapper>
    )
}

export default Buttons;