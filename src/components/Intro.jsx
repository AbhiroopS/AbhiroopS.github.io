import React from 'react';

function Intro(){
    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
            <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold dark:text-white'>Abhiroop Shome</h1>
            <p className='text-base md:text-xl mb-3 font-medium'>Programmer</p>
            <p className='text-sm max-w-xl mb-6 font-bold'>
            B.Tech graduate diving into the world of software development.<br></br>
            I'm proficient in Python. From libraries to frameworks. I've got you covered with SQL queries, relational or non-relational databases.<br></br>
            I've also been exploring Microsoft Azure's cloud computing platform, using virtual machines, databases, and storage to deploy and manage applications.<br></br>
            I'm a lifelong learner and thrive on collaboration if you're looking for a passionate entry-level pro in Python, Databases or Azure!
            </p>
        </div>
    )
}

export default Intro;