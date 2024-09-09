import React, { useState } from 'react';
import axios from 'axios';

const AddCompany = () => {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [history, setHistory] = useState('');
    const [values, setValues] = useState('');
    const [location, setLocation] = useState('');
    const [department, setDepartment] = useState('');
    const [services, setServices] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/company/', { name, history, values, location, department, services, contact }, { withCredentials: true });
            setMessage(response.data.message)
        } catch (error) {
            setMessage('Erro ao criar empresa');
        }
    };

    return (
        <div>
            <h2>Criar Nova Empresa</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome da empresa*
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nome da Empresa"
                        required
                    />
                </label>
                <br />
                <label>
                    História*
                    <textarea
                        placeholder="História da Empresa"
                        value={history}
                        onChange={(e) => setHistory(e.target.value)}
                        rows="4"
                        required
                    />
                </label>
                <br />
                <label>
                    Valores*
                    <textarea
                        placeholder="Valores da Empresa"
                        value={values}
                        onChange={(e) => setValues(e.target.value)}
                        rows="4"
                        required
                    />
                </label>
                <br />
                <label>
                    Localização*
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Localização"
                        required
                    />
                </label>
                <br />
                <label>
                    Departamento*
                    <input
                        type="text"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        placeholder="Departamento"
                        required
                    />
                </label>
                <br />
                <label>
                    Serviços*
                    <textarea
                        placeholder="Serviços da Empresa"
                        value={services}
                        onChange={(e) => setServices(e.target.value)}
                        rows="4"
                        required
                    />
                </label>
                <br />
                <label>
                    Contato*
                    <input
                        type="text"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Contato"
                        required
                    />
                </label>
                <br />
                <button type="submit">Criar Empresa</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default AddCompany;
