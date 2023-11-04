import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Account = () => {
  const [message, setMessage] = useState('');

  // Aqui você pode adicionar a lógica para buscar a mensagem da sua API
  useEffect(() => {
    // Exemplo: Suponha que sua API retorne a mensagem em JSON
    // Substitua a URL pela URL correta da sua API.
    fetch('http://localhost:4000/accounts')
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error('Erro ao buscar a mensagem:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2>Minha Conta</h2>
      <p>{message}</p>
    </div>
  );
};

export default Account;
