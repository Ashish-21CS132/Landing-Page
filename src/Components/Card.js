import React from 'react'

const Card = () => {
  return (
    <div className=" w-full py-12 px-4">
      <div className="max-w-[1240px] grid grid-cols-3 gap-4 ">
        <div className="w-full flex flex-col justify-between items-center shadow-xl p-12 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20" src="./Images/single.png" alt="img" />
          <h1 className="py-2 text-xl font-bold">Web development</h1>
          <h1 className="py-2 text-xl font-bold">450$</h1>
          <div className="py-2 text-center">
            <h1 className="p-2 ">auther name Ashish</h1>

            <h1 className="p-2 ">well-structured course of MERN</h1>
            <h1 className="p-2 ">
              You learn all the concept of MERN ancakk kancnsk nckank
            </h1>
            <h1 className="p-2 ">Get internship from top companies</h1>
          </div>
          <button className="btn btn-primary">Start trail</button>
        </div>

        <div className="w-full flex flex-col justify-between items-center shadow-xl p-12 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20" src="./Images/single.png" alt="img" />
          <h1 className="py-2 text-xl font-bold">Web development</h1>
          <h1 className="py-2 text-xl font-bold">450$</h1>
          <div className="py-2 text-center">
            <h1 className="p-2 ">auther name Ashish</h1>

            <h1 className="p-2 ">well-structured course of MERN</h1>
            <h1 className="p-2 ">
              You learn all the concept of MERN ancakk kancnsk nckank
            </h1>
            <h1 className="p-2 ">Get internship from top companies</h1>
          </div>
          <button className="btn btn-primary">Start trail</button>
        </div>

        <div className="w-full flex flex-col justify-between items-center shadow-xl p-12 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20" src="./Images/single.png" alt="img" />
          <h1 className="py-2 text-xl font-bold">Web development</h1>
          <h1 className="py-2 text-xl font-bold">450$</h1>
          <div className="py-2 text-center">
            <h1 className="p-2 ">auther name Ashish</h1>

            <h1 className="p-2 ">well-structured course of MERN</h1>
            <h1 className="p-2 ">
              You learn all the concept of MERN ancakk kancnsk nckank
            </h1>
            <h1 className="p-2 ">Get internship from top companies</h1>
          </div>
          <button className="btn btn-primary">Start trail</button>
        </div>
        
      </div>
    </div>
  )
}

export default Card
