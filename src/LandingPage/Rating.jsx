import React from 'react'

const Rating = () => {
   return (
      <div>
         {/* <!-- rating section start --> */}
         <section>
            <div className="w-[1200px] m-[0_auto]">   {/* class: container */}
               <div className="flex justify-between items-center my-20"> {/* class: rating_section */}
                  <div>
                     <h2 className='font-bold'>50 K+</h2>
                     <small>Free Download</small>
                  </div>

                  <div>
                     <h2 className='font-bold'>20 million</h2>
                     <p>3280 avg rating</p>
                  </div>

                  <div className="flex justify-center items-center gap-[60px] p-[25px_82px] rounded-full border border-solid border-[#e1e1e1]">   {/* class: rating_btn */}
                     <button className='border-none outline-none bg-white text-xl font-bold'>amazon</button>
                     <button className='border-none outline-none bg-white text-xl font-bold'>facebook</button>
                  </div>

                  <div>
                     <h2 className='font-bold'>35 K</h2>
                     <small>Free Download</small>
                  </div>

                  <div>
                     <h2 className='font-bold'>3,000 +</h2>
                     <small>3280 avg rating</small>
                  </div>
               </div>
            </div>
         </section>
         {/* <!-- rating section end --> */}
      </div>
   )
}

export default Rating