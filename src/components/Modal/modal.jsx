import React,{useRef} from 'react'
import { useSpring, animated } from 'react-spring';

import { Background, ModalWrapper, ModalContent, CloseModalButton, ImgContainer, DesContainer } from './modal_style'

const Modal = ({ showModal, setShowModal, Doc }) => {
    const modalRef = useRef();

    const animation = useSpring({
      config: {
        duration: 250
      },
      opacity: showModal ? 1 : 0,
      transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });
    const closeModal = e => {
        if (modalRef.current === e.target) {
          setShowModal(false);
        }
      };

    return (
    <>
    {showModal ?
        (<Background onClick={closeModal} ref={modalRef}>
            <animated.div style={animation}>
              <ModalWrapper showModal={showModal}>
                {/* <ModalImg src={require('./modal.jpg')} alt='camera' /> */}
                <ModalContent>
                    <ImgContainer>
                        <img  src={Doc.image} alt="" />
                    </ImgContainer> 
                    <DesContainer>
                        <h1>{Doc.Item_name}</h1>
                        <p>{Doc.description} </p>
                        <h3>Price : {Doc.price}</h3>
                        <h3>Size : {Doc.size}</h3>
                        <h3>Rate : {Doc.rate === "5" ? "💜💜💜💜💜"  : Doc.rate === "4" ? "💜💜💜💜" : Doc.rate === "3" ? "💜💜💜" : ""}</h3>
                    </DesContainer>
                </ModalContent>
                <CloseModalButton
                  aria-label='Close modal'
                  onClick={() => setShowModal(prev => !prev)}
                />
              </ModalWrapper>
            </animated.div>
          </Background>)
    :null
    }
    </>
    
  )
}

export default Modal