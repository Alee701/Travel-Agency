import React from 'react'
import Navbarlogo from './Navbarlogo'

function Landingbanner() {
  return (
    <>
        
        <div id='Landingbanner'  className='h-[600px] w-[95%] m-auto  mt-8 rounded-[24px]'>

        <div id='landingchild' className='h-full w-full rounded-[24px]'>
            <Navbarlogo></Navbarlogo>
          
            <div className='text-white text-center mt-10'>
              <h1 className='fontLibre text-[45px] tracking-wide'>Helping Others</h1>
              <h1 className='fontLibre text-[80px] tracking-wide font-semibold'>LIVE & TRAVEL</h1>
              <h2 className='fontLibre text-[20px] '>Special offers to suit your plan</h2>
            </div>
        </div>
        </div>
        
    
    
    </>
  )
}

export default Landingbanner