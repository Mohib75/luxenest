import { Helmet } from "react-helmet-async"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import useAuth from "../hooks/useAuth"
import SocialLogin from "../components/SocialLogin"
import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"

const Login = () => {
	const { signInUser } = useAuth()
	const [showPassword, setShowPassword] = useState(false)

	const { register, handleSubmit } = useForm({
		criteriaMode: "all",
	})

	// navigation system
	const navigate = useNavigate()
	const location = useLocation()
	const navigateFrom = location?.state || "/"

	const onSubmit = (data) => {
		const { email, password } = data

		signInUser(email, password)
			.then((result) => {
				if (result.user) {
					navigate(navigateFrom)
				}
			})
			.catch(() => {
				toast.error("invalid email/password")
			})
	}

	return (
		<div className='flex justify-center my-16'>
			<Helmet>
				<title>LuxeNest | Sign In</title>
			</Helmet>
			<div
				className='w-full max-w-md p-8 space-y-3 rounded-xl bg-[#E8F3F1] drop-shadow-xl mx-4 sm:mx-0'
				data-aos='zoom-in-down'
				data-aos-delay='800'>
				<h1 className='text-2xl font-bold text-center'>Sign In</h1>
				<form action='' className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
					<div className='space-y-1 text-sm'>
						<label htmlFor='email' className='block text-gray-600'>
							Email
						</label>
						<input
							{...register("email")}
							type='email'
							name='email'
							id='email'
							placeholder='Email'
							className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none'
						/>
					</div>
					<div className='space-y-1 text-sm relative'>
						<label htmlFor='password' className='block text-gray-600'>
							Password
						</label>
						<input
							required
							{...register("password")}
							type={showPassword ? "text" : "password"}
							name='password'
							id='password'
							placeholder='Password'
							className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none'
						/>
						<span className='absolute bottom-8 right-4 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
							{showPassword ? <FaEyeSlash /> : <FaEye />}
						</span>
						<div className='flex justify-end text-xs text-gray-600'>
							<a rel='noopener noreferrer' href='#'>
								Forgot Password?
							</a>
						</div>
					</div>
					<button className='block w-full p-3 text-center rounded-sm text-gray-50 bg-[#5EC2AC]'>Sign in</button>
				</form>
				<div className='flex items-center pt-4 space-x-1'>
					<div className='flex-1 h-px sm:w-16 bg-gray-300'></div>
					<p className='px-3 text-sm text-gray-600'>Sign In with social accounts</p>
					<div className='flex-1 h-px sm:w-16 bg-gray-300'></div>
				</div>
				<SocialLogin />
				<p className='text-xs text-center sm:px-6 text-gray-600'>
					Don't have an account?
					<Link to='/signUp' rel='noopener noreferrer' className='ml-1 underline text-[#1E8C78]'>
						Sign up
					</Link>
				</p>
			</div>
		</div>
	)
}

export default Login
