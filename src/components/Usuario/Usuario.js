import React from 'react';
import  { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';

import './Usuario.css';

function Usuario(props) {

  
   // return <Navigate to="/atualiza/:id"/>;


    //return  <Redirect to={"/atualiza/:id"} />
  
  return (
    <div className="Usuario">
      <ul>
        <li><strong>ID:</strong> {props.usuario.id}</li>
        <li><strong>Nome:</strong> {props.usuario.nome} {props.usuario.sobrenome}</li>
        <li><strong>Email:</strong> {props.usuario.email}</li>
        <li><Link to={`/usuario/${props.usuario.id}`}>Detalhes</Link></li>
        <li><Link to={`/atualiza/${props.usuario.id}`}>Atualizar</Link></li>
      </ul>
      <div className="icon">
         <button onClick={props.removerUsuario}><FiTrash2 /></button>
      </div>
  </div>
  )
  }

export default Usuario;