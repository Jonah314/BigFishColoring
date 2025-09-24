import React, {useEffect} from 'react';
import { DisplayCartItems } from './DisplayCartItems.jsx';
import {useState} from 'react';

function ShoppingBox()
{
    const [cartDisplay, setCartDisplay]= useState("");
    
    
    
    return (
        
        <div className = 'w-full flex justify-center'>
            <div className='flex flex-col max-w-2xl mx-8  '>
                {/* Title */}
                <div className='grid grid-cols-[20%_60%_20%] justify-center  '>
                    <div>

                    </div>

                    <div className=' w-full'>
                        <h2 className=" flex justify-center font-bold text-4xl py-4 " >Shopping Cart</h2>
                    </div>

                    <div className=' w-full  content-end' >
                        
                    </div>
                </div>
                {/* Inside the Box */}
                <div className=" border px-8 rounded-xl mb-8" >
                    
                    <div className='grid grid-cols-[20%_60%_20%] justify-center  border-b-1'>
                        <div></div>
                        <div className=' w-full'></div>
                        <div className=' w-full  content-end' >
                            <p className=" flex justify-center"> price </p>
                        </div>
                    </div>
                    
                    <DisplayCartItems/>
                    
                    {/* Total Price Area */}
                     <div className='grid grid-cols-[20%_20%_20%_20%_20%] justify-center min-h-30'>
                        <div></div>
                        <div className=' w-full'></div>
                        <div className=' w-full'></div>
                        <div className=' w-full'>
                            <p className="font-bold"> Total: </p>
                        </div>
                        <div className=' w-full  content-start'>
                            <p className=" flex justify-center"> Total </p>
                        </div>
                    </div>
                

                </div>
            </div>
        </div>
    );
}

export default ShoppingBox;