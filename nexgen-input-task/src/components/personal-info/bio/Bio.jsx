import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import {Label, ErrorMessage, Textarea} from '../PersonalInfo.styles';


function Bio(){

    return(
        <>
            <Label>Bio:</Label>
            {/* validation for length and for special symbols */}
            <Textarea name="bio" onChange={handleOnChange}></Textarea>
            <ErrorMessage>{errors.bio}</ErrorMessage>
        </>
    )
}

export default Bio;