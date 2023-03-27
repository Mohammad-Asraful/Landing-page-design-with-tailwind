import React from 'react'

import features_img from "./Images/features-img/s_01.png.png"
import features_img1 from "./Images/features-img/s_02.png.png"
import features_img2 from "./Images/features-img/s_03.png.png"
import features_img3 from "./Images/features-img/s_04.png.png"
import pseudo_img from "./Images/features-img/pseudo.png"


const RegularUpdate = () => {
   return (
      <>
         {/* <!-- Regular Update section start --> */}
         <section>
            <div className="w-[1200px] m-[0_auto]">   {/* class: container */}
               <div className="">      {/* class: update_div */}
                  {/* <!-- update div text start --> */}
                  <div className="flex justify-between items-center gap-20">   {/* class: update_text_div */}
                     <div className="">   {/* class: update_headline */}
                        <p className='text-lg'>
                           <span className='text-[#ec0d0d] font-medium'># No1 </span>
                           Trending Apps.
                        </p>
                        <h1 className='w-[360px] text-[30px] font-bold'>Why this App Installed 4000K Customer</h1>
                     </div>

                     <div className="">    {/* class: feature_btn */}
                        <button className='p-[20px_80px] w-max font-bold rounded-full border border-solid border-[#5f2ded]'>App Features</button>
                     </div>

                     <div className="">   {/* class: feature_description */}
                        <p className='text-sm text-[#677294] p-[26px_70px] bg-[#fbfafe] border border-solid border-[#7277a1] rounded-[73px]'>
                           Increase productivity with a simple to-do app. managing your
                           personal budgets Urna sit placerat tellus at est odio id.
                           Pharetra
                        </p>
                     </div>
                  </div>
                  {/* <!-- update div text end --> */}

                  {/* <!-- update div card start --> */}
                  <div className="flex justify-between items-center gap-5 mt-[45px]">     {/* class: update_card_div */}
                     <div className="main_card p-[30px] relative hover:bg-[#ffffff01] hover:border hover:border-solid border-[#5f2ded] hover:shadow-[0px_5px_35px_#221e1e21] hover:rounded-[45px]">
                        <img className='mb-2' src={features_img} alt="" />
                        <h3 className='font-bold'>Feature Updates</h3>
                        <p className='text-[#677294] mt-[35px]'>
                           Bog cheeky bugger blow off only a quid grub he legged it porkies
                           tosser young delinquent argy-bargy.
                        </p>
                     </div>

                     <div className="main_card p-[30px] relative hover:bg-[#ffffff01] hover:border hover:border-solid border-[#5f2ded] hover:shadow-[0px_5px_35px_#221e1e21] hover:rounded-[45px]">
                        <img className='mb-2' src={features_img1} alt="" />
                        <h3 className='font-bold'>Feature Updates</h3>
                        <p className='text-[#677294] mt-[35px]'>
                           Bog cheeky bugger blow off only a quid grub he legged it porkies
                           tosser young delinquent argy-bargy.
                        </p>
                     </div>

                     <div className="main_card p-[30px] relative hover:bg-[#ffffff01] hover:border hover:border-solid border-[#5f2ded] hover:shadow-[0px_5px_35px_#221e1e21] hover:rounded-[45px]">
                        <img className='mb-2' src={features_img2} alt="" />
                        <h3 className='font-bold'>Feature Updates</h3>
                        <p className='text-[#677294] mt-[35px]'>
                           Bog cheeky bugger blow off only a quid grub he legged it porkies
                           tosser young delinquent argy-bargy.
                        </p>
                     </div>

                     <div className="main_card p-[30px] relative hover:bg-[#ffffff01] hover:border hover:border-solid border-[#5f2ded] hover:shadow-[0px_5px_35px_#221e1e21] hover:rounded-[45px]">
                        <img className='mb-2' src={features_img3} alt="" />
                        <h3 className='font-bold'>Feature Updates</h3>
                        <p className='text-[#677294] mt-[35px]'>
                           Bog cheeky bugger blow off only a quid grub he legged it porkies
                           tosser young delinquent argy-bargy.
                        </p>
                        <button className='border-none bg-white font-bold mt-[35px]'>Explore More</button>
                        <img
                           className="block absolute right-[50px] bottom-0"
                           // class: pseudo_img
                           src={pseudo_img}
                           alt="" />
                     </div>
                  </div>
                  {/* <!-- update div card end --> */}
               </div>
            </div>
         </section>
         {/* <!-- Regular Update section end --> */}
      </>
   )
}

export default RegularUpdate