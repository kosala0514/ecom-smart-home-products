import styled from 'styled-components';

export const ImageLoader = styled.img`
  width: 100%;
  height: 86vh;
`;

export const Background = styled.div`
    display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -15vh;
  width: 100%;
  height: 100vh;
  background: rgb(165, 190, 204, 0.8);
`;

export const Wrapper = styled.div`
    width: 40vw;
    height: 75vh;
    border-radius: 50px 0 50px 0;
    background-color: #7C3E66;

    h1{
      color: #F2EBE9;
      
    }
    p{
      color: #F2EBE9;
      text-align: center;
      font-weight: bold;
      cursor: pointer;
    }
`;


export const BtnReg = styled.button`
  width: 100px;
  height: 100px;
  border: none;
  border-radius: 50%;
  position: relative;
  margin-left: 32.5vw;
  margin-top: -9vh;
  opacity: 0.8;
  font-size: 1.5rem;
  font-weight: bold;
  color: #7C3E66;
  cursor: pointer;
`;

export const Btn = styled.button`
  width: 100px;
  height: 100px;
  border: none;
  border-radius: 50%;
  position: relative;
  margin-left: 32.5vw;
  margin-top: 14vh;
  opacity: 0.8;
  font-size: 1.5rem;
  font-weight: bold;
  color: #7C3E66;
  cursor: pointer;
`;