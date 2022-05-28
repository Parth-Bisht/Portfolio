import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center p-4">
      <form method="POST" action="https://getform.io/f/5db53157-0482-440e-80d4-b074a904148c" className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-800 text-gray-300'>Contact</p>
              <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - bishtparth795@gmail.com</p>
          </div>
          <input className='bg-[#ccd6f6] p-2 text-black' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#ccd6f6] text-black' type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#ccd6f6] p-2 text-black' name="message" rows="10" placeholder='Message'></textarea>
          <button className='text-white border-2 hover:bg-pink-800 hover:border-pink-800 px-4 py-3 my-8 mx-auto flex items-center'>Let's Colaborate</button>
      </form>
    </div>
  )
}

export default Contact
