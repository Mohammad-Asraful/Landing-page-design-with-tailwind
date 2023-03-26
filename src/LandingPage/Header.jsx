import React from 'react'
import logo from './Images/header-logo-img/logo.png'

const Header = () => {
   return (
      <>
         {/* <!-- Header start --> */}
         <header className='w-full h-[93px] m-[0_auto] bg-white border border-solid border-white shadow-[0px_0px_60px_#00000012]'>

            <div className="w-[1200px] m-[0_auto]"> {/* class: container */}

               <div className="header_div flex justify-between items-center p-5">
                  {/* <!-- logo start --> */}
                  <div className="h-[42]">   {/* class: logo */}
                     <a className='text-black' href="@">
                        <img src={logo} alt="Logo img" />
                     </a>
                  </div>
                  {/* <!-- logo end --> */}

                  {/* <!-- nav bar start  --> */}
                  <div className="nav_bar">
                     <ul className='font-[500] flex justify-between items-center gap-[45px]'>
                        <li><a className='text-black' href="@">Home</a></li>
                        <li><a className='text-black' href="@">Feature</a></li>
                        <li><a className='text-black' href="@">Service</a></li>
                        <li><a className='text-black' href="@">Pricing</a></li>
                        <li><a className='text-black' href="@">Testimonial</a></li>
                        <li><a className='text-black' href="@">Mission</a></li>
                        <li><a className='text-black' href="@">Page</a></li>
                     </ul>
                  </div>
                  {/* <!-- nav bar end --> */}

                  {/* <!-- log in button start --> */}
                  <div className="flex justify-center items-center gap-4">    {/* class: login_button */}
                     <button className="bg-white border border-solid border-[#5f7aa326] rounded-[3px] py-4 px-[25px] outline-none font-bold     hover:bg-[#5f2ded] hover:text-white">Login</button>  {/* class: login */}

                     <button className="py-4 px-[25px] bg-white rounded-[3px] text-black outline-none font-bold border border-solid border-[#5f7aa326]      hover:bg-[#5f2ded] hover:text-white">Start Free Trial</button>   {/* class: trial_btn */}
                  </div>
                  {/* <!-- log in button end --> */}
               </div>
            </div>
         </header>
         {/* <!-- Header end --> */}
      </>
   )
}

export default Header