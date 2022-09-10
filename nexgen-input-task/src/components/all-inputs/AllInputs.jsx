import PersonalInfo from "../personal-info/PersonalInfo";
import Buttons from "../buttons/Buttons";
import {Wrapper,H2,Form,Submit} from './AllInputs.styles';
import { FormContext } from '../../contexts/FormContext';
import { useContext } from 'react';

function AllInputs(){   
    const {formData} = useContext(FormContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(formData.fullName !== null && formData.email !== null && formData.age !== null && formData.password !== null && formData.birthDate !== null){
            
            if (formData.isChecked === null || formData.isChecked === false) {
                alert("You need to agree to the Terms and Conditions!")
            }else{
                fetch("https://httpbin.org/post", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                  },
                body: JSON.stringify(formData)
                })
                .then(res => {
                    console.log(res);
                    if (res.ok) {
                        alert('Success!')
                    }
                })
                .catch(err => console.log(err));
            }
        }
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