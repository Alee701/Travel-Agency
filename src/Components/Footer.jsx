import React from 'react'
import footlogo from '../assets/logo-icon/footerlogo.png'
import facebook from '../assets/logo-icon/facebook.png'
import twitter from '../assets/logo-icon/twitter.png'
import insta from '../assets/logo-icon/insta.png'
import youtube from '../assets/logo-icon/youtube.png'
function Footer() {
    return (
        <div className='w-full min-h-[450px]   bg-[#8DD3BB]'>
            <div className='w-[100%] justify-center min-h-[200px] m-auto bg-[#8DD3BB]  flex gap-28 mt-10   flex-wrap  relative top-48'>
                <div>
                    <img src={footlogo} alt="" className='h-10' />
                    <span className='flex gap-3 mt-6'>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={youtube} alt="" />
                        <img src={insta} alt="" />
                    </span>
                </div>
                <div className='text-[#112211]'>
                    <h1 className=' font-bold text-base'>Our Destinations</h1>
                    <div className='flex flex-col gap-3 mt-4 text-[#112211] flex-wrap list-style-type: none; '>

                        <p><a href="#">Canada</a></p>
                        <p><a href="#">Alaska</a></p>
                        <p><a href="#">France</a></p>
                        <p><a href="#">Iceland</a></p>
                    </div>
                </div>
              
                <div className='text-[#112211]'>
                    <h1 className=' font-bold text-base'>Our Activities</h1>
                    <div className='flex flex-col gap-3 mt-4'>

                        <p><a href="#">Northern Lights</a></p>
                        <p><a href="#">Cruising & Sailing</a></p>
                        <p><a href="#">Multi-activities</a></p>
                        <p><a href="#">Kayaking</a></p>
                    </div>
                </div>
                
                <div className='text-[#112211]'>
                    <h1 className=' font-bold text-base'>Travel Blogs</h1>
                    <div className='flex flex-col gap-3 mt-4'>

                        <p><a href="#">Bali Travel Guide</a></p>
                        <p><a href="#">Sri Lanka Travel Guide</a></p>
                        <p><a href="#">Peru Travel Guide</a></p>
                        <p><a href="#">Iceland Travel Guide</a></p>
                    </div>
                </div>

                <div className='text-[#112211]'>
                    <h1 className=' font-bold text-base'>About Us</h1>
                    <div className='flex flex-col gap-3 mt-4'>

                        <p><a href="">Our Story</a></p>
                        <p><a href="">Work with us</a></p>
                        
                    </div>
                </div>
                <div className='text-[#112211]'>
                    <h1 className=' font-bold text-base'>Contact Us</h1>
                    <div className='flex flex-col gap-3 mt-4'>

                        <p><a href="">Help Center</a></p>
                        <p><a href="">Support</a></p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer