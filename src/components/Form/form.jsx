import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { Background, Btn, Wrapper, BtnReg } from './form_styled';
import FormInput from './form_input'

import CustomerService from '../../config/auth';

const Form = () => {

  const navigate = useNavigate();

  const [formChange, setFormChange] = useState(true)
  
  const [valuesSignIn, setValuesSignIn] = useState({
    email:"",
    password:"",
  });

  const inputsSignIn = [
    {
      id :1,
      name: "email",
      type:"text",
      placeholder:"Email Address",
      label:"Email Address",
    },
    {
      id :2,
      name: "password",
      type:"password",
      placeholder:"Password",
      label:"Password",
    },
  ]

  const [valuesSignUp, setValuesSignUp] = useState({
    username:"",
    email:"",
    address:"",
    phone:"",
    password:"",
  });

  const inputsSignUp = [
    {
      id :1,
      name: "username",
      type:"text",
      placeholder:"Username",
      label:"Username",
    },
    {
      id :2,
      name: "email",
      type:"text",
      placeholder:"Email Address",
      label:"Email Address",
    },
    {
      id :3,
      name: "address",
      type:"text",
      placeholder:"Address",
      label:"Address",
    },
    {
      id :4,
      name: "phone",
      type:"text",
      placeholder:"Phone Number",
      label:"Phone Number",
    },
    {
      id :5,
      name: "password",
      type:"password",
      placeholder:"Password",
      label:"Password",
    },
  ]

  const onChangeSignUp = (e) => {
    setValuesSignUp({...valuesSignUp,
      [e.target.name]:e.target.value
    })
  }

  const onChangeSignIn = (e) => {
    setValuesSignIn({...valuesSignIn,
      [e.target.name]:e.target.value
    })
  }

  const changeForm = () => {
    setFormChange(prev => !prev)
  }

  const navigateToProducts =() => {
    navigate('/products')
  }

  const registerCustom = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    const UserData = Object.fromEntries(data.entries());
    if(UserData.username === "" || UserData.email==="" || UserData.address ==="" || UserData.phone==="" || UserData.password===""){
      alert("All fields are mandatory!");
      return;
    }
    const newCustom = {
      username:UserData.username,
      email:UserData.email,
      address:UserData.address,
      phone:UserData.phone,
      password:UserData.password,
    };
    console.log(newCustom);
    try {
      await CustomerService.addCustomer(newCustom)
      .then((docRef) => {
        // console.log(ID)
        // console.log(newCustom.username)
        localStorage.setItem("custom-id",docRef.id)
        localStorage.setItem("name",newCustom.username)
        alert("Registration successfully!")
        setValuesSignUp("");
        navigateToProducts();
      })
      
    } catch (error) {
      alert(error.message)
    }

    
  };

  const loginCustomer = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    const UserData = Object.fromEntries(data.entries());

    if(UserData.email === "" || UserData.password === ""){
      alert("All fileds are mandatory");
      return;
    }
    try {
      CustomerService.getAllCustomers().then((querySnapshot) => {
        querySnapshot.forEach(doc => {
          // console.log(doc.data().email)
          if(UserData.email === doc.data().email){
            console.log("User Found!");
            if (UserData.password === doc.data().password) {
              console.log("Password Match! "+ doc.data().username);
              localStorage.setItem("custom-id",doc.id);
              localStorage.setItem("name",doc.data().username);
              alert("Login successfull!")
              setValuesSignUp("");
              navigateToProducts();
            }
            else{
              alert("Wrong Password!");
            }
          }else{
            alert("User Not Exists!");
          }
        });
      });
    } catch (error) {
      alert(error.message)
    } 
  }

  return (
      <Background>
          <Wrapper>
            {formChange ?
              <form onSubmit={loginCustomer}>
                <h1 style={{marginTop:"80px"}}>Welcome to SmartHome!</h1>
          {inputsSignIn.map((input) => (
                    <FormInput 
                      key={input.id}
                      {...input} 
                      value={valuesSignIn[input.name]}
                      onChange={onChangeSignIn}
                    />
                  ))}
                  <p onClick={changeForm}>Don't have an account ? Sign Up</p>
                  <Btn type='submit'>Login</Btn>
              </form>
            : 
            <form onSubmit={registerCustom}>
              <h1  style={{marginTop:"-10px"}}>Welcome to SmartHome!</h1>
          {inputsSignUp.map((input) => (
                    <FormInput 
                      key={input.id}
                      {...input} 
                      value={valuesSignUp[input.name]}
                      onChange={onChangeSignUp}
                    />
                  ))}
                  <p onClick={changeForm}>Have an account ? Login</p>
                  <BtnReg type='submit'>SignUp</BtnReg>
            </form>
            }
            
          </Wrapper>
      </Background>
    
  );
}

export default Form