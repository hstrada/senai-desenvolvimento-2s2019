import React, { Component } from "react";

// realizar os imports dos estilos
import "../../assets/css/flexbox.css";
import "../../assets/css/reset.css";
import "../../assets/css/style.css";

// import do ícone
import logo from "../../assets/img/icon-login.png";

// importar Rodape
import Rodape from "../../componentes/Rodape";

class Categorias extends Component {
  render() {
    return (
      <div>
        <header className="cabecalhoPrincipal">
          <div className="container">
            <img src={logo} />
          </div>
        </header>

        <main className="conteudoPrincipal">
          <section className="conteudoPrincipal-cadastro">
            <h1 className="conteudoPrincipal-cadastro-titulo">Categorias</h1>
            <div className="container" id="conteudoPrincipal-lista">
              <table id="tabela-lista">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Título</th>
                  </tr>
                </thead>

                <tbody id="tabela-lista-corpo" />
              </table>
            </div>

            <div className="container" id="conteudoPrincipal-cadastro">
              <h2 className="conteudoPrincipal-cadastro-titulo">
                Cadastrar Categoria
              </h2>
              <form>
                <div className="container">
                  <input
                    type="text"
                    className="className__categoria"
                    id="input__categoria"
                    placeholder="tipo do evento"
                  />
                  <button
                    id="btn__cadastrar"
                    className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                  >
                    Cadastrar
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>

        <Rodape />

        {/* <footer className="rodapePrincipal">
          <section className="rodapePrincipal-patrocinadores">
            <div className="container">
              <p>Escola SENAI de Informática - 2019</p>
            </div>
          </section>
        </footer> */}
      </div>
    );
  }
}

export default Categorias;