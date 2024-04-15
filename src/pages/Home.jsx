import { Helmet } from "react-helmet-async"
import { useLoaderData } from "react-router-dom"
import HeroSlide from "../components/HeroSlide"
import Estates from "../components/Estates"

const Home = () => {
	const estates = useLoaderData()

	return (
		<div className='mt-12'>
			<Helmet>
				<title>LuxeNest</title>
			</Helmet>

			<HeroSlide estates={estates} />

			<Estates estates={estates} />
		</div>
	)
}

export default Home
