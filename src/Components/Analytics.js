import React from 'react'

const Analytics = () => {
  return (
    <div className="my-4 mx-2">
      <div className=" max-w-[1240px] mx-auto grid grid-cols-2">
        <img
          className=" w-[500px] my-4 mx-auto"
          src="./Images/laptop.jpg"
          alt="img"
        />
        <div className=" flex flex-col justify-center p-2">
          <h1 className='text-xl text-red-500 font-bold font-serif'>Learn from experts</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, hic
            neque! In explicabo, nam, tenetur nemo numquam quasi asperiores ab
            ullam impedit ducimus a tempore ad, quia mollitia repudiandae ea!
          </p>
          {/* <button className='bg-black text-white mt-4 w-[150px] rounded-md'>Get started</button> */}
        <button className='btn btn-primary w-[150px] mt-4 '>Get started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
