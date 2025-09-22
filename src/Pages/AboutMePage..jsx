import React from 'react';
import ProfilePic from '../Images/Tired Gorilla.png';
import  Banner  from '../components/Banner';


function AboutMePage(){
    return(
        <>
            
            <Banner/>
            <div className = 'place-items-center'>
                <h1 className='text-center text-6xl'> About The Tired Gorilla </h1>
                <div className = ' max-w-7xl grid grid-cols-2 h-[600px] m-10'>
                    <div className='place-content-center'>
                        <div className='h-[500px] place-items-center overflow-hidden flex'>
                            <img className = 'object-scale-down' src ={ProfilePic} />
                        </div>
                    </div>
                    <div className='mx-10 my-auto '>
                        <p className='indent-8 leading-loose'>Hey there! I’m The Tired Gorilla—an artist who’s been bringing ideas to 
                            life through art for over 10 years. What started as sketching for fun has grown 
                            into a way to share my creativity with the world. Today, I turn my art into 
                            stickers, mugs, magnets, t-shirts, and more, so anyone can carry a piece of my 
                            imagination with them.</p>
                        <p className='indent-8 leading-loose'>When I’m not creating, you’ll probably find me enjoying a banana sundae with my wife,
                            taking long walks on the beach, or shooting hoops. I’m also a big fan of kicking 
                            back with a classic Adam Sandler movie.</p>
                        <p className = 'indent-8 leading-loose'>Art has always been my way of connecting with people, and I love doing custom work that 
                            brings your unique ideas to life. Whether it’s a playful sticker or a design for your 
                            favorite hoodie, my goal is to make art that feels fun, personal, and a little unexpected.</p>
                        <p className = 'indent-8 leading-loose'>Thanks for stopping by and supporting The Tired Gorilla—I couldn’t do this without you!</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default AboutMePage;