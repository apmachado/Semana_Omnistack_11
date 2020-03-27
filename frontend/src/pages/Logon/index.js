import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import heroLogo from '../../assets/logo.svg';
import heroImg from '../../assets/heroes.png';

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    try{
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch(error) {
      alert('Falhano login');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={heroLogo} alt={"be The Hero"}/>
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon com sua conta</h1>

          <input placeholder="ID da sua ONG" value={id} onChange={event => setId(event.target.value)}/>
          <button className="button" type="submit">Logar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041"/>
            Criar uma conta
          </Link>
        </form>
      </section>
      <img src={heroImg} alt={"Heroes"}/>
    </div>
  );
}