import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import {Label, InputField, ErrorMessage} from '../PersonalInfo.styles';


function Age(){

    return(
        <>
            <Label>Age*:</Label>
            <InputField type="number" name="age" required onChange={handleOnChange} />
            <ErrorMessage>{errors.age}</ErrorMessage>
        </>
    )
}

export default Age;