import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 0 !important;
`;

export const CloseSearchButton = styled(MdClose)`
    cursor: pointer;
    position: relative;
    top: 2px;
    left: -20px;
    width: 15px;
    height: 15px;
    padding: 0;
    color:#7C3E66 !important;
    z-index: 0 !important;
`;

export const ModalContent = styled.div`
    display: flex;
`;

export const ModalWrapper = styled.div`
  width: 60vw;
  margin-top: -18vh;
  height: 80vh;
  background: #7C3E66;
  color: #fff;
  position: relative;
  z-index: 10;
  border-radius: 25px 0 25px 0;
`;

export const Background = styled.div`
    width: 100%;
    height: 130vh;
    margin-top: -100px;
    padding-top: -40px;
    background: rgb(242, 235, 233, 0.6);
    position: fixed;
    display: flex;
    z-index: 2;
    justify-content: center;
    align-items: center;
`;

export const ImgContainer = styled.div`
position: relative;
  width  : 50%;
  height: 100%;

  img{
    width: 100%;
    height: 79.6vh;
    border: 1px solid #7C3E66;
    border-radius: 25px 0 0 0;
  }
`;
export const DesContainer = styled.div`
  width  : 50%;
  height: 100%;  
  margin-top: 70px;

  h1{
    margin-top: 6vh;
  }
  p,h3{
    margin-left: 15px;
    margin-right: 15px;
  }
`;


//for  profile modal
export const ProModalContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
export const ProModalContentRow1 = styled.div`
    display: flex;
    
    position: relative;
    width: 100%;
    height: 100%;
`;
// export const ProModalContentRow2 = styled.div`
//     display: flex;
//     position: relative;
//     width: 100%;
//     height: 50%;
// `;
export const ProImgContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: #000;
  border-top-left-radius: 25px;

  img{
    width: 100%;
    height: 100%;
    border-top-left-radius: 25px;
  }
  input{
    position: absolute;
    border: none;
    width: 15px;
    ::-webkit-file-upload-button{
      visibility: hidden;
    }

    ::before{
      content: '+';
      display: inline-block;
      background: -webkit-linear-gradient(top, #f9f9f9, #e3e3e3);
      border: 1px solid #7C3E66;
      border-radius: 15px;
      color: #7C3E66;
      padding: 4px 8px;
      outline: none;
      white-space: nowrap;
      cursor: pointer;
      text-shadow: 1px 1px #fff;
      font-weight: 700;
      font-size: 10pt;
    }
  }
  
`;
export const ProEditContainer = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  background-color: #243A73;
  padding-top: 40px;


  button{
    height: 30px;
    width: 70px;
    margin-top: 5px;
    margin-left: 35%;
    background-color: #A5BECC;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
`;
export const TextEdit = styled.input`
  position: relative;
  width: 75%;
`;
export const ProContentContainer = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  background-color: #7C3E66;
  p{
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
  }
`;
export const ProBtnContainer = styled.div`
  width: 50%;
  height: 100%;
  display:flex ;
  flex-direction:row ;
  position: relative;
    justify-content: space-evenly;
  align-items: center;
  background-color: #34f;
`;

export const ProButton = styled.button`
  height: 30px;
    width: 70px;
    background-color: #A5BECC;
    border: none;
    border-radius: 8px;
    cursor: pointer;
`;