import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons
import '../App.css'; // Import custom CSS for animations

function LoginForm() {
    const [LoginEmail, setLoginEmail] = useState('');
    const [LoginPassword, setLoginPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // State for show/hide password
    const [errors, setErrors] = useState({}); // Error state for validation

    const navigate = useNavigate();

    const handleLoginForm = async (e) => {
        e.preventDefault();

        // Reset errors before validation
        setErrors({});

        // Validate form fields
        const newErrors = {};
        if (!LoginEmail) newErrors.LoginEmail = "Email is required";
        if (!LoginPassword) newErrors.LoginPassword = "Password is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return; // Stop form submission if validation fails
        }

        try {
            setLoading(true);

            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(auth, LoginEmail, LoginPassword);
            const user = userCredential.user;

            toast.success("Login successful!");

            // Reset form fields after successful login
            setLoginEmail("");
            setLoginPassword("");

            // Navigate to profile page after successful login
            navigate("/Profile");
        } catch (error) {
            console.error("Login Error:", error);
            toast.error(error.message || "An error occurred during login.");
        } finally {
            setLoading(false); // Reset loading state in all cases
        }
    };

    return (
        <form onSubmit={handleLoginForm}>
            <div>
                <h1 className='text-[32px] mt-8 font-bold text-[#000000]'>Login</h1>
                <p className='font-normal mt-2'>Login to access your Golobe account.</p>
            </div>

            <div id='insideLogin' className='flex flex-col gap-4 mt-4 w-full flex-wrap'>

                {/* Email Field */}
                <fieldset className={`w-[130%] h-[60px] relative flex items-center border px-5 rounded ${errors.LoginEmail ? 'border-red-500 animate-shake' : 'border-[#79747E]'}`}>
                    <legend>Email</legend>
                    <input
                        type="email"
                        value={LoginEmail}
                        onChange={(e) => {
                            setLoginEmail(e.target.value);
                            setErrors({...errors, LoginEmail: ''});
                        }}
                        className='w-full absolute mt-6 font-medium bg-transparent h-[45px] outline-none'
                    />
                    {errors.LoginEmail && <p className="text-red-500 text-sm mt-1">{errors.LoginEmail}</p>}
                </fieldset>

                {/* Password Field with Show/Hide */}
                <fieldset className={`w-[130%] h-[60px] relative flex items-center border px-5 rounded ${errors.LoginPassword ? 'border-red-500 animate-shake' : 'border-[#79747E]'}`}>
                    <legend>Password</legend>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={LoginPassword}
                        onChange={(e) => {
                            setLoginPassword(e.target.value);
                            setErrors({...errors, LoginPassword: ''});
                        }}
                        className='w-full absolute mt-6 bg-transparent h-[45px] outline-none pr-10'
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
                        style={{ fontSize: '1.2rem' }}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    {errors.LoginPassword && <p className="text-red-500 text-sm mt-1">{errors.LoginPassword}</p>}
                </fieldset>

                {/* Submit Button with Loading Animation */}
                <button
                    type="submit"
                    className='h-[50px] cursor-pointer rounded mt-5 w-[130%] bg-[#8DD3BB] font-semibold flex items-center justify-center'
                    disabled={loading}
                >
                    {loading ? (
                        <div className="loader"></div> // Add a loader div for loading animation
                    ) : 'Login'}
                </button>

                <p className='font-semibold w-[300px] text-[15px] text-end mt-2'>
                    Don’t have an account? 
                    <a href="/signup" className='text-[#FF8682]'> Sign up</a>
                </p>
            </div>
        </form>
    );
}

export default LoginForm;
