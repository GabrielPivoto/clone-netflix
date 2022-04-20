import React, { useRef, useState } from 'react'
import "./register.scss"

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }

  return (
    <div className='register'>
      <div className="top">
        <div className="wrapper">
            <img className='logo' src="https://raw.githubusercontent.com/GabrielPivoto/clone-netflix/master/client/images/f3c25af9edd7c1069c967dd565f75ec6.png" alt="" />
            <button className="loginButton">Entrar</button>
        </div>
      </div>
      <div className="container">
        <h1>Um monte de filme bem da hora.</h1>
        <h2>Assista onde quiser. Cancele a qualquer momento</h2>
        <p>
          Pronto para começar? Digite seu email
        </p>{
            !email ? (
                <div className="input">
                <input type="email" placeholder='email' ref={emailRef}/>
                <button className="registerButton" onClick={handleStart}>Comece Agora</button>
                </div>
            ):(
                <form className="input">
                <input type="password" placeholder='senha' ref={passwordRef}/>
                <button className="registerButton" onClick={handleFinish}>Assinar</button>
                </form>
            )
        }
      </div>
    </div>
  )
}
