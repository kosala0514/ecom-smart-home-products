import React,{useRef} from 'react'
import { useSpring, animated } from 'react-spring';

import { Background, ModalWrapper, ModalContent, CloseModalButton, ImgContainer, DesContainer } from './modal_style'

const SearchModal = ({ showModal, setShowModal, Doc }) => {
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
                <ul id="myProduct">
                {product.map((doc, index) => {
                    return (
                        <li  key={index+1} >
                            <a>{doc.Item_name}</a>
                        </li>
                    );
                })}
                </ul> 
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

export default SearchModal