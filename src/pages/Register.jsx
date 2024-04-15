import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import useAuth from "../hooks/useAuth"
import SocialLogin from "../components/SocialLogin"
import { FaEye, FaEyeSlash } from "react-icons/fa"

const Register = () => {
	const { createUser, updateUserProfile, logout } = useAuth()
	const [showPassword, setShowPassword] = useState(false)

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		criteriaMode: "all",
	})

	// navigation system
	const navigate = useNavigate()
	const location = useLocation()
	const navigateFrom = location?.state || "/signIn"

	const onSubmit = (data) => {
		const { email, password, name, image } = data

		createUser(email, password).then(() => {
			toast.success("successfully register")
			updateUserProfile(name, image).then(() => {
				logout()
				navigate(navigateFrom)
			})
		})
	}

	const CustomErrorMessage = ({ message }) => {
		useEffect(() => {
			if (message) {
				toast.error(message) // Call the toast function with the error message
			}
		}, [message])

		return null // Prevent rendering of ErrorMessage component
	}

	return (
		<div className='flex justify-center my-16'>
			<Helmet>
				<title>LuxeNest | Sign Up</title>
			</Helmet>
			<div
				className='w-full max-w-md p-8 space-y-3 rounded-xl bg-[#E8F3F1] drop-shadow-xl mx-4 sm:mx-0'
				data-aos='zoom-in-down'
				data-aos-delay='800'>
				<h1 className='text-2xl font-bold text-center'>Login</h1>
				<form action='' className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
					<div className='space-y-1 text-sm'>
						<label htmlFor='name' className='block text-gray-600'>
							Name
						</label>
						<input
							required
							{...register("name")}
							type='text'
							name='name'
							id='name'
							placeholder='Name'
							className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none'
						/>
					</div>
					<div className='space-y-1 text-sm'>
						<label htmlFor='email' className='block text-gray-600'>
							Email
						</label>
						<input
							required
							{...register("email")}
							type='email'
							name='email'
							id='email'
							placeholder='Email'
							className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none'
						/>
					</div>
					<div className='space-y-1 text-sm'>
						<label htmlFor='image' className='block text-gray-600'>
							Photo URL
						</label>
						<input
							{...register("image")}
							type='text'
							name='image'
							id='image'
							placeholder='Photo URL'
							className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none'
						/>
					</div>
					<div className='space-y-1 text-sm relative'>
						<label htmlFor='password' className='block text-gray-600'>
							Password
						</label>
						<input
							required
							{...register("password", {
								pattern: {
									value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
								},
							})}
							type={showPassword ? "text" : "password"}
							name='password'
							id='password'
							placeholder='Password'
							className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none'
						/>
						{errors.password && (
							<CustomErrorMessage message='Password must be 6 character long & must be an uppercase & must be a lowercase letter included' />
						)}
						<span className='absolute bottom-4 right-4 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
							{showPassword ? <FaEyeSlash /> : <FaEye />}
						</span>
					</div>
					<button className='block w-full p-3 text-center rounded-sm text-gray-50 bg-[#5EC2AC]' type='submit'>
						Sign Up
					</button>
				</form>
				<div className='flex items-center pt-4 space-x-1'>
					<div className='flex-1 h-px sm:w-16 bg-gray-300'></div>
					<p className='px-3 text-sm text-gray-600'>Sign up with social accounts</p>
					<div className='flex-1 h-px sm:w-16 bg-gray-300'></div>
				</div>
				<SocialLogin />
				<p className='text-xs text-center sm:px-6 text-gray-600'>
					Already have an account?
					<Link rel='noopener noreferrer' to='/signIn' className='ml-1 underline text-[#1E8C78]'>
						Sign in
					</Link>
				</p>
			</div>
		</div>
	)
}

export default Register

Register.propTypes = {
	message: PropTypes.string,
}