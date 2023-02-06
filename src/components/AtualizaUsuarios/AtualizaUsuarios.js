import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FiRefreshCw } from 'react-icons/fi';
import './AtualizaUsuarios.css';

const AtualizaUsuarios = () => {

  const { id } = useParams()

  const [formData, setFormData] = useState({
    nome: '',
    sobrenome:'',
    email: '',
  });

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then(resposta => resposta.json())
      .then(dados => {
        if (dados.data) {
          setFormData({
            id: dados.data.id,
            nome: dados.data.first_name,
            sobrenome: dados.data.last_name,
            email: dados.data.email,
            foto: dados.data.avatar
          })
        }
      })
  }, [id]) 

  const handleChange = (event) => {
    setFormData({
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = () => {
    
    try {
       fetch(`https://localhost:8080/reqres.in/api/users/${id}`,{
        method: 'PUT',
        body: JSON.stringify({
          nome: '',
          sobrenome:'',
          email: '',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json()
           (response.ok),
             alert('Atualizou')    
        )
        .then((json) => console.log(json))
    }  catch {
      alert("Erro ao atualizar!");
    }
  };
  

  return (
    <div className="AdicionarUsuario">
    <form onSubmit={handleSubmit}>
      
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
         >
        </input>
        
      <label>Sobrenome</label>
        <input
          type="text"
          name="sobrenome"
          value={formData.sobrenome}
          onChange={handleChange}
        >
      </input>
      <label>Email</label>
        <input
          type="text"
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
