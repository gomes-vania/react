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
      [event.target.name]: event.target.value,
      [event.target.sobrenome]: event.target.value,
      [event.target.email]: event.target.value
    });
  };

  const handleSubmit = usuario => {
    try {
      fetch(`https://reqres.in/api/users/atualiza/${id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then(resposta => {
        if (resposta.ok) {
          console.log('funcionou')
          // alert('funcionou!')
          // window.confirm("Atualizou")
        } else {
          window.confirm("Algo deu errado ao atualizar os dados");
        }
      });

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
          name="nome"
          value={formData.nome}
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
