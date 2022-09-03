import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 1rem;
    align-items: flex-start;
    justify-content: space-around;
    margin-bottom: 4rem;

    @media(min-width: 320px) and (max-width: 1024px){
        flex-direction: column;
    }
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    gap: .2rem;

    @media(min-width: 320px) and (max-width: 1024px){
        flex-direction: column;
        width: 100%;
    }
`

export const Label = styled.label`
    font-weight: 300;
    color: white;
`

export const InputField = styled.input`
    border: none;
    border-radius: 10px;
    height: 1.4rem;
    background-color: rgba(255,255,255,.3);
    color: white;
    font-weight: 400;
    font-size: 1.2rem;


    &:focus{
        outline: none;
    }

    &:hover{
        cursor: pointer;
        outline: 2px solid rgb(168, 247, 170);
    }
`

export const ErrorMessage = styled.p`
    color: rgb(192, 14, 14);
    font-weight: 400;
    font-size: .8rem;
    margin-top: .1rem;
`

export const FileUpload = styled.input`
    font-size: 1.3rem;
    background-color: rgba(255,255,255,.3);
    border-radius: 10px;
    width: 100%;
    outline: none;
    color: white;

    &::-webkit-file-upload-button{
        color: white;
        border: none;
        border-radius: 10px;
        background-color:rgba(4,95,156,0.6);
        padding: .3rem;

        &:hover{
            background-color:rgba(2,154,252,0.4);
            cursor: pointer;
        }
    }
`

export const Textarea = styled.textarea`
    border: none;
    border-radius: 10px;
    height: 6rem;
    background-color: rgba(255,255,255,.3);
    color: white;
    font-weight: 400;
    font-size: 1.2rem;
    resize: none;

    &:focus{
        outline: none;
    }

    &:hover{
        cursor: pointer;
        outline: 2px solid rgb(168, 247, 170);
    }
`