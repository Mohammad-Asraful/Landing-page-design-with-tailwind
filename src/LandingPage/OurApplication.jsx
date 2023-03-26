import React from 'react'

import OurApplicationImg from "./Images/our_application/img_01-1.png.png"

const OurApplication = () => {
   return (
      <>
         {/* <!-- Our Application section start --> */}
         <section className="">  {/* class: application */}
            <div className="w-[1200px] m-[0_auto]">   {/* class: container */}
               <div className=" flex justify-between items-center gap-5 p-[95px_20px]">  {/* class: application_section */}
                  {/* <!-- Application text start --> */}
                  <div className="w-[500px]">
                     {/* class: app_text */}
                     <p className="text-lg mb-5">  {/* class: app_small_header */}
                        <span className='text-[#ec0d0d]'># Why </span>
                        Choose App?</p>

                     <h2 className="text-3xl mb-[39px]">  {/* class: app_header */}
                        You can maintain yourself by our Application
                     </h2>
                     <p className="text-[#817e7e] mb-[35px]">     {/* class: app_description */}
                        Sed pellentesque lectus phasellus vivamus tempus lectus aliquam ut
                        convallis. Urna at amet et risus dignissim arcu. Rhoncus bibendum
                        habitant
                     </p>

                     <div className="mb-[50px] flex justify-start items-center gap-[10px]">   {/* class: app_btn */}
                        <button className='w-max text-black bg-white border border-solid border-[#5f2ded1a] shadow-[0px_6px_14px_3px_#5f2ded2b] rounded-[29px] p-[12px_28px] outline-none hover:text-white hover:bg-[#5f2ded]'>Earn Money</button>
                        <button className='w-max text-black bg-white border border-solid border-[#5f2ded1a] shadow-[0px_6px_14px_3px_#5f2ded2b] rounded-[29px] p-[12px_28px] outline-none hover:text-white hover:bg-[#5f2ded]'>Get Fitness Tips</button>
                        <button className='w-max text-black bg-white border border-solid border-[#5f2ded1a] shadow-[0px_6px_14px_3px_#5f2ded2b] rounded-[29px] p-[12px_28px] outline-none hover:text-white hover:bg-[#5f2ded]'>Hire Couch</button>
                     </div>

                     <div className="leading-[3]">   {/* class: check_input_list */}
                        <div className='flex justify-start items-center gap-[10px] w-max'>
                           <input checked type="checkbox" />
                           <p>Refresing to get such a personal touch</p>
                        </div>

                        <div className='flex justify-start items-center gap-[10px] w-max'>
                           <input checked type="checkbox" />
                           <p>If you are going to use a passage</p>
                        </div>

                        <div className='flex justify-start items-center gap-[10px] w-max'>
                           <input checked type="checkbox" />
                           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>

                        <div className='flex justify-start items-center gap-[10px] w-max'>
                           <input checked type="checkbox" />
                           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                     </div>
                  </div>
                  {/* <!-- Application text end --> */}

                  {/* <!-- Application image start --> */}
                  <div className="">   {/* class: app_img */}
                     <img className='w-full' src={OurApplicationImg} alt="" />
                  </div>
                  {/* <!-- Application image end --> */}
               </div>
            </div>
         </section>
         {/* <!-- Our Application section end --> */}
      </>
   )
}

export default OurApplication