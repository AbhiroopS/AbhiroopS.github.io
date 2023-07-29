import React from 'react';
import Title from './Title';

function Contact(){
    return (
        <div className='flex flex-col mb-10 mx-auto'>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/0855022c-a5e8-4d8f-8888-f00616c7ea6e" method="POST" className='flex flex-col w-full md:w-7/12'>
                    <Title>Contact</Title>
                    <input type="text" name="name" placeholder='Name' className='p-2 bg-transparent border-2 rounded-md focus:outline-none'/>
                    <input type="text" name="email" placeholder='Email' className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'/>
                    <textarea name="message" placeholder='Message' rows="10" className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-non'/>
                    <button type='button' className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;