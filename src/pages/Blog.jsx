import { Helmet } from "react-helmet-async"

const Blog = () => {
	return (
		<div className='grid grid-cols-1 gap-8 my-12 mx-4 xl:mx-0'>
			<Helmet>
				<title>LuxeNest | Blog</title>
			</Helmet>
			<div
				className='bg-gray-100 text-gray-900 rounded-2xl drop-shadow-2xl'
				data-aos='fade-down'
				data-aos-duration='1500'
				data-aos-easing='linear'
				data-aos-delay='800'>
				<div className='container flex flex-col lg:flex-row bg-gray-50 rounded-2xl pb-6 lg:pb-0'>
					<div className='flex flex-col p-6 lg:p-10 lg:w-3/5'>
						<div className='flex justify-start'>
							<span className='px-4 py-1 text-xs lg:text-lg rounded-full bg-[#5EC2AC] text-gray-50'>Penthouse</span>
						</div>
						<h1 className='text-lg lg:text-3xl font-semibold my-4'>The Ultimate Guide to Penthouse Living</h1>
						<p className='flex-1 pt-2 text-sm lg:text-lg'>
							Discover the allure of penthouse living with breathtaking skyline views, luxurious amenities, and exclusive lifestyle
							experiences.
						</p>
						<div className='flex items-center justify-between pt-2 mt-2'>
							<div className='flex space-x-2'>
								<span className='self-center text-sm lg:text-lg font-semibold'>by Alice Johnson</span>
							</div>
							<span className='text-xs lg:text-lg font-semibold'>2024-04-12</span>
						</div>
					</div>
					<div className='w-[70%] lg:w-[50%] rounded-2xl lg:rounded-r-2xl self-center lg:self-auto'>
						<img
							src='https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg?auto=compress&cs=tinysrgb&w=600'
							className=' w-full h-full object-cover rounded-2xl lg:rounded-r-2xl'
							alt=''
						/>
					</div>
				</div>
			</div>

			<div
				className='bg-gray-100 text-gray-900 rounded-2xl drop-shadow-2xl'
				data-aos='fade-up'
				data-aos-duration='1500'
				data-aos-easing='linear'
				data-aos-delay='800'>
				<div className='container flex flex-col lg:flex-row bg-gray-50 rounded-2xl pb-6 lg:pb-0'>
					<div className='flex flex-col p-6 lg:p-10 lg:w-3/5'>
						<div className='flex justify-start'>
							<span className='px-4 py-1 text-xs lg:text-lg rounded-full bg-[#5EC2AC] text-gray-50'>Private Island</span>
						</div>
						<h1 className='text-lg lg:text-3xl font-semibold my-4'>Escape to Paradise: Experiencing Private Island Luxury</h1>
						<p className='flex-1 pt-2 text-sm lg:text-lg'>
							Uncover the magic of private island living with secluded beaches, crystal-clear waters, and exclusive retreats that offer
							ultimate privacy and tranquility.
						</p>
						<div className='flex items-center justify-between pt-2 mt-2'>
							<div className='flex space-x-2'>
								<span className='self-center text-sm lg:text-lg font-semibold'>by Michael Brown</span>
							</div>
							<span className='text-xs lg:text-lg font-semibold'>2024-04-10</span>
						</div>
					</div>
					<div className='w-[70%] lg:w-[50%] rounded-2xl lg:rounded-r-2xl self-center lg:self-auto'>
						<img
							src='https://images.pexels.com/photos/1450340/pexels-photo-1450340.jpeg?auto=compress&cs=tinysrgb&w=600'
							className=' w-full h-full object-cover rounded-2xl lg:rounded-r-2xl'
							alt=''
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Blog
