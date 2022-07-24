import React, { useEffect, useState } from 'react';
import { Container, Content, Grid } from '../components/Card/card';
import Modal from '../components/Modal/modal';

import ProductsService from '../config/products';

const Products = () => {

    const [openContent, setOpenContent] = useState(false);

    const [showDoc, setShowDoc] = useState("")

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
    const openModal =(doc) =>{
        setOpenContent(prev=> !prev);
        setShowDoc(doc);
    }
  return (
    <Grid>
            {product.map((doc, index) => {
                return (
                    <div  key={index+1} >
                        <Container onClick={() => openModal(doc)} >
                            <img src={doc.image} alt="NO" />
                            <Content>
                                <h1>{doc.Item_name}</h1>
                                <p>{doc.description}</p>
                            </Content>
                        </Container>
                    </div>
                        
                    
                );
            })}
        <Modal showModal={openContent} setShowModal={setOpenContent} Doc={showDoc} />
    </Grid>
  )
}

export default Products