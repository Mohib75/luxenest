import { useLoaderData, useParams } from "react-router-dom"
import { MdOutlineLocationOn } from "react-icons/md"
import { TfiRulerAlt2 } from "react-icons/tfi"
import { Helmet } from "react-helmet-async"

const PropertyDetails = () => {
	const estates = useLoaderData()
	const { id } = useParams()
	const idInt = parseInt(id)
	const estate = estates.find((estate) => estate.id === idInt)

	return (
		<div className='flex flex-col gap-4 mx-2 mt-8'>
			<Helmet>
				<title>LuxeNest | Property Detail</title>
			</Helmet>
			<figure className='w-full rounded-xl relative' data-aos='zoom-in' data-aos-delay='900'>
				<div className='absolute backdrop-blur-[3px] bg-white/10 z-20 h-[200px] bottom-0 w-full'></div>
				<div className='relative h-[600px] flex justify-center'>
					<img src={`${estate.image}?quality=50`} alt='Shoes' className='w-full h-full object-cover rounded-xl' />
					<div className='flex justify-between gap-4 text-white absolute bottom-20 z-30 w-3/4'>
						<div className='flex flex-col gap-2'>
							<h1 className='text-white font-semibold text-2xl'>{estate.estate_title}</h1>
							<p className='flex gap-2 font-light items-center'>
								<MdOutlineLocationOn />
								{estate.location}
							</p>
						</div>

						<div className='flex flex-col gap-2'>
							<h3 className='font-bold text-2xl'>{estate.price}</h3>
							<p className='flex gap-2 text-right font-light items-center'>
								<TfiRulerAlt2 />
								{estate.area}
							</p>
						</div>
					</div>
				</div>
			</figure>

			<div className='flex flex-col mt-12'>
				<h2 className='text-3xl text-center font-semibold' data-aos='fade-down' data-aos-anchor-placement='bottom-center'>
					Description
				</h2>
				<p
					className='text-lg leading-9 text-black font-light my-4 text-center'
					data-aos='fade-right'
					data-aos-anchor-placement='bottom-center'>
					{estate.description}
				</p>
			</div>

			<div className='flex flex-col'>
				<h2 className='text-3xl text-center font-semibold' data-aos='fade-up' data-aos-anchor-placement='bottom-center'>
					Details
				</h2>
				<div className='bg-[#E8F3F1] rounded-xl p-4 my-8 flex justify-center' data-aos='fade-down' data-aos-anchor-placement='center-center'>
					<div className='w-3/4 flex flex-col text-black'>
						<div className='flex justify-between items-center gap-2'>
							<p className='text-lg font-bold'>Price:</p>
							<p>{estate.price}</p>
						</div>
						<div className='divider'></div>

						<div className='flex justify-between items-center gap-2'>
							<p className='text-lg font-bold'>Property Size:</p>
							<p>{estate.area}</p>
						</div>
						<div className='divider'></div>

						<div className='flex justify-between items-center gap-2'>
							<p className='text-lg font-bold'>Property Type:</p>
							<p>{estate.segment_name}</p>
						</div>
						<div className='divider'></div>

						<div className='flex justify-between items-center gap-2'>
							<p className='text-lg font-bold'>Property Facilities:</p>
							<div className='flex gap-2'>
								{estate.facilities &&
									estate.facilities.map((facility, index) => (
										<p key={index}>
											{facility}
											{index === 2 ? "" : ","}
										</p>
									))}
							</div>
						</div>
						<div className='divider'></div>

						<div className='flex justify-between items-center gap-2'>
							<p className='text-lg font-bold'>Property Status:</p>
							<p>{estate.status}</p>
						</div>
						<div className='divider'></div>

						<div className='flex justify-between items-center gap-2'>
							<p className='text-lg font-bold'>Address</p>
							<p>{estate.location}</p>
						</div>
						<div className='divider'></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PropertyDetails
