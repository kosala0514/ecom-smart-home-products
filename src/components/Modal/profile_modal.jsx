import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useNavigate } from 'react-router-dom';
// import FormControl from '@mui/material/FormControl';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
// import TextField from '@mui/material/TextField';

import CustomerService from "../../config/auth";
import {
  Background,
  ModalWrapper,
  ProModalContentRow1,
  CloseModalButton,
  ProImgContainer,
  ProEditContainer,
  ProContentContainer,
  ProBtnContainer,
  ProModalContent,
  TextEdit,
  ProButton,
} from "./modal_style";
import Profile from "../../assets/img/profile.jpg";
import InputFields from "../InputField/input";

const ProfileModal = ({ showModal, setShowModal}) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  let ID  = window.localStorage.getItem("custom-id");
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    ID = window.localStorage.getItem("custom-id")
    CustomerService.getCustomer(ID).then((snapshot) => {
      setCustomerData(snapshot.data());
      setName(customerData.username);
      setAddress(customerData.phone);
      setPhone(customerData.address);
    });
  }, []);

  
  

  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const updateExistingCustomer = async() =>{    
    
    if(!name || !address || !phone){
      alert("All fields are required!")
    }else{
      const updatedCustomer = {
        username:name,
        email:customerData.email,
        address:address,
        phone:phone,
        password:customerData.password,
      };
      // console.log("UPdated Customer " + updatedCustomer.username)
      try {
        await CustomerService.updateCustomer(ID,updatedCustomer)
        .then((docRef) => {
          // console.log(updatedCustomer.username)
          localStorage.removeItem("name")
          localStorage.setItem("name",updatedCustomer.username)
          alert("Updated successfully!")
          setShowModal(false)
        })
      } catch (error) {
        alert(error.message)
      }
    }
    
  }

  const deleteAccount = async() => {
    let text = "Do you want to delete account. If so you cann't login with this email!";
    if (confirm(text) == true) {
      try {
        await CustomerService.deleteCustomer(ID).then(() =>{
          alert("If you want to access this site, Please register first!")
        })
        localStorage.clear();
        setShowModal(false)
      } catch (error) {        
        alert(error.message)
      }
    } else {
      setShowModal(false)
    }
  }

  const Logout = () => {
    localStorage.clear();
    setShowModal(false);
    navigate('/');
  }


  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ProModalContent>
                <ProModalContentRow1>
                  <ProImgContainer>                    
                    <img src={Profile} alt="" />
                  </ProImgContainer>
                  <ProEditContainer>
                    <TextEdit onChange={handleNameChange} defaultValue={name} />
                    <TextEdit onChange={handlePhoneChange} defaultValue={phone} />
                    <TextEdit onChange={handleAddressChange} defaultValue={address} />
                    <button onClick={updateExistingCustomer}>Update</button>                 
                  </ProEditContainer>
                </ProModalContentRow1>
                <ProModalContentRow1>
                  <ProContentContainer>
                    <p>{name}</p>
                    <p>{customerData.email}</p>
                    <p>{phone}</p>
                    <p>{address}</p>
                  </ProContentContainer>
                  <ProBtnContainer>
                    <ProButton onClick={Logout}>Logout</ProButton>
                    <ProButton onClick={deleteAccount}>Delete</ProButton>
                    </ProBtnContainer>
                </ProModalContentRow1>

                {/* <h1>Name : {customerData.username}</h1>
                    <h3>Email : {customerData.email}</h3>
                    <h3>Phone Number  {customerData.phone}</h3>
                    <h3>Address : {customerData.address}</h3> */}
              </ProModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default ProfileModal;
