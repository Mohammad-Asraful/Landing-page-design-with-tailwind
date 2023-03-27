import React from 'react'

import bgImage from "./Images/google-store-img/bg_blue.png"
import right_side_img from "./Images/google-store-img/right_side_img.png"
import middle_img from "./Images/google-store-img/middle_image.png"
import google_play from "./Images/google-store-img/google-play.png.png"
import app_store from "./Images/google-store-img/app-store.png.png"

const GoogleStore = () => {

   const backgroundImage = {
      width: '50%',
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'auto',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
   }

   return (
      <>
         {/* <!-- Google store section start --> */}
         <section>
            <div className="w-[1200px] m-[0_auto]">   {/* class: container */}
               <div className="flex justify-between items-center mb-5 relative">   {/* class: google_store */}
                  {/* <!-- google text side start --> */}
                  <div className="w-1/2 bg-[#fbfbfe] py-[90px] pr-[100px]">   {/* class: google_text_side */}
                     <p className="text-lg">  {/* class: google_little_header */}
                        <span className='text-[#ec0d0d]'># Why </span>
                        Choose App?
                     </p>

                     <h1 className="text-[32px] mt-5 mb-[35px] font-bold">   {/* class: google_header */}
                        App is Available Free On <br />
                        Google Store
                     </h1>

                     <p className="text-[#677294] mb-[25px]">  {/* class: google_description */}
                        Increase productivity with a simple to-do app. app for <br />
                        managing your personal budgets
                     </p>

                     <div className="flex justify-start items-center gap-2">
                        <a href="@">
                           <img
                              src={google_play}
                              alt="" />
                        </a>
                        <a href="@">
                           <img src={app_store} alt="" />
                        </a>
                     </div>
                  </div>
                  {/* <!-- google text side end --> */}

                  {/* <!-- mid image start --> */}
                  <div className="absolute bottom-[54px] left-[435px]">   {/* class: mid_img */}
                     <img className='w-4/5' src={middle_img} alt="" />
                  </div>
                  {/* <!-- mid image end --> */}

                  {/* <!-- google img side start --> */}
                  <div style={backgroundImage} className="google_img_side w-1/2 m-[0_auto]">   {/* class: google_img_side */}
                     <div className="">   {/* class: mobile_img */}
                        <img className='w-full pl-5 py-[50px]' src={right_side_img} alt="" />
                     </div>
                  </div>
                  {/* <!-- google img side end --> */}
               </div>
            </div>
         </section>
         {/* <!-- Google store section end --> */}
      </>
   )
}

export default GoogleStore