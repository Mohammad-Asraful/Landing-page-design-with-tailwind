import React from 'react'

import img1 from "./Images/manage-your-all-data-img-2/img_1.png"
import img2 from "./Images/manage-your-all-data-img-2/img_2.png"
import img3 from "./Images/manage-your-all-data-img-2/img_3.png"
import img4 from "./Images/manage-your-all-data-img-2/img_4.png"
import img5 from "./Images/manage-your-all-data-img-2/img_5.png"
import img6 from "./Images/manage-your-all-data-img-2/img_6.png"

const ManageData2 = () => {
   return (
      <>
         {/* <!-- manage your all data 2 start --> */}
         <section>
            <div className="w-[1200px] m-[0_auto]">   {/* class: container */}
               <div className="manage_data_2 my-[100px]">
                  {/* <!-- manage data 2 header start --> */}
                  <div className="data_2_header text-center mb-[45px]">
                     <p className='text-[28px]'>
                        <span className='text-[#ec0d0d]'># No 1 </span>
                        Trending Apps</p>

                     <h1 className='text-[42px] font-bold'>
                        Easy To Manage Your All Data <br />
                        By this Application.
                     </h1>
                  </div>
                  {/* <!-- manage data 2 header end --> */}

                  {/* <!-- manage data 2 images start --> */}
                  <div className="manage_2_img grid grid-cols-[repeat(3,_auto)] gap-[30px] justify-between items-center">
                     <img className='w-full' src={img1} alt="" />
                     <img className='w-full' src={img2} alt="" />
                     <img className='w-full' src={img3} alt="" />
                     <img className='w-full' src={img4} alt="" />
                     <img className='w-full' src={img5} alt="" />
                     <img className='w-full' src={img6} alt="" />
                  </div>
                  {/* <!-- manage data 2 images end --> */}
               </div>
            </div>
         </section>
         {/* <!-- manage your all data 2 end --> */}
      </>
   )
}

export default ManageData2