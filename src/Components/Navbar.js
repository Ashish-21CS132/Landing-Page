import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="bg-blue-400 p-4 ">
        <div className="border border-black flex justify-between items-center h-10 max-w-[1240px] mx-auto px-4 ">
          <h1 className="w-full text-3xl font-bold">Ashish Techie</h1>
          <ul className="flex text-white">
            <li className="p-4 cursor-pointer  hover:text-blue-100">Home</li>
            <li className="p-4 cursor-pointer hover:text-blue-100">Company</li>
            <li className="p-4 cursor-pointer hover:text-blue-100">About</li>
            <li className="p-4 cursor-pointer hover:text-blue-100">Contact</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
