import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddCompany from "./pages/AddCompany";
import AddProduct from "./pages/AddProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/addCompany" element={<AddCompany />} />
				<Route path="/addProduct" element={<AddProduct />} />
			</Routes>
		</Router>
	);
}

export default App;
