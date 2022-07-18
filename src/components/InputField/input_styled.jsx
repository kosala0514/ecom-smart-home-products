import styled from "styled-components";

export const ProInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    input{
        width: 70%;
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        border-radius: 0;
        border-bottom-style: 1px groove #fff;
        background-color: transparent;
        color: #fff;
    }
    input:focus{
        outline: none;
    }
`;