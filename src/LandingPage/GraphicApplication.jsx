import React from 'react'

import profile_img from "./Images/graphic-interface-img/profile_img.png"
import main_img from "./Images/graphic-interface-img/main_img.png"
import seo_img from "./Images/graphic-interface-img/SEO.png"
import sms_img from "./Images/graphic-interface-img/SMS.png"
import payment_img from "./Images/graphic-interface-img/Payment.png"
import cdn_img from "./Images/graphic-interface-img/CDN.png"

const GraphicApplication = () => {
   return (
      <>
         {/* <!-- Graphic Application start --> */}
         <section>
            <div className="w-[1200px] m-[0_auto]">   {/* class: container */}
               {/* <!-- graphic div start --> */}
               <div className="graphic_div mt-[100px] p-5 bg-[#fbf9ff]">
                  {/* <!-- graphic text start --> */}
                  <div className="graphic_text_div flex justify-between items-center gap-[15px]">
                     <div className='w-[70%]'>
                        <p className="graphic_small_header text-lg mb-4">
                           <span className='text-[#ec0d0d]'># Why </span>
                           Choose App?
                        </p>

                        <h1 className="graphic_header mb-[50px] text-3xl font-bold">
                           Best Graphic Interface Through <br />
                           Latest Application Showing
                        </h1>

                        <p className="graphic_description mb-10 leading-[2] text-[#14212BB2]">
                           <span className='text-[#5F2DED] text-[21px] font-extrabold'>“ </span>
                           The other hand we denounce with righteou indg ation and
                           dislike men who are so beguiled and demorali ed by the of
                           pleasure of the moment.Dislike men who are so beguiled and
                           demoraliz worlds ed by the charms of pleasure of the moment.
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           <span className='text-[#5F2DED] text-[21px] font-extrabold'> ”</span>
                        </p>

                        <div className="graphic_profile flex justify-start items-center gap-5">
                           <img
                              src={profile_img}
                              alt="" />
                           <div>
                              <h4 className='font-bold'>Cameron Williamson</h4>
                              <small>UI/Ux Designer</small>
                           </div>
                        </div>
                     </div>

                     {/* <!-- right side image --> */}
                     <div className="graphic_main_img w-full">
                        <img src={main_img} alt="" />
                     </div>
                  </div>
                  {/* <!-- graphic text end --> */}

                  {/* <!-- graphic card start --> */}
                  <div className="graphic_card_div flex justify-between items-center gap-[15px] mt-[100px]">
                     {/* <!-- card 1 --> */}
                     <div className="graphic_card p-[30px] bg-white border border-solid border-[#e5e5e5]">
                        <img className='w-full mb-5' src={seo_img} alt="" />
                        <h4 className='font-bold mb-[15px]'>SEO Optimization</h4>
                        <p>
                           Lorem Ipsum este pur şi simplu mac hetă pentru text a industriei
                           tip ografice. Lorem Ipsum a fost
                        </p>
                     </div>
                     {/* <!-- card 1 --> */}

                     {/* <!-- card 2 --> */}
                     <div className="graphic_card p-[30px] bg-white border border-solid border-[#e5e5e5]">
                        <img className='w-full mb-5' src={sms_img} alt="" />
                        <h4 className='font-bold mb-[15px]'>SMS Geteway</h4>
                        <p>
                           Lorem Ipsum este pur şi simplu mac hetă pentru text a industriei
                           tip ografice. Lorem Ipsum a fost
                        </p>
                     </div>
                     {/* <!-- card 2 --> */}

                     {/* <!-- card 3 --> */}
                     <div className="graphic_card p-[30px] bg-white border border-solid border-[#e5e5e5]">
                        <img className='w-full mb-5' src={payment_img} alt="" />
                        <h4 className='font-bold mb-[15px]'>Payment Geteway</h4>
                        <p>
                           Lorem Ipsum este pur şi simplu mac hetă pentru text a industriei
                           tip ografice. Lorem Ipsum a fost
                        </p>
                     </div>
                     {/* <!-- card 3 --> */}

                     {/* <!-- card 4 --> */}
                     <div className="graphic_card p-[30px] bg-white border border-solid border-[#e5e5e5]">
                        <img className='w-full mb-5' src={cdn_img} alt="" />
                        <h4 className='font-bold mb-[15px]'>CDN Integration</h4>
                        <p>
                           Lorem Ipsum este pur şi simplu mac hetă pentru text a industriei
                           tip ografice. Lorem Ipsum a fost
                        </p>
                     </div>
                     {/* <!-- card 4 --> */}
                  </div>
                  {/* <!-- graphic card end --> */}
               </div>
               {/* <!-- graphic div end --> */}
            </div>
         </section>
         {/* <!-- Graphic Application end --> */}
      </>
   )
}

export default GraphicApplication