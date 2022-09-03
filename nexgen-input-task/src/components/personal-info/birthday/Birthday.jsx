import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import {Label, InputField, ErrorMessage} from '../PersonalInfo.styles';


function Birthday(){

    return(
        <>
            <Label>Birth date*:</Label>
            <InputField type="date" name="birthDate" required onChange={handleOnChange} />
            <ErrorMessage>{errors.birthDate}</ErrorMessage>
        </>
    )
}

export default Birthday;