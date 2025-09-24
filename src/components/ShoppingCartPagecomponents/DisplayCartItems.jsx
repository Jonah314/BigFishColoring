import React from 'react';
import {ProductArray} from '../../productArray.js';

export function DisplayCartItems(){

    const currentShoppingCart = ProductArray;
    /*
    const currentShoppingCart = [{
        title: 'jhenr',
        price: 12.22
    },
        {title: 'asdfasdf',
        price: 23.33
        }    
    ];
    */

    const itemsInCart =[];
    for(const item in currentShoppingCart){
        

        const cartItem=(
            <div className = "grid grid-cols-[20%_60%_20%]  py-4 border-b-1 ">
                    {/* Img  */}
                <div className = 'rounded-lg overflow-hidden aspect-square bg-gray-100  flex items-center'>
                    <img src = {currentShoppingCart[item].Link} />
                </div>

                    {/* Description of Product */}
                <div className='px-4'>
                    <h1>{currentShoppingCart[item].title}</h1>
                    <p> {currentShoppingCart[item].description}</p>
                </div>

                    {/* price div*/}
                <div className='w-full'>
                    <p className='flex justify-center'>{currentShoppingCart[item].price}</p>
                </div>


                
                
            </div>
        );
        itemsInCart.push(cartItem);
    }
    console.log(itemsInCart);
    return itemsInCart;
}