import { Link } from "react-router-dom"
import Button from "./Button"
import EstateCard from "./EstateCard"
import PropTypes from "prop-types"

const Estates = ({ estates }) => {
	return (
		<div className='flex flex-col my-12'>
			<h3 className='text-2xl sm:text-[40px] font-bold leading-[53px] text-center' data-aos='fade-down' data-aos-delay='1200'>
				Properties
			</h3>
			<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-4 place-items-center xl:place-items-start mx-2 sm:mx-0'>
				{estates && estates.slice(0, 3).map((estate, index) => <EstateCard key={index} estate={estate} />)}
			</div>
			<Link to='/properties' className='self-center mt-8'>
				<Button className='btn rounded-lg bg-[#5EC2AC] text-white text-lg font-semibold leading-5 hover:bg-[#5EC2AC] hover:scale-105 transform transition-all duration-500'>
					Show All Properties
				</Button>
			</Link>
		</div>
	)
}

export default Estates

Estates.propTypes = {
	estates: PropTypes.array,
}
