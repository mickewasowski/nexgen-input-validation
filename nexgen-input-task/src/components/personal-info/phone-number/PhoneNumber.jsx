import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import {Label, InputField, ErrorMessage} from '../PersonalInfo.styles';


function PhoneNumber(){

    return(
        <> 
            <Label>Mobile number:</Label>
            {/* validation for lenght and to start with a code, search for regex for phone numbers */}
            <InputField type="tel" name="phoneNumber" onChange={handleOnChange} />
            <ErrorMessage>{errors.phoneNumber}</ErrorMessage>
        </>
    )
}

export default PhoneNumber;