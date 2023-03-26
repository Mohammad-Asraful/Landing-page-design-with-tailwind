import React from 'react'

import man_skyblue from "./Images/manage-data-img/man_skyblue.png"
import vector_line from "./Images/manage-data-img/vector_line.png"
import man_orange from "./Images/manage-data-img/man_orange.png"
import inner_circle_image from "./Images/manage-data-img/inner_circle_image.png"
import long from "./Images/manage-data-img/long.png"
import mobile from "./Images/manage-data-img/mobile.png"
import man_blue from "./Images/manage-data-img/man_blue.png"
import man_pink from "./Images/manage-data-img/man_pink.png"

const ManageApplication = () => {
   return (
      <>
         {/* <!-- Manage Application section start --> */}
         <section>
            <div className="w-[1200px] m-[0_auto]">   {/* class: container */}
               <div className="h-[900px] mb-[100px] flex justify-between items-between gap-[10px]">  {/* class: manage_app */}
                  {/* <!--  --> */}
                  <div className="flex justify-between items-center flex-col">   {/* class: manage_left */}
                     <div className="">
                        {/* class: manage_left_card */}
                        <div className='w-[260px] p-5 bg-white shadow-[0px_0px_4px_#00000012] rounded-lg mb-5'>
                           <h4>Responsive Friendly Design</h4>
                           <p>
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                              Ullam, perspiciatis.
                           </p>
                        </div>
                        <img src={man_skyblue} alt="" />
                     </div>

                     <div>
                        <img
                           className=" mb-[50px]"
                           // class: manage_img_1
                           src={vector_line}
                           alt="" />
                        <img src={man_orange} alt="" />
                     </div>
                  </div>
                  {/* <!--  --> */}
                  <div className="">   {/* class: manage_middle */}
                     <h1 className='w-[485px] m-[0_auto] text-right text-[30px] mb-10'>
                        Easy To Manage Your All Data By <br />
                        this Application
                     </h1>

                     <p className='text-[15px] text-center mb-5'>
                        Fitness create ready Application for your business and Fitness
                        powered website
                     </p>

                     <div className="flex justify-center items-center">   {/* class: manage_img */}
                        <div>
                           <img
                              src={inner_circle_image}
                              alt="" />
                        </div>

                        <div className="flex justify-between items-center rounded-full">   {/* class: manage_input */}
                           <input className='w-[250px] h-10 outline-none border border-solid border-[#d4d8dd] rounded-[47px] pl-[10px]' type="text" placeholder="Enter your Mail..." />

                           <button className='h-10 ml-[-30px] w-max flex items-center justify-center text-white bg-[#5f2ded] border border-solid border-[#5f2ded1a] shadow-[0px_6px_14px_3px_#5f2ded2b] rounded-[29px] p-[12px_20px] outline-none'>Get Started</button>
                        </div>

                        <div>
                           <img src={long} alt="" />
                        </div>
                     </div>
                     {/* <!--  --> */}
                     <div className="text-center">   {/* class: manage_main_img */}
                        <img src={mobile} alt="" />
                     </div>
                  </div>
                  {/* <!--  --> */}
                  <div className="flex justify-between items-center flex-col">   {/* class: manage_app_profile */}
                     <img src={man_blue} alt="" />
                     <img src={man_pink} alt="" />
                  </div>
               </div>
            </div>
         </section>
         {/* <!-- Manage Application section end --> */}
      </>
   )
}

export default ManageApplication