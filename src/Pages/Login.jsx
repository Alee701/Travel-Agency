import React from 'react'
import group from '../assets/logo-icon/Group.png'
import LoginForm from '../Components/LoginForm'
import { Link } from 'react-router-dom'


function Login() {
    return (
        <section id="formSignup" className='w-[80%]  text-[#112211] flex gap-10  m-auto mt-10 justify-center min-h-[650px]'>


            <div id='fullFormContainer' className='w-2/6 '>
            <Link to={'/'}>
                <img src={group} className='h-9 mt-6' alt="" />
            </Link>

                
                <div className='flex w-[85%] '>
                    <LoginForm></LoginForm>
                    
                </div>
            </div>







            <div id="carousellogin" className='w-[480px] h-[630px] bg-black rounded-[30px]'>

            </div>








        </section>
    )
}

export default Login