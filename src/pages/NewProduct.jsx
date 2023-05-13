import React from 'react';
import ProductNew from '../Components/newProduct/ProductNew';
import {  productInputs } from '../formSource';

function NewProduct(props) {
    return (
        <div>
           <ProductNew inputs={productInputs}/> 
        </div>
    );
}

export default NewProduct;