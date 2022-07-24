import React, { useState, useEffect } from 'react';
import ProductsService from '../../config/products';
import ProfileModal from '../Modal/profile_modal';
import './nav.css'
import {
  Nav,
  NavLink,
  NavBtn,
} from './navbar_elements';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState("")
  const [user_id, setId] = useState("")

  const openProfile = () => {
    setShowModal ( prev => !prev);
  }

  const [product, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const data = await ProductsService.getAllProducts();
        console.log(data);
        setProducts(data.docs.map((doc) => ({
            ...doc.data(), id: doc.id
        })))
    }

  useEffect(() => {
    const user = localStorage.getItem("name");
    setName(user)
    const user_id = localStorage.getItem("custom-id");
    setId(user_id)
  })

  return (
    <>
      <Nav>
        <NavLink to='/'>
            <h1 style={{color:"#7C3E66"}}>SmartHome</h1>
        </NavLink>
        
        {user_id == null ? null : 
          <NavBtn onClick={openProfile}><h1>{name.split('')[0]}</h1></NavBtn>
        }
      </Nav>
      <ProfileModal showModal={showModal} setShowModal={setShowModal}/>
    </>
  );
};

export default Navbar;