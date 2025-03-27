import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função para buscar dados da API
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <div className="container">
      <h1>Lista de Usuários</h1>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Endereço:</strong> {user.address.street}, {user.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
