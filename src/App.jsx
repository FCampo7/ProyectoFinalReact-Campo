import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavContainer from "./components/NavContainer/NavContainer.jsx";
import MainContainer from "./components/MainContainer/MainContainer.jsx";
import ItemListContainer from "./components/MainContainer/ItemListContainer/ItemListContainer.jsx";
import Details from "./components/MainContainer/Details/Details.jsx";
import Page404 from "./components/MainContainer/Page404/Page404.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import LogIn from "./components/LogIn/LogIn.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Checkout from "./components/MainContainer/Checkout/Checkout.jsx";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<UserProvider>
			<BrowserRouter>
				<Toaster position="bottom-center" reverseOrder={false} />
				<NavContainer />
				<Routes>
					<Route path="/" element={<MainContainer />} />
					<Route path="/products" element={<ItemListContainer />} />
					<Route path="/details/:productId" element={<Details />} />
					<Route path="/login" element={<LogIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="*" element={<Page404 />} />
					<Route path="/checkout" element={<Checkout />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</UserProvider>
	);
}

export default App;
