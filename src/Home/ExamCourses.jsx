import React from 'react';


function Home() {
  return (
    <>
    <div className='flex items-center my-10 mx-40 bg-linear-to-r from-pink-50 to-orange-50 p-10 rounded-xl gap-5'>
      <div className='w-[50%]'>
          <h2 className='text-5xl font-bold leading-17'>Prepp IAS, One Stop Destination For UPSC CSE Preparation</h2>
          <p className='mt-10'>Passion-driven mentors & instructors who believe in exam-oriented preparation</p>
          <button className='text-lg rounded mt-7 px-5 py-3 transition-all duration-1000 ease-in-out relative overflow-hidden z-1 after-content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-amber-400 after:-z-2 before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-[0%] before:h-full before:bg-linear-to-r before:from-indigo-500 before:to-indigo-800 before:transition-all before:duration-1000 before:ease-in-out before:-z-1 hover:text-white hover:before:w-full  '>Explore IAS Courses</button>
      </div>
      <div className=' w-[50%] '>
        <img src="images/coursesImg.webp" alt="" className='h-full w-full object-contain' />
      </div>
    </div>
    </>
  )
}

export default Home