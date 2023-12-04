import React from 'react'

const Newsletter = () => {
  return (
    <div className="text-white py-16 px-4 bg-blue-400 w-full">
      <div className=" max-w-[1240px] mx-auto grid grid-cols-3 ">
        <div className=" col-span-2 my-4">
          <h1 className="text-3xl font-bold">
            Want to learn latest it skills?
          </h1>
          <p>Sign the our new newsletter.</p>
        </div>

        <div className=" flex flex-col justify-between ">
          <input
            className="p-3 flex w-full rounded-md text-black"
            type="email"
            placeholder="Email.."
          />
          <button className="mt-2 btn btn-primary w-[150px]">
            Get started
          </button>
          <p>We care about the protection of data.</p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
