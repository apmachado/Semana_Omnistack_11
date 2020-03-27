import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import heroLogo from '../../assets/logo.svg';
import api from '../../services/api';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();
  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(event) {
    event.preventDefault();
    const data = {
      title, description, value
    }

    try{
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId 
        }
      })
      history.push('/profile');
    } catch (error) {
      alert('Erro ao cadastrar caso')
    }
  }

  return(
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={heroLogo} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>Faça se cadstro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041"/>
            Voltar para Logon
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Título" 
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <textarea 
            placeholder="Descrição" 
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
          <input 
            placeholder="Valor (R$)" 
            value={value}
            onChange={event => setValue(event.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}