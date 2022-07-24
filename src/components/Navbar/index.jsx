import React, { useState, useEffect } from 'react';
import { CloseSearchButton } from '../Modal/modal_style';
import ProductsService from '../../config/products';
import ProfileModal from '../Modal/profile_modal';
import './nav.css'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  SearchBtn
} from './navbar_elements';
import SearchModal from '../Modal/search_modal';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState("")
  const [user_id, setId] = useState("")
  const [edit, setEDit] = useState(false)
  const [searchItem, setSearchItem] = useState(false)

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
  
  const searchProducts = (event) => {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myProduct");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
  }

  const switchToSearch = () => {
    setEDit(prev => !prev)
    setSearchItem(prev => !prev)
  }

  return (
    <>
      <Nav>
        <NavLink to='/'>
            <h1 style={{color:"#7C3E66"}}>SmartHome</h1>
          {/* <img src={require('../../images/logo.svg')} alt='logo' /> */}
        </NavLink>
        {/* {
          edit ?
          <div>
            <input id="myInput" placeholder="Serach..." onChange={searchProducts}/>
            <CloseSearchButton onClick={switchToSearch} />
            <SearchModal showModal={searchItem} setShowModal={setSearchItem} Doc={product}/>
            <ul id="myProduct">
            {product.map((doc, index) => {
                return (
                    <li  key={index+1} >
                        <a>{doc.Item_name}</a>
                    </li>
                );
            })}
            </ul>
          </div>
          :<SearchBtn onClick={switchToSearch} />
        } */}
        
        {user_id === null ? null : 
          <NavBtn onClick={openProfile}><h1>{name.split('')[0]}</h1></NavBtn>
        }
      </Nav>
      <ProfileModal showModal={showModal} setShowModal={setShowModal}/>
    </>
  );
};

export default Navbar;