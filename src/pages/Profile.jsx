import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import toast from "react-hot-toast"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"

const Profile = () => {
	const { user, updateUserProfile } = useAuth()
	const [name, setName] = useState(user.displayName || "")
	const [image, setImage] = useState(user.photoURL || "")

	const { register, handleSubmit, setValue } = useForm()

	useEffect(() => {
		setValue("name", user.displayName || "") // Set displayName as default value for name input
		setValue("image", user.photoURL || "") // Set photoURL as default value for image input
	}, [setValue, user.displayName, user.photoURL])

	const onSubmit = (data) => {
		const { name, image } = data

		updateUserProfile(name, image)
			.then(() => {
				toast.success("updated successfully.")
				setName(name)
				setImage(image)
			})
			.catch(() => {
				toast.error("invalid email/password")
			})
	}

	return (
		<div className='flex flex-col lg:flex-row lg:justify-between items-center my-20 mx-4 xl:mx-0'>
			<Helmet>
				<title>LuxeNest | User Profile</title>
			</Helmet>
			<div
				className='flex flex-col justify-center max-w-xl p-6 shadow-md rounded-xl sm:px-12 bg-[#E8F3F1] text-gray-800 h-[21rem]'
				data-aos='flip-left'
				data-aos-easing='ease-out-cubic'
				data-aos-duration='2000'
				data-aos-delay='800'>
				<img src={image} alt='photo' className='w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square' />
				<div className='space-y-4 text-center divide-y divide-gray-300'>
					<div className='my-2 space-y-1'>
						<h2 className='text-xl font-semibold sm:text-2xl'>Name: {name}</h2>
						<p className='px-5 text-xs sm:text-base text-gray-600'>Email: {user?.email || "no email"}</p>
					</div>
				</div>
			</div>

			<div
				className='w-full max-w-[30.5rem] p-6 space-y-3 rounded-xl bg-[#E8F3F1] drop-shadow-xl mt-4 lg:mt-0'
				data-aos='flip-right'
				data-aos-easing='ease-out-cubic'
				data-aos-duration='2000'
				data-aos-delay='1000'>
				<h1 className='text-2xl font-bold text-center'>Update Profile</h1>
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
					<button className='block w-full p-3 text-center rounded-sm text-gray-50 bg-[#5EC2AC]'>Update</button>
				</form>
			</div>
		</div>
	)
}

export default Profile
