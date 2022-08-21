import React from 'react'
import REACT from '../assets/react.png';
import CSS from '../assets/css.png';
import GITHUB from '../assets/github.png';
import HTML from '../assets/html.png';
import JS from '../assets/javascript.png';
import MONGO from '../assets/mongo.png';
import NODE from '../assets/node.png';
import TAILWIND from '../assets/tailwind.png';
import TYPESCRIPT from '../assets/typescript.png';
import REDUX from '../assets/redux.png';
import BOOT from '../assets/bootstrap.png';
import EXPRESS from '../assets/express.png';

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 w-full h-screen '>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-pink-800 inline'>Skills</p>
            <p className='py-4'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JS} alt="HTML icon" />
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={REACT} alt="HTML icon" />
                <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={GITHUB} alt="HTML icon" />
                <p className='my-4'>GITHUB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={NODE} alt="HTML icon" />
                <p className='my-4'>NODE</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={MONGO} alt="HTML icon" />
                <p className='my-4'>MONGO</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={TAILWIND} alt="HTML icon" />
                <p className='my-4'>TAILWIND</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={TYPESCRIPT} alt="HTML icon" />
                <p className='my-4'>TYPESCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={REDUX} alt="HTML icon" />
                <p className='my-4'>REDUX</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={BOOT} alt="HTML icon" />
                <p className='my-4'>BOOTSTRAP</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={EXPRESS} alt="EXPRESS icon" />
                <p className='my-4'>EXPRESS</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Skills
