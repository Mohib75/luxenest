import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Home from "../pages/Home"
import Properties from "../pages/Properties"
import PropertyDetails from "../pages/PropertyDetails"
import PrivateRoute from "../components/PrivateRoute/PrivateRoute"
import Profile from "../pages/Profile"
import Blog from "../pages/Blog"
import Contact from "../pages/Contact"
import ErrorPage from "../components/ErrorPage"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				loader: () => fetch("/estate.json"),
				element: <Home />,
			},
			{
				path: "/signIn",
				element: <Login />,
			},
			{
				path: "/signUp",
				element: <Register />,
			},
			{
				path: "/properties",
				loader: () => fetch("/estate.json"),
				element: <Properties />,
			},
			{
				path: "/propertyDetails/:id",
				element: (
					<PrivateRoute>
						<PropertyDetails />
					</PrivateRoute>
				),
				loader: () => fetch("/estate.json"),
			},
			{
				path: "/profile",
				element: (
					<PrivateRoute>
						<Profile />
					</PrivateRoute>
				),
			},
			{
				path: "/blog",
				element: (
					<PrivateRoute>
						<Blog />
					</PrivateRoute>
				),
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
])
