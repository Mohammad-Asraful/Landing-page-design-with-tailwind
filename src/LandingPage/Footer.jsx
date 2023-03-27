import React from 'react'

import logo from "./Images/header-logo-img/logo.png";

const Footer = () => {
   return (
      <>
         {/* <!-- footer start --> */}
         <footer className="footer bg-[#dfe2eb]">
            <div className="w-[1200px] m-[0_auto]">
               {/* class: container */}
               <div className="footer_div flex justify-around items-center py-[15px]">
                  <div className="footer_logo">
                     <img src={logo} alt="" />
                  </div>

                  <div className="copy_rights text-[#677294] font-bold">
                     <p>Copyright &copy; 2022 Theme. All Rights Reserved.</p>
                  </div>

                  <div className="icon_div flex justify-center items-center gap-3">
                     <a className='flex justify-center items-center h-10 w-10 p-[13px] rounded-full bg-[#bfbfbf40] text-[#5f2ded] hover:bg-[#5f2ded] hover:text-white' href="@">
                        <i className="fa-brands fa-facebook-f"></i>
                     </a>

                     <a className='flex justify-center items-center h-10 w-10 p-[13px] rounded-full bg-[#bfbfbf40] text-[#5f2ded] hover:bg-[#5f2ded] hover:text-white' href="@">
                        <i className="fa-brands fa-twitter"></i>
                     </a>

                     <a className='flex justify-center items-center h-10 w-10 p-[13px] rounded-full bg-[#bfbfbf40] text-[#5f2ded] hover:bg-[#5f2ded] hover:text-white' href="@">
                        <i className="fa-brands fa-instagram"></i>
                     </a>

                     <a className='flex justify-center items-center h-10 w-10 p-[13px] rounded-full bg-[#bfbfbf40] text-[#5f2ded] hover:bg-[#5f2ded] hover:text-white font-extrabold' href="@">:</a>
                  </div>
               </div>
            </div>
         </footer>
         {/* <!-- footer end --> */}
      </>
   )
}

export default Footer