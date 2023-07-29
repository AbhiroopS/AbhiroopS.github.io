import React from 'react';
import resume from '../assets/Resume.pdf'
function Resume(){
    return (
        <div className='flex items-center justify-center'>
            <a href={resume} download="Abhiroop Shome - Resume">
            <button className="flex flex-row gap-3 border-stone-600 border-2 rounded-xl py-3 px-3 mb-6 dark:border-white">
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
            </button>
            </a>
        </div>
    )
}

export default Resume;