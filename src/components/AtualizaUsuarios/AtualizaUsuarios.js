import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FiRefreshCw } from 'react-icons/fi';
//import AdicionarUsuario from '../AdicionarUsuario/AdicionarUsuario'
import './AtualizaUsuarios.css';

const AtualizaUsuarios = () => {

  const { id } = useParams()

  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/pessoas/${id}`, {
      method: 'GET', 
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(resposta => resposta.json())
      .then(dados => {
        if (dados) {
          setUsuario({
            id: dados.id,
            nome: dados.nome,
            sobrenome: dados.sobrenome,
            email: dados.email
          })
        }
      })
  }, [id])

  const handleChange = (event) => {
    setUsuario({[event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
       event.preventDefault();
       fetch(`http://localhost:3000/pessoas/${id}`,{
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(usuario)
      })
        .then((response) => response.json()
        .then((data) => {
          console.log(data)
          //event.AdicionarUsuario.onSubmitHandler(usuario)
          alert("Atualizou")
          setUsuario(data)
        }) 
      .catch (err => console.log(err))
  )}

  return (
    <div className="AdicionarUsuario">
    <form onSubmit= {handleSubmit}>
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          value={usuario.nome}
          onChange={handleChange}
         >
        </input>
        
      <label>Sobrenome</label>
        <input
          type="text"
          name="sobrenome"
          value={usuario.sobrenome}
          onChange={handleChange}
        >
      </input>
      <label>Email</label>
        <input
          type="text"
          name="email"
          value={usuario.email}
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
