import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import {Label, InputField, ErrorMessage} from '../PersonalInfo.styles';


function Password(){

    return(
        <>
            <Label>Password*:</Label>
            <InputField type="password" name="password" required onChange={handleOnChange} />
            <ErrorMessage>{errors.password}</ErrorMessage>
        </>
    )
}

export default Password;