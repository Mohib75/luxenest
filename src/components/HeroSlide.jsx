import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-flip"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { EffectFlip, Pagination, Navigation, Autoplay } from "swiper/modules"
import PropTypes from "prop-types"

const HeroSlide = ({ estates }) => {
	return (
		<div className='flex xl:flex-row flex-col xl:justify-between gap-4 items-center'>
			<div className='w-[300px] sm:w-[600px] overflow-hidden' data-aos='zoom-in-up' data-aos-delay='800'>
				<Swiper
					effect={"flip"}
					grabCursor={true}
					pagination={true}
					navigation={true}
					autoplay={{
						delay: 1500,
						disableOnInteraction: false,
					}}
					modules={[Autoplay, EffectFlip, Pagination, Navigation]}
					className='mySwiper'>
					{estates &&
						estates.map((estate, index) => (
							<SwiperSlide key={index} className='overflow-hidden'>
								<div className='relative flex justify-center rounded-xl'>
									<div className='absolute inset-0 bg-gray-800 opacity-40 z-20 rounded-xl'></div>
									<img src={estate.image} className='w-full h-full object-cover z-10 rounded-xl' />
									<h1 className='text-lg sm:text-2xl text-[#00ffaeb6] font-bold absolute z-30 mt-2'>{estate.estate_title}</h1>
								</div>
							</SwiperSlide>
						))}
				</Swiper>
			</div>
			<div
				className='sm:w-1/2 flex flex-col mx-4 sm:mx-0'
				data-aos='flip-left'
				data-aos-easing='ease-out-cubic'
				data-aos-duration='2000'
				data-aos-delay='1000'>
				<h2 className='text-xl leading-[40px] sm:text-3xl xl:text-6xl font-bold sm:leading-[70px]'>
					Discover The Best Luxury places For Sale and Rent
				</h2>

				<p className=' sm:text-lg font-medium text-[#797979] my-8 leading-10'>
					You can find your perfect piece of places here. We have many type of places like Pent-houses, Resorts, Villa's, Mansion's etc.
				</p>
			</div>
		</div>
	)
}

export default HeroSlide

HeroSlide.propTypes = {
	estates: PropTypes.object,
}
