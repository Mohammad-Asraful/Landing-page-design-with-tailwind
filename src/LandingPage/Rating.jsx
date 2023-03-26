import React from 'react'

const Rating = () => {
   return (
      <div>
         {/* <!-- rating section start --> */}
         <section>
            <div className="w-[1200px] m-[0_auto]">   {/* class: container */}
               <div className="flex justify-between items-center my-20"> {/* class: rating_section */}
                  <div>
                     <h1>50 K+</h1>
                     <small>Free Download</small>
                  </div>

                  <div>
                     <h1>20 million</h1>
                     <p>3280 avg rating</p>
                  </div>

                  <div className="flex justify-center items-center gap-[60px] p-[25px_82px] rounded-full border border-solid border-[#e1e1e1]">   {/* class: rating_btn */}
                     <button className='border-none outline-none bg-white text-xl font-bold'>amazon</button>
                     <button className='border-none outline-none bg-white text-xl font-bold'>facebook</button>
                  </div>

                  <div>
                     <h1>35 K</h1>
                     <small>Free Download</small>
                  </div>

                  <div>
                     <h1>3,000 +</h1>
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