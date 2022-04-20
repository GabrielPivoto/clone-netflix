import React from 'react'
import "./login.scss"

export default function Login() {
    return (
      <div className="login">
        <div className="top">
          <div className="wrapper">
            <img
              className="logo"
              src="https://raw.githubusercontent.com/GabrielPivoto/clone-netflix/gp-branch/client/images/f3c25af9edd7c1069c967dd565f75ec6.png"
              alt=""
            />
          </div>
        </div>
        <div className="container">
          <form>
            <h1>Entrar</h1>
            <input type="email" placeholder="Email ou telefone" />
            <input type="password" placeholder="Senha" />
            <button className="loginButton">Entrar</button>
            <span>
              Novo no Pivotoflix? <b>Cadastre-se agora.</b>
            </span>
            <small>
              Esta página é protegida pelo Google reCAPTCHA para verificar se você não é um bot. <b>Saiba mais</b>.
            </small>
          </form>
        </div>
      </div>
    );
  }
