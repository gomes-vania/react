import React, { useState, useEffect } from 'react'

import Usuario from '../Usuario/Usuario.js'

function Usuarios() {

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/pessoas')
    .then(resposta => resposta.json())
    .then(dados => {
      const usuarios = dados.map(usuario => ({
        id: usuario.id,
        nome: usuario.nome,
        sobrenome: usuario.sobrenome,
        email: usuario.email
      }))

      setUsuarios(usuarios)
    })
  }, [])

  const removerUsuario = usuario => {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {
      fetch(`http://localhost:3000/pessoas/${usuario.id}`, {
        method: 'DELETE'
      })
        .then(resposta => {
          if (resposta.ok) {
            setUsuarios(usuarios.filter(x => x.id !== usuario.id))
          }
        })
    }
  }
  
  return (
    <>
      {usuarios.map(usuario => (
        <Usuario key={usuario.id}
          usuario={usuario}
          removerUsuario={() => removerUsuario(usuario)}
        />
      ))}
    </>
  )
}

export default Usuarios;