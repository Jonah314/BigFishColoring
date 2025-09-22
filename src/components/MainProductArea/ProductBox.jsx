import React, { useEffect } from 'react';
import './ProductAreaCss.css';
import { displayProducts } from './displayProducts.jsx';
import { useState } from 'react';


function ProductBox({tagSent}){
    const [productDisplay, setDisplay] = useState(displayProducts(''));
    
    
    function changeDisplay(tag){
        
        setDisplay(displayProducts(tag));
    }
   
    useEffect(()=>{
        if(tagSent){
            changeDisplay(tagSent);
        }
    },[tagSent]);
    
    
    
    return (
        <div className='grid m-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4'>
            {productDisplay}
        </div>
    );
}

export default ProductBox;


