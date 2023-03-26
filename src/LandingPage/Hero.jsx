import React from 'react'

import vector_img from "./Images/hero-img/vector_img.png"
import man_skyblue from "./Images/hero-img/man_skyblue.png"
import mobile_img from "./Images/hero-img/mobile_image.png"
import man_blue from "./Images/hero-img/man_blue.png"

const Hero = () => {
   return (
      <>
         {/* <!-- Hero section start --> */}
         <section>
            <div className="w-[1200px] m-[0_auto]">   {/* class: container */}
               <div className="flex justify-between items-center gap-[30px]">    {/* class: hero_div */}
                  {/* <!-- get benifit start --> */}
                  <div>
                     <div className="flex justify-end items-center mb-[10px] mr-5">   {/* class: hero_vector */}
                        <img src={vector_img} alt="" />
                     </div>

                     <p className="text-lg">    {/* class: small_headline */}
                        <span className='text-[#ec0d0d] font-medium text-lg'># No1 </span>
                        Trending Apps On Play Store.
                     </p>

                     <h1 className="text-[52px] w-[500px] mt-[30px] mb-9">    {/* class: benifit_headline */}
                        Get <span className="underline"> Benifit </span>
                        By Using Trending
                        <span className="text_circle"> Apps </span>
                     </h1>

                     <p className="w-[500px] text-lg text-[#677294] mb-[25px]"> {/* class: hero_description */}
                        Increase productivity with a simple to-do app. app for managing
                        your personal budgets
                     </p>

                     <div className="flex justify-start items-center gap-[30px]">   {/* class: hero_button */}
                        <button className='py-4 px-[25px] bg-white rounded-[3px] border border-solid border-[#5f7aa326] text-black outline-none font-bold      hover:bg-[#5f2ded] hover:text-white'>Start Free Trial</button>
                        <button className='py-4 px-[25px] bg-white rounded-[3px] border border-solid border-[#5f7aa326] text-black outline-none font-bold      hover:bg-[#5f2ded] hover:text-white'>Watch Video</button>
                     </div>

                     <div className="relative"> {/* class: skyblue_circle_img */}
                        <img className='absolute right-[-70px]' src={man_skyblue} alt="" />
                     </div>
                  </div>
                  {/* <!-- get benifit end --> */}

                  {/* <!-- Hero image end --> */}
                  <div className="">      {/* class: hero_img */}
                     <img className='w-full' src={mobile_img} alt="Mobile img" />
                  </div>
                  {/* <!-- Hero image end --> */}

                  {/* <!-- get benifit right side end --> */}
                  <div className="w-[340px]">      {/* class: benifit_privacy */}
                     <div className="w-full mb-[70px] flex justify-between items-center relative">   {/* class: privacy_profile */}
                        <img className='absolute top-[-70px]'
                           src={man_blue}
                           alt="Man circle img" />
                        <div className="flex justify-center items-start flex-col p-5 w-[172px] h-[120px] bg-white border border-solid border-[#eff0f2] shadow-[0px_4px_16px_#00000008] rounded-[5px] absolute top-[-50px] left-[40%]">      {/* class: app_selling */}
                           <h2>5.00</h2>
                           <p>Top selling Apps</p>
                        </div>
                     </div>
                     {/* <!--  --> */}
                     <div className="mb-[86px]">   {/* class: privacy_list */}
                        <ul className='leading-[3]'>
                           <div className="flex justify-start items-center gap-[10px]">  {/* class: privacy_blue */}
                              <div className='w-[10px] h-[10px] rounded-full bg-[#3000ff]'></div>
                              <li className='w-max text-[#677294]'>Privacies & Terms Support</li>
                           </div>

                           <div className="flex justify-start items-center gap-[10px]">      {/* class: privacy_orange */}
                              <div className='w-[10px] h-[10px] rounded-full bg-[#ff5c28]'></div>
                              <li className='w-max text-[#677294]'>Strong Encryption System</li>
                           </div>

                           <div className="flex justify-start items-center gap-[10px]">   {/* class: privacy_green */}
                              <div className='w-[10px] h-[10px] rounded-full bg-[#06d14b]'></div>
                              <li className='w-max text-[#677294]'>First Youtube videos Uploaded</li>
                           </div>
                        </ul>
                     </div>
                     {/* <!--  --> */}
                     <div className="w-[180px] py-5 px-[25px] bg-white border border-solid border-[#eff0f2] shadow-[0px_4px_18px_#0000000f] rounded-[5px]">  {/* class: install_app */}
                        <h1 className='text-[35px] text-[#fd8619]'>35 K+</h1>
                        <p>Active Install Apps</p>
                     </div>
                  </div>
                  {/* <!-- get benifit right side end --> */}
               </div>
            </div>
         </section>
         {/* <!-- Hero section end --> */}
      </>
   )
}

export default Hero