import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import {Label, InputField, ErrorMessage} from '../PersonalInfo.styles';


function Website(){

    return(
        <>
            <Label>Website:</Label>
            {/* validation for https */}
            <InputField type="url" name="website" onChange={handleOnChange} />
            <ErrorMessage>{errors.website}</ErrorMessage>
        </>
    )
}

export default Website;