import PropTypes from "prop-types"
import { GiPriceTag } from "react-icons/gi"
import { TfiRulerAlt2 } from "react-icons/tfi"
import { Link } from "react-router-dom"
import Button from "./Button"

const EstateCard = ({ estate }) => {
	const { id, image, estate_title, price, area, status } = estate
	return (
		<div
			className='card sm:w-96 bg-base-100 p-6 rounded-2xl drop-shadow-2xl h-[500px]'
			data-aos='fade-up'
			data-aos-anchor-placement='center-center'>
			<figure className='w-full rounded-xl h-[230px] relative'>
				<img src={image} alt='Shoes' className='w-full h-full object-cover rounded-xl' />
				<div className='absolute h-11 flex justify-center items-center rounded-lg bg-[#5EC2AC] text-white w-[80px] font-semibold leading-5 hover:bg-[#5EC2AC] top-0 right-0 opacity-90'>
					{status}
				</div>
			</figure>
			<div className='card-body p-0 mt-4 justify-end'>
				<h2 className='card-title text-2xl font-bold leading-8'>{estate_title}</h2>

				<hr className='w-full border-[1px] border-dashed border-[#13131326] mt-4' />
				<div className='flex justify-between items-center gap-2'>
					<GiPriceTag />

					<p className='text-[#131313CC] font-medium leading-5'>{price}</p>
					<div className='flex gap-2 items-center'>
						<TfiRulerAlt2 />

						<p className='text-[#131313CC] font-medium leading-5'>{area}</p>
					</div>
				</div>

				<Link to={`/propertyDetails/${id}`} className='self-center mt-8'>
					<Button className='btn rounded-lg bg-[#5EC2AC] text-white text-lg font-semibold leading-5 hover:bg-[#5EC2AC] hover:scale-105 transform transition-all duration-500'>
						View Property
					</Button>
				</Link>
			</div>
		</div>
	)
}

export default EstateCard

EstateCard.propTypes = {
	estate: PropTypes.object,
}
