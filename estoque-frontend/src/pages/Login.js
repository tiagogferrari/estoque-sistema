import React from "react";
import AuthForm from "../components/AuthForm";

const Login = () => {
	return <AuthForm isRegister={false} />;
};

export default Login;

/*
const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				"http://localhost:5000/api/auth/login",
				{ username, password },
				{ withCredentials: true },
			);
			setMessage(response.data.message);
			navigate("/addProduct");
		} catch (error) {
			setMessage("Erro ao fazer login front");
		}
	};

	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Nome de usuário:
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</label>
				<br />
				<label>
					Senha:
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</label>
				<br />
				<button type="submit">Login</button>
			</form>
			<p>{message}</p>
		</div>
	);

	};

export default Login;
*/
