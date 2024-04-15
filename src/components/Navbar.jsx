import { Link, NavLink } from "react-router-dom"
import Button from "./Button"
import useAuth from "../hooks/useAuth"

const Navbar = () => {
	const { logout, user } = useAuth()
	return (
		<div className='navbar bg-base-100 mt-6 justify-center lg:justify-normal'>
			<div className='navbar-start !justify-center lg:!justify-start'>
				<div className='dropdown'>
					<div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
						<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
						</svg>
					</div>
					<ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 items-center'>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "border-[1px] border-solid border-[#5EC2AC] rounded-lg hover:bg-[#5EC2AC] hover:text-white transition-all duration-500 text-lg leading-5 text-[#5EC2AC] px-4 py-2 font-bold"
									: "text-lg leading-5 text-[#131313CC] hover:bg-[#97B0AA] hover:text-white hover:rounded-lg transition-all duration-500 px-4 py-2"
							}
							to='/'>
							Home
						</NavLink>

						<NavLink
							className={({ isActive }) =>
								isActive
									? "border-[1px] border-solid border-[#5EC2AC] rounded-lg hover:bg-[#5EC2AC] hover:text-white transition-all duration-500 text-lg leading-5 text-[#5EC2AC] px-4 py-2 font-bold"
									: "text-lg leading-5 text-[#131313CC] hover:bg-[#97B0AA] hover:text-white hover:rounded-lg transition-all duration-500 px-4 py-2"
							}
							to='/properties'>
							Properties
						</NavLink>

						<NavLink
							className={({ isActive }) =>
								isActive
									? "border-[1px] border-solid border-[#5EC2AC] rounded-lg hover:bg-[#5EC2AC] hover:text-white transition-all duration-500 text-lg leading-5 text-[#5EC2AC] px-4 py-2 font-bold"
									: "text-lg leading-5 text-[#131313CC] hover:bg-[#97B0AA] hover:text-white hover:rounded-lg transition-all duration-500 px-4 py-2"
							}
							to='/contact'>
							Contact
						</NavLink>

						<NavLink
							className={({ isActive }) =>
								isActive
									? "border-[1px] border-solid border-[#5EC2AC] rounded-lg hover:bg-[#5EC2AC] hover:text-white transition-all duration-500 text-lg leading-5 text-[#5EC2AC] px-4 py-2 font-bold"
									: "text-lg leading-5 text-[#131313CC] hover:bg-[#97B0AA] hover:text-white hover:rounded-lg transition-all duration-500 px-4 py-2"
							}
							to='/blog'>
							Blog
						</NavLink>

						{user ? (
							<NavLink
								className={({ isActive }) =>
									isActive
										? "border-[1px] border-solid border-[#5EC2AC] rounded-lg hover:bg-[#5EC2AC] hover:text-white transition-all duration-500 text-lg leading-5 text-[#5EC2AC] px-4 py-2 font-bold"
										: "text-lg leading-5 text-[#131313CC] hover:bg-[#97B0AA] hover:text-white hover:rounded-lg transition-all duration-500 px-4 py-2"
								}
								to='/profile'>
								Profile
							</NavLink>
						) : (
							""
						)}
						{user ? (
							<>
								<Link to='/profile'>
									<div className='btn btn-ghost btn-circle avatar'>
										<div className='w-10 rounded-full' title={user?.displayName || "username not found"}>
											<img
												alt='Tailwind CSS Navbar component'
												src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
											/>
										</div>
									</div>
								</Link>

								<Button
									className='btn rounded-lg bg-[#5EC2AC] text-white w-[116px] text-lg font-semibold leading-5 hover:bg-[#5EC2AC] hover:scale-105 transform transition-all duration-500'
									onClick={logout}>
									Sign Out
								</Button>
							</>
						) : (
							<Link to='/signIn'>
								<Button className='btn rounded-lg bg-[#5EC2AC] text-white w-[116px] text-lg font-semibold leading-5 hover:bg-[#5EC2AC] hover:scale-105 transform transition-all duration-500'>
									Sign In
								</Button>
							</Link>
						)}
					</ul>
				</div>

				<Link to='/'>
					<h1 data-aos='fade-right' className='text-xl sm:text-3xl font-bold leading-8 text-center sm:text-left logo'>
						LuxeNest
					</h1>
				</Link>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal gap-8 items-center'>
					<NavLink
						data-aos='fade-down'
						data-aos-delay='300'
						className={({ isActive }) =>
							isActive
								? "border-[1px] border-solid border-[#5EC2AC] rounded-lg hover:bg-[#5EC2AC] hover:text-white transition-all duration-500 text-lg leading-5 text-[#5EC2AC] px-4 py-2 font-bold"
								: "text-lg leading-5 text-[#131313CC] hover:bg-[#97B0AA] hover:text-white hover:rounded-lg transition-all duration-500 px-4 py-2"
						}
						to='/'>
						Home
					</NavLink>
					<NavLink
						data-aos='fade-up'
						data-aos-delay='400'
						className={({ isActive }) =>
							isActive
								? "border-[1px] border-solid border-[#5EC2AC] rounded-lg hover:bg-[#5EC2AC] hover:text-white transition-all duration-500 text-lg leading-5 text-[#5EC2AC] px-4 py-2 font-bold"
								: "text-lg leading-5 text-[#131313CC] hover:bg-[#97B0AA] hover:text-white hover:rounded-lg transition-all duration-500 px-4 py-2"
						}
						to='/properties'>
						Properties
					</NavLink>

					<NavLink
						data-aos='fade-down'
						data-aos-delay='500'
						className={({ isActive }) =>
							isActive
								? "border-[1px] border-solid border-[#5EC2AC] rounded-lg hover:bg-[#5EC2AC] hover:text-white transition-all duration-500 text-lg leading-5 text-[#5EC2AC] px-4 py-2 font-bold"
								: "text-lg leading-5 text-[#131313CC] hover:bg-[#97B0AA] hover:text-white hover:rounded-lg transition-all duration-500 px-4 py-2"
						}
						to='/contact'>
						Contact
					</NavLink>

					<NavLink
						data-aos='fade-up'
						data-aos-delay='600'
						className={({ isActive }) =>
							isActive
								? "border-[1px] border-solid border-[#5EC2AC] rounded-lg hover:bg-[#5EC2AC] hover:text-white transition-all duration-500 text-lg leading-5 text-[#5EC2AC] px-4 py-2 font-bold"
								: "text-lg leading-5 text-[#131313CC] hover:bg-[#97B0AA] hover:text-white hover:rounded-lg transition-all duration-500 px-4 py-2"
						}
						to='/blog'>
						Blog
					</NavLink>

					{user ? (
						<NavLink
							data-aos='fade-down'
							data-aos-delay='700'
							className={({ isActive }) =>
								isActive
									? "border-[1px] border-solid border-[#5EC2AC] rounded-lg hover:bg-[#5EC2AC] hover:text-white transition-all duration-500 text-lg leading-5 text-[#5EC2AC] px-4 py-2 font-bold"
									: "text-lg leading-5 text-[#131313CC] hover:bg-[#97B0AA] hover:text-white hover:rounded-lg transition-all duration-500 px-4 py-2"
							}
							to='/profile'>
							Profile
						</NavLink>
					) : (
						""
					)}
				</ul>
			</div>

			{user ? (
				<div className='navbar-end gap-4 hidden lg:flex'>
					<Link to='/profile'>
						<div className='btn btn-ghost btn-circle avatar' data-aos='fade-right'>
							<div className='w-10 rounded-full' title={user?.displayName || "username not found"}>
								<img
									alt='Tailwind CSS Navbar component'
									src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
								/>
							</div>
						</div>
					</Link>

					<Button
						data-aos='fade-left'
						className='btn rounded-lg bg-[#5EC2AC] text-white w-[116px] text-lg font-semibold leading-5 hover:bg-[#5EC2AC] hover:scale-105 transform transition-all duration-500'
						onClick={logout}>
						Sign Out
					</Button>
				</div>
			) : (
				<div data-aos='fade-left' className='navbar-end gap-4 hidden lg:flex'>
					<Link to='/signIn'>
						<Button className='btn rounded-lg bg-[#5EC2AC] text-white w-[116px] text-lg font-semibold leading-5 hover:bg-[#5EC2AC] hover:scale-105 transform transition-all duration-500'>
							Sign In
						</Button>
					</Link>
				</div>
			)}
		</div>
	)
}

export default Navbar
