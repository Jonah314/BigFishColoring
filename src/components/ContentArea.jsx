import React from 'react';

import ContentBar from './MainProductArea/ContentBar';
import ProductArea from './MainProductArea/ProductArea';
import ProductNavBar from './MainProductArea/ProductNavBar';
import { useState } from 'react';

function ContentArea(){
    //const [productDisplay, setDisplay] = useState(displayProducts('animal'));
    const [tagSent, setOnSendTag] = useState('');

    return(
        <div className ='md'>
        <div className ='max-w-7xl  mx-auto grid grid-cols-[160px_1fr] gap-3'>
            <ProductNavBar onSendTag={(tag)=>setOnSendTag(tag)} />
            <div className= 'm-h-full   grid grid-rows-[40px_1fr] max-w[1280px] mr-3'>
                
                    <ContentBar/>
                    <ProductArea tagSent={tagSent}/>
                
            </div>
            
        </div>
        </div>
    )
}

export default ContentArea;

