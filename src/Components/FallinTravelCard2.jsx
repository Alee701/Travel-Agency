import React from 'react'
import img2 from '../assets/banner/fall2.jpg'
function FallinTravelCard2() {
    return (
        <div id='fall' className='w-[300px] h-[420px] rounded-xl text-white relative bg-blue-700'>
            <img src={img2} alt="" className='h-full w-full' />
            <div className='w-[90%]   absolute bottom-7 left-4 '>
                <div>
                    <h1 className='font-semibold text-[24px]'>Paris</h1>
                    <p className='flex items-center justify-between text-[14px] mt-[-5px]'>A Paris Adventure <span className='font-semibold mt-[-5px] text-[24px]'>$ 600</span></p>
                </div>
                <button className='bg-[#8DD3BB] text-[#112211] font-semibold h-12 w-full mt-2 text-[14px] rounded'>Book Flight</button>
            </div>
        </div>

        
    )
}

export default FallinTravelCard2