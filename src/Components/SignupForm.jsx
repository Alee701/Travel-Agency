import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import '../App.css'; 

function SignupForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({}); // Error state for validation

    const navigate = useNavigate();

    const handleSignupForm = async (e) => {
        e.preventDefault();

        // Reset errors before validation
        setErrors({});

        // Validate form fields
        const newErrors = {};
        if (!firstName) newErrors.firstName = "First Name is required";
        if (!lastName) newErrors.lastName = "Last Name is required";
        if (!Email) newErrors.Email = "Email is required";
        if (!phoneNumber) newErrors.phoneNumber = "Phone Number is required";
        if (!Password) newErrors.Password = "Password is required";
        if (!confirmPassword) newErrors.confirmPassword = "Confirm Password is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return; // Stop form submission if validation fails
        }

        if (Password !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        if (Password.length < 8) {
            toast.error("Password must be at least 8 characters long.");
            return;
        }

        try {
            setLoading(true);

            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, Email, Password);
            const user = userCredential.user;

            // Create user object for Firestore
            const userRef = doc(db, "Users", user.uid);
            const userData = { firstName, lastName, Email, phoneNumber };

            await setDoc(userRef, userData);
            toast.success("User registered successfully!");

            // Reset form fields after successful registration
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setPhoneNumber("");

            // Navigate to login page after signup
            navigate("/Login");
        } catch (error) {
            console.error("Signup Error:", error);
            toast.error(error.message || "An error occurred during signup.");
        } finally {
            setLoading(false); // Reset loading state in all cases
        }
    };

    return (
        <form onSubmit={handleSignupForm}>
            <div className='mt-10'>
                <h1 className='text-[36px] font-bold text-[#000000]'>Sign up</h1>
                <p className='font-normal mt-3'>Let’s get you all set up so you can access your personal account.</p>
            </div>

            <div id='insideSignup' className='flex gap-4 mt-4 w-full flex-wrap'>

                {/* First Name Field */}
                <fieldset className={`w-[350px] h-[60px] relative flex items-center border px-5 rounded ${errors.firstName ? 'border-red-500 animate-shake' : 'border-[#79747E]'}`}>
                    <legend>First Name</legend>
                    <input 
                        type="text" 
                        value={firstName} 
                        onChange={(e) => {
                            setFirstName(e.target.value);
                            setErrors({...errors, firstName: ''});
                        }}
                        className='w-full absolute bottom-0 font-medium bg-transparent h-[45px] outline-none' 
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </fieldset>

                {/* Last Name Field */}
                <fieldset className={`w-[350px] h-[60px] relative flex items-center border px-5 rounded ${errors.lastName ? 'border-red-500 animate-shake' : 'border-[#79747E]'}`}>
                    <legend>Last Name</legend>
                    <input 
                        type="text" 
                        value={lastName} 
                        onChange={(e) => {
                            setLastName(e.target.value);
                            setErrors({...errors, lastName: ''});
                        }}
                        className='w-full bg-transparent absolute bottom-0 font-medium h-[45px] outline-none' 
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </fieldset>

                {/* Email Field */}
                <fieldset className={`w-[350px] h-[60px] relative flex items-center border px-5 rounded ${errors.Email ? 'border-red-500 animate-shake' : 'border-[#79747E]'}`}>
                    <legend>Email</legend>
                    <input 
                        type="email" 
                        value={Email} 
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setErrors({...errors, Email: ''});
                        }}
                        className='w-full bg-transparent absolute bottom-0 font-medium h-[45px] outline-none' 
                    />
                    {errors.Email && <p className="text-red-500 text-sm mt-1">{errors.Email}</p>}
                </fieldset>

                {/* Phone Number Field */}
                <fieldset className={`w-[350px] h-[60px] relative flex items-center border px-5 rounded ${errors.phoneNumber ? 'border-red-500 animate-shake' : 'border-[#79747E]'}`}>
                    <legend>Phone Number</legend>
                    <input 
                        type="text" 
                        value={phoneNumber} 
                        onChange={(e) => {
                            setPhoneNumber(e.target.value);
                            setErrors({...errors, phoneNumber: ''});
                        }}
                        className='w-full bg-transparent absolute bottom-0 font-medium h-[45px] outline-none' 
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                </fieldset>

                {/* Password Field with Show/Hide */}
                <fieldset className={`w-[98%] h-[60px] relative flex items-center border px-5 rounded ${errors.Password ? 'border-red-500 animate-shake' : 'border-[#79747E]'}`}>
                    <legend>Password</legend>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={Password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setErrors({...errors, Password: ''});
                        }}
                        className='w-full bg-transparent absolute bottom-0 font-medium h-[45px] outline-none pr-10'
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer'
                        style={{ fontSize: '1.2rem' }}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    {errors.Password && <p className="text-red-500 text-sm mt-1">{errors.Password}</p>}
                </fieldset>

                {/* Confirm Password Field with Show/Hide */}
                <fieldset className={`w-[98%] h-[60px] relative flex items-center border px-5 rounded ${errors.confirmPassword ? 'border-red-500 animate-shake' : 'border-[#79747E]'}`}>
                    <legend>Confirm Password</legend>
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            setErrors({...errors, confirmPassword: ''});
                        }}
                        className='w-full bg-transparent absolute bottom-0 font-medium h-[45px] outline-none pr-10'
                    />
                    <span
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className='absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer'
                        style={{ fontSize: '1.2rem' }}
                    >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                </fieldset>

                {/* Submit Button with Loading Animation */}
                <button
                    type="submit"
                    id='signupsubmit'
                    className='h-[50px] cursor-pointer rounded mt-8 w-[720px] bg-[#8DD3BB] font-semibold text-[#112211] text-[18px] flex items-center justify-center'
                    disabled={loading}
                >
                    {loading ? (
                        <div className="loader"></div> // Add a loader div for loading animation
                    ) : 'Create Account'}
                </button>
            </div>
        </form>
    );
}

export default SignupForm;
