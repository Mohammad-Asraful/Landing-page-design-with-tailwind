import React from 'react'

import big_card from "./Images/maintain-yourself-img/big_card.png"
import top_card from "./Images/maintain-yourself-img/top_card.png"
import bottom_card from "./Images/maintain-yourself-img/bottom_card.png"
import pseudo from "./Images/maintain-yourself-img/pseudo.png"
import pseudo1 from "./Images/maintain-yourself-img/pseudo1.png"
import pseudo2 from "./Images/maintain-yourself-img/pseudo2.png"

const MaintainYourself = () => {
   return (
      <>
         {/* <!-- Maintain Yourself section start --> */}
         <section>
            <div className="w-[1200px] m-[0_auto]">   {/* class: container */}
               <div className="flex justify-between items-center gap-[15px] mt-[200px] mb-[155px]">{/*  class: maintain_yourself */}
                  {/* <!-- image divs start --> */}
                  <div className="">   {/* class: maintain_img */}
                     <div className="relative">   {/* class: image_div */}
                        <img
                           className="w-full"
                           // class: main_image
                           src={big_card}
                           alt="" />

                        <div className="absolute top-[-115px] left-[-30px]">  {/* class: image_1 */}
                           <img src={top_card} alt="" />
                        </div>

                        <div className="absolute bottom-[-150px] left-[-25px]">   {/* class: image_2 */}
                           <img
                              src={bottom_card}
                              alt="" />
                        </div>
                     </div>
                  </div>
                  {/* <!-- image divs end --> */}

                  {/* <!-- text divs start --> */}
                  <div className="maintain_texts">
                     <p className="text-lg mb-6">  {/* class: app_little_header */}
                        <span className='text-[#ec0d0d]'># Why </span>
                        Choose App?</p>
                     <h1 className='mb-5'>
                        You Can Maintain Yourself <br />
                        By Our Application
                     </h1>

                     <div className="apps_details_list">
                        {/* <!--  --> */}
                        <div className='flex justify-between items-center gap-[22px] p-[15px] mb-[10px]'>
                           <div>
                              <img src={pseudo} alt="" />
                           </div>
                           <div>
                              <h3 className='mb-[15px]'>Set your personalized spending budget</h3>
                              <p>
                                 Rhoncus dignissim habitant viverra mollis. Semper
                                 ullamcorper ac pharetra, commodo mauris. Fringilla.
                              </p>
                           </div>
                        </div>
                        {/* <!--  --> */}
                        <div className='flex justify-between items-center gap-[22px] p-[15px] mb-[10px]'>
                           <div>
                              <img
                                 src={pseudo1}
                                 alt="" />
                           </div>
                           <div>
                              <h3 className='mb-[15px]'>User Friendly user Interface Design Layout</h3>
                              <p>
                                 Rhoncus dignissim habitant viverra mollis. Semper
                                 ullamcorper ac pharetra, commodo mauris. Fringilla.
                              </p>
                           </div>
                        </div>
                        {/* <!--  --> */}
                        <div className='flex justify-between items-center gap-[22px] p-[15px] mb-[10px]'>
                           <div>
                              <img
                                 src={pseudo2}
                                 alt="" />
                           </div>
                           <div>
                              <h3 className='mb-[15px]'>Made With Powerful Programming Language</h3>
                              <p>
                                 Rhoncus dignissim habitant viverra mollis. Semper
                                 ullamcorper ac pharetra, commodo mauris. Fringilla.
                              </p>
                           </div>
                        </div>
                        {/* <!--  --> */}
                     </div>
                  </div>
                  {/* <!-- text divs end --> */}
               </div>
            </div>
         </section>
         {/* <!-- Maintain Yourself section end --> */}
      </>
   )
}

export default MaintainYourself