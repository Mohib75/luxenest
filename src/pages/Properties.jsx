import { useLoaderData } from "react-router-dom"
import EstateCard from "../components/EstateCard"
import { Helmet } from "react-helmet-async"

const Properties = () => {
	const estates = useLoaderData()
	return (
		<div className='flex flex-col my-12'>
			<Helmet>
				<title>LuxeNest | Properties</title>
			</Helmet>
			<h3 className='text-2xl sm:text-[40px] font-bold leading-[53px] text-center' data-aos='fade-down' data-aos-delay='900'>
				Properties
			</h3>

			<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-4 mx-2 sm:mx-0 place-items-center xl:place-items-start'>
				{estates && estates.map((estate, index) => <EstateCard key={index} estate={estate} />)}
			</div>
		</div>
	)
}

export default Properties
