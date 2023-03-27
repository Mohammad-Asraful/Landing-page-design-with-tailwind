import React from 'react'

import i_img from "./Images/footer-img/i.png"
import div_img from "./Images/footer-img/div.png"
import div_img1 from "./Images/footer-img/div(1).png"
import div_img2 from "./Images/footer-img/div(2).png"

const FooterMegaMenu = () => {
   return (
      <>
         {/* <!-- Footer mega menu section start --> */}
         <section className="main_mega_menu bg-[#f2f5ff] py-[70px]">
            <div className="w-[1200px] m-[0_auto]">   {/* class: container */}
               <div className="footer_mega_menu flex justify-between items-start">
                  {/* <!-- Footer About start --> */}
                  <div className="footer_about">
                     <h2 className='text-[22px] mb-[45px] font-bold'>About Us</h2>
                     <p className='w-[300px] text-base mb-[40px]'>
                        The world’s first and largest digital marketplace for crypto
                        collectibles and non-fungible tokens (NFTs). Buy, sell, and
                        discover exclusive digital items.
                     </p>

                     <div className='flex justify-start items-center gap-[15px] mb-[18px]'>
                        <img src={i_img} alt="" />
                        <p>254 Lillian Blvd, Holbrook</p>
                     </div>
                     <div className='flex justify-start items-center gap-[15px] mb-[18px]'>
                        <img src={i_img} alt="" />
                        <p>1-800-654-3210</p>
                     </div>
                  </div>
                  {/* <!-- Footer About end --> */}

                  {/* <!-- Market Place start --> */}
                  <div className="footer_marketplace">
                     <h2 className='text-[22px] mb-[45px] font-bold'>Marketplace</h2>
                     <ul className='leading-[2]'>
                        <li>Collectibles</li>
                        <li>Domain Names</li>
                        <li>Photography</li>
                        <li>Sports</li>
                        <li>Trading Cards</li>
                        <li>Utility</li>
                     </ul>
                  </div>
                  {/* <!-- Market Place end --> */}

                  {/* <!-- Account start --> */}
                  <div className="footer_account">
                     <h2 className='text-[22px] mb-[45px] font-bold'>My Account</h2>
                     <ul className='leading-[2]'>
                        <li>Author</li>
                        <li>How it Works</li>
                        <li>Create Item</li>
                        <li>Author Profile</li>
                        <li>Terms and conditions</li>
                        <li>Collection</li>
                     </ul>
                  </div>
                  {/* <!-- Account end --> */}

                  {/* <!-- Post start --> */}
                  <div className="footer_post">
                     <h2 className='text-[22px] mb-[45px] font-bold'>Recent Post</h2>
                     <div className="posts">
                        {/* <!-- 1 --> */}
                        <div className="post mb-5 flex justify-start items-center gap-5">
                           <img src={div_img} alt="" />
                           <div>
                              <time>June 2, 2022</time>
                              <h3 className='border-b-2 border-solid border-black font-[500]'>
                                 Prevent data loss with encrypted <br />
                                 storage.
                              </h3>
                           </div>
                        </div>
                        {/* <!-- 2 --> */}
                        <div className="post mb-5 flex justify-start items-center gap-5">
                           <img src={div_img1} alt="" />
                           <div>
                              <time>June 2, 2022</time>
                              <h3 className='border-b-2 border-solid border-black font-[500]'>
                                 Prevent data loss with encrypted <br />
                                 storage.
                              </h3>
                           </div>
                        </div>
                        {/* <!-- 3 --> */}
                        <div className="post mb-5 flex justify-start items-center gap-5">
                           <img src={div_img2} alt="" />
                           <div>
                              <time>June 2, 2022</time>
                              <h3 className='border-b-2 border-solid border-black font-[500]'>
                                 Prevent data loss with encrypted <br />
                                 storage.
                              </h3>
                           </div>
                        </div>
                        {/* <!--  --> */}
                     </div>
                  </div>
                  {/* <!-- Post end --> */}
               </div>
            </div>
         </section>
         {/* <!-- Footer mega menu section end --> */}
      </>
   )
}

export default FooterMegaMenu