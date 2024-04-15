import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
	return (
		<footer className='footer footer-center p-10 bg-[#364B44] text-primary-content relative'>
			<aside>
				<h1 className='text-3xl font-bold' data-aos='fade-down' data-aos-delay='1000' data-aos-anchor-placement='#propertyAnchor'>
					LuxeNest
				</h1>
				<p className='font-bold' data-aos='fade-up' data-aos-delay='1200' data-aos-anchor-placement='#propertyAnchor'>
					LuxeNest Ltd. <br />
					Providing reliable service since 2023
				</p>
				<p data-aos='fade-down' data-aos-delay='1400' data-aos-anchor-placement='#propertyAnchor'>
					Copyright © 2024 - All right reserved
				</p>
			</aside>
			<nav>
				<div className='grid grid-flow-col gap-4'>
					<Link
						className='hover:scale-110 transform transition-all duration-500'
						data-aos='fade-down'
						data-aos-delay='1000'
						data-aos-anchor-placement='#propertyAnchor'>
						<FaTwitter className='text-3xl text-[#1DA1F2]' />
					</Link>
					<Link
						className='hover:scale-110 transform transition-all duration-500'
						data-aos='fade-down'
						data-aos-delay='1200'
						data-aos-anchor-placement='#propertyAnchor'>
						<FaFacebookF className='text-3xl text-[#4267B2]' />
					</Link>
					<Link
						className='hover:scale-110 transform transition-all duration-500'
						data-aos='fade-down'
						data-aos-delay='1400'
						data-aos-anchor-placement='#propertyAnchor'>
						<FaYoutube className='text-3xl text-[#FF0000]' />
					</Link>
				</div>
			</nav>
			<div id='propertyAnchor' className='absolute right-0 bottom-0'></div>
		</footer>
	)
}

export default Footer
