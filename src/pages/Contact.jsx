import { Helmet } from "react-helmet-async"

const Contact = () => {
	return (
		<div className='flex justify-center my-16'>
			<Helmet>
				<title>LuxeNest | Contact</title>
			</Helmet>
			<div
				className='w-full max-w-md p-8 space-y-3 rounded-xl bg-[#E8F3F1] drop-shadow-xl mx-4 sm:mx-0'
				data-aos='fade-down'
				data-aos-delay='800'>
				<h1 className='text-2xl font-bold text-center'>Contact Us</h1>
				<form action='' className='space-y-6'>
					<div className='space-y-1 text-sm'>
						<label htmlFor='name' className='block text-gray-600'>
							Name
						</label>
						<input
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
							type='email'
							name='email'
							id='email'
							placeholder='Email'
							className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none'
						/>
					</div>

					<div className='space-y-1 text-sm'>
						<label htmlFor='email' className='block text-gray-600'>
							Email
						</label>
						<textarea
							name='message'
							id='message'
							placeholder='Message...'
							className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none resize-y'></textarea>
					</div>

					<button className='block w-full p-3 text-center rounded-sm text-gray-50 bg-[#5EC2AC]'>Send</button>
				</form>
			</div>
		</div>
	)
}

export default Contact
