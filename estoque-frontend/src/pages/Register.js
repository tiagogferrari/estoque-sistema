import React from 'react';
import AuthForm from '../components/AuthForm';

const Register = () => {
  return <AuthForm isRegister={true}/>;
};

export default Register;

/*
const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { username, password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Erro ao registrar usuário front');
    }
  };

  return (
    <div>
      <h2>Registro</h2>
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
        <button type="submit">Registrar</button>
      </form>
      <p>{message}</p>
    </div>
  );
  };

export default Register;
 */