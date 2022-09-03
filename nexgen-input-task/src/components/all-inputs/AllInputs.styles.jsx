import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-top: 4rem;
    width: 80%;

    @media(min-width: 320px) and (max-width: 1024px){
        width: 100%; 
        margin-bottom: 3rem;
        justify-content: center;
    }
`

export const H2 = styled.h2`
    color: white;
    font-weight: 300;
    font-size: 2rem;
    margin: 0;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%; 
    margin: auto;
    margin-top: 3rem;

    @media(min-width: 320px) and (max-width: 1024px){
        width: 100%; 
        height: 100%;
    }
`

export const Submit = styled.input`
    width: 10%;
    height: 2.5rem;
    align-self: center;
    border: none;
    border-radius: 7px;
    font-size: 1.2rem;
    color: white;
    background-color: rgb(39, 127, 28);

    &:hover{
        cursor: pointer;
        background-color: rgb(59, 191, 43);
    }

    @media(min-width: 320px) and (max-width: 1024px){
        width: 50%; 
        height: 2rem;
    }
`