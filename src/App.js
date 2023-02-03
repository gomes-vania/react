import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario.js';
import Usuarios from './components/Usuarios/Usuarios.js';
import DetalhesUsuario from './components/DetalheUsuario/DetalhesUsuario.js';
import AtualizaUsuarios from './components/AtualizaUsuarios/AtualizaUsuarios';

function App() {
  return (
    <Router>
       <div className="App">
      <header>
        <nav>
          <ul>
          <li><NavLink to="/" exact>Início</NavLink></li>
          <li><NavLink to="/adicionar">Adicionar Usuários</NavLink></li>
          <li><NavLink to="/usuarios">Usuários Cadastrados</NavLink></li>
          <li><NavLink to="/atualiza">Atualiza Usuários</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>

      <Switch>
          <Route path="/" exact>
            <h1>Seja bem-vindo ao Sistema de Cadastro de Usuários</h1>
          </Route>

          <Route path="/adicionar">
            <AdicionarUsuario />
          </Route>

          <Route path="/usuarios">
            <Usuarios />
          </Route>

          <Route path="/usuario/:id">
            <DetalhesUsuario />
          </Route>

          <Route path="/atualiza/:id">
            <AtualizaUsuarios />
          </Route>

          <Route path="*">
            <h1>Página não encontrada</h1>
          </Route>
        </Switch>
      </main>
    </div>
    </Router>
  );
}

export default App;
