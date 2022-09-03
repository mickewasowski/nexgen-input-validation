import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 60%;
    align-self: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 4rem;
    color: white;

    @media(min-width: 320px) and (max-width: 1024px){
        width: 100%; 
        flex-direction: column;
        gap: 2rem;
    }
`

export const Container = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    @media(min-width: 320px) and (max-width: 1024px){
        flex-direction: column;
    }
`

export const ResetBtn = styled.input`
    border: none;
    width: 5rem;
    height: 2rem;
    border-radius: 7px;
    background-color: rgb(234, 75, 88);
    font-size: 1.1rem;
    color: white;

    &:hover{
        cursor: pointer;
        background-color: rgb(191, 13, 13);
    }
`

export const Check = styled.input`
    width: 1rem;
    height: 2rem;

    &:hover{
        cursor: pointer;
    }
`