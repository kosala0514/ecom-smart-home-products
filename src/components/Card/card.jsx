import styled from 'styled-components';

export const Container = styled.div`
    width: 265px;
    height: 40vh;
    margin: 2rem;
    position: relative;
    display: flex;
    align-items: center;
    box-shadow: 0px 7px 10px #7C3E66;
    transition: 0.5c ease-in-out;
    border-radius: 15px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 15px 0 15px 0;
    }
    
`;

export const Content = styled.div`
    position: absolute;
    z-index: 0;
    color: #fff;
    border-radius: 15px 0 15px 0;
    bottom: 0px;
    background-color: rgb(165, 190, 204,0.5);
    opacity: 1;


    h1{
        color: #000;
        font-size: 1rem;
        font-weight: bold;
    }
    p{
        color: #000;
        margin: 10px;
    }

    &:hover{
        background-color: rgb(242, 235, 233, 0.5);
        box-shadow: 0px 7px 10px #7C3E66;
        h1,p{
            color: #243A73;
        }
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    background-color: #F2EBE9;
 `;