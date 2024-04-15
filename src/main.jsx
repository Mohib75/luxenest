import ReactDOM from "react-dom/client"
import "./index.css"
import { router } from "./routes/Routes.jsx"
import { RouterProvider } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import FirebaseProvider from "./firebaseProvider/FirebaseProvider.jsx"
import { Toaster } from "react-hot-toast"
import "aos/dist/aos.css"
import AOS from "aos"

AOS.init({ duration: 1000 })

ReactDOM.createRoot(document.getElementById("root")).render(
	<FirebaseProvider>
		<HelmetProvider>
			<RouterProvider router={router} />
			<Toaster />
		</HelmetProvider>
	</FirebaseProvider>
)
