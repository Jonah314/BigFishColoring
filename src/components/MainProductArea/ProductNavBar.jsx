import React from 'react';
import {useState} from 'react';
import  displayTags  from './displayTags.jsx';


function ProductNavBar({onSendTag}){
    
   
   const handleClick = (tag) =>{
        onSendTag(tag);
   }
    
    




    return(
        <div className='bg-pink-400 min-h-[1000px] min-w-16 p-2 ml-3'>
            <h1>Product Nav Bar</h1>
            
            <ul>
                <li><button onClick = {()=> handleClick('ResetTag')}>All Stickers</button></li>
                {displayTags(onSendTag)}
                
            </ul>
        </div>
    )
}

export default ProductNavBar;

