import React, { useState } from 'react';
import { FiRefreshCw } from 'react-icons/fi';
import './AtualizaUsuarios.css';

const AtualizaUsuarios = () => {

  const [formData, setFormData] = useState({
    name: '',
    sobrenome:'',
    email: '',
  });

  const handleChange = (event) => {
    setFormData({
      [event.target.name]: event.target.value,
      [event.target.sobrenome]: event.target.value,
      [event.target.email]: event.target.value
    });
  };

  const handleSubmit = usuario => {
    
    try {
      const response = usuario => fetch(`https://reqres.in/api/users/atualiza${usuario.id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        window.confirm("Atualizou")
      } else {
        window.confirm("Algo deu errado ao atualizar os dados");
      }
      // Trate a resposta da API da forma que achar melhor
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="AdicionarUsuario">
    <form onSubmit={handleSubmit}>
      
        <label>Nome</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
         >
        </input>
        
      <label>Sobrenome</label>
        <input
          type="sobrenome"
          name="sobrenome"
          value={formData.sobrenome}
          onChange={handleChange}
        >
      </input>
      <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        >
      </input>
      <div className="icon">
        <button className="icon" type="submit"><FiRefreshCw /></button>
      </div>
    </form>
 </div>
  );
};

export default AtualizaUsuarios;
