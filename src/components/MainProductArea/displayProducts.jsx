import React from 'react';
import {ProductArray} from '../../productArray.js';
import { ShoppingCart } from 'react-flaticons';
import './ProductAreaCss.css';


export function displayProducts(tag){
    
    const newProductArr = ProductArray;

    // Cart Array
    const CartArray = [];

    function addToCart(){
        
    }
        
    
    
    if (tag==false|| tag== 'ResetTag'){
            const products =[];
            for(const prod in newProductArr){
            const product =(
                <div className = 'productBox grid grid-rows-auto '>
                
                    <div className = 'rounded-lg overflow-hidden aspect-square bg-gray-100 hover:scale-[1.1] flex items-center'>
                        <img src = {newProductArr[prod].Link} />
                    </div>
                    
                    <h1 className = 'text-center text-sm mt-2'>{newProductArr[prod].title}</h1>
                    
                    <h2 className = 'bg-blue-500 mx-2 md-3 text-sm'>DropDown Menu </h2>
                    
                    <div className= 'grid grid-cols-2 mx-4 text-base my-2'>
                        <div className='place-content-start items-center flex '><h1>${newProductArr[prod].price}</h1></div>
                        <button 
                        dataName = {newProductArr[prod].title} dataPrice = {newProductArr[prod].price} dataInfo= {newProductArr[prod].description} 
                        dataImg={newProductArr[prod].Link}
                        onClick={addToCart}
                        className= 'place-content-evenly rounded-lg items-center flex bg-gray-100 border-2 border-white hover:border-black'>
                            <ShoppingCart color='black' className='size-6'  /></button>
                    </div>
                    


            </div>
            );
            products.push(product);
            }
            return products;
        }else {
        
        const products =[];
        for(const prod in newProductArr){
            if(ProductArray[prod].Tags.includes(tag)){
            const product =(
                <div className = 'productBox grid grid-rows-auto '>
                
                    <div className = 'rounded-lg overflow-hidden aspect-square bg-gray-100 hover:scale-[1.1] flex items-center'>
                        <img src = {newProductArr[prod].Link} />
                    </div>
                    
                    <h1 className = 'text-center text-sm mt-2'>{newProductArr[prod].title}</h1>
                    
                    <h2 className = 'bg-blue-500 mx-2 md-3 text-sm'>DropDown Menu </h2>
                    
                    <div className= 'grid grid-cols-2 mx-4 text-base my-2'>
                        <div className='place-content-start items-center flex '><h1>${newProductArr[prod].price}</h1></div>
                        <div className= 'place-content-evenly rounded-lg items-center flex bg-gray-100 border-2 border-white hover:border-black'><ShoppingCart color='black' className='size-6'  /></div>
                    </div>
                    


            </div>
            );
            products.push(product);
            }
        } return products;
    }
    }    