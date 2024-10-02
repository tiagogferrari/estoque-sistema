import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ isRegister, setIsRegister }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const url = isRegister
			? "http://localhost:5000/api/auth/register"
			: "http://localhost:5000/api/auth/login";

		try {
			const response = await axios.post(
				url,
				{ username, password },
				{ withCredentials: true },
			);
			setMessage(response.data.message);

			if (!isRegister) {
				navigate("/addProduct");
			}
		} catch (error) {
			setMessage(
				isRegister ? "Erro ao registrar usuário" : "Erro ao fazer login",
			);
		}
	};

	return (
		<div className="flex items-center justify-center h-[calc(100vh-64px)] bg-gray-100">
			{" "}
			<div className="bg-white rounded-lg shadow-md p-8 w-96">
				<h2 className="text-4xl font-semibold mb-6 text-center">
					{isRegister ? "Registro" : "Login"}
				</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-black text-lg font-semibold mb-2">
							Nome de usuário:
						</label>
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
							className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black font-normal"
						/>
					</div>
					<div className="mb-6">
						<label className="block text-black text-lg font-semibold mb-2">
							Senha:
						</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black font-medium"
						/>
					</div>
					<button
						type="submit"
						className={`w-full bg-black text-white font-semibold py-2 rounded transition duration-200 
                        ${isRegister ? "hover:bg-red-600" : "hover:bg-green-600"}`}
					>
						{isRegister ? "Registrar" : "Entrar"}
					</button>
				</form>
				{message && <p className="text-red-500 mt-4 text-center">{message}</p>}
				<p className="text-center mt-4">
					{isRegister ? (
						// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
						<>Já tem uma conta? <span onClick={() => navigate("/login")} className="text-blue-600 font-normal cursor-pointer hover:underline">Faça login</span></>
					) : (
						// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
						<>Não tem uma conta? <span onClick={() => navigate("/register")} className="text-blue-600 font-normal cursor-pointer hover:underline">Criar uma</span></>
					)}
				</p>
			</div>
		</div>
	);
};

export default AuthForm;
