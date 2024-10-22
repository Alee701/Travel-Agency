import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthContext } from '../Context/Auth';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';

function LoginForm() {
    const [LoginEmail, setLoginEmail] = useState('');
    const [LoginPassword, setLoginPassword] = useState('');
    const { IsLoggedin, setIsLoggedin } = useAuthContext();
    const [loading, setloading] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // New state for show/hide password
    const Navigate = useNavigate();

    const handleLoginForm = (e) => {
        e.preventDefault();
        const auth = getAuth();
        setloading(true);
        signInWithEmailAndPassword(auth, LoginEmail, LoginPassword)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('User is Login');
                toast.success('User is login successful');
                setLoginEmail('');
                setLoginPassword('');
                setloading(false);
                Navigate('/Profile');
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                toast.error(errorMessage);
                setloading(false);
            })
            .finally(() => {
                setloading(false);
            });
    };

    return (
        <form onSubmit={handleLoginForm}>
            <div>
                <h1 className='text-[32px] mt-8 font-bold text-[#000000]'>Login</h1>
                <p className='font-normal mt-2'>Login to access your Golobe account.</p>
            </div>

            <div id='insideLogin' className='flex flex-col gap-4 mt-4 w-full flex-wrap'>

                <fieldset className='w-[130%] relative mt-5 h-[60px] flex items-center border px-5 rounded border-[#79747E]'>
                    <legend>Email</legend>
                    <input
                        type="email"
                        value={LoginEmail}
                        required
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className='w-full absolute mt-6 font-medium bg-transparent h-[45px] outline-none'
                    />
                </fieldset>

                <fieldset className='w-[130%] h-[60px] relative flex items-center border px-5 rounded border-[#79747E]'>
                    <legend>Password</legend>
                    <input
                        type={showPassword ? 'text' : 'password'} // Toggle input type
                        value={LoginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className='w-full absolute mt-6 bg-transparent h-[45px] outline-none font-medium'
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)} // Toggle show/hide
                        className='absolute right-3 top-2'
                    >
                        {showPassword ? 'Hide' : 'Show'} {/* Display label based on state */}
                    </button>
                </fieldset>

                <input
                    type="submit"
                    id='Loginupsubmit'
                    value={loading ? 'login....' : 'Login'}
                    className='h-[50px] cursor-pointer rounded mt-5 w-[130%] bg-[#8DD3BB] font-semibold'
                />

                <p className='font-semibold w-[300px] text-[15px] text-end mt-2'>
                    Don’t have an account?
                    <Link to={'/signup'} className='text-[#FF8682]'>
                        Sign up
                    </Link>
                </p>
            </div>
        </form>
    );
}

export default LoginForm;
