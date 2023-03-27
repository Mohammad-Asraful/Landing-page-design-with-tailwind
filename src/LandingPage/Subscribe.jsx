import React from 'react'

const Subscribe = () => {
   return (
      <>
         {/* <!-- Subscribe section start --> */}
         <section>
            <div className="w-[1200px] m-[0_auto]">   {/* class: container */}
               <div className="subscribe mb-[70px] bg-[#5f2ded] text-white text-center p-20">
                  <p className='mb-2'># Why Choose App?</p>
                  <h1 className='text-5xl font-bold mb-[50px]'>Subscribed for Update</h1>
                  <div className='flex justify-center items-center'>
                     <input className='text-black border border-solid border-[#d4d8dd] rounded-[47px] h-[65px] w-3/5 p-[15px]' type="email" placeholder="Enter Your Email" />
                     <button className='-ml-[162px] p-[16px_25px] bg-[#5f2ded] rounded-full border-none text-white font-bold'>GET STARTED</button>
                  </div>
               </div>
            </div>
         </section>
         {/* <!-- Subscribe section end --> */}
      </>
   )
}

export default Subscribe