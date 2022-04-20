import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import "./navbar.scss"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)


    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }

    console.log(isScrolled)
  return (
    <div className={isScrolled?"navbar scrolled":"navbar"}>
      <div className="container">
          <div className="left">
              <img src="https://raw.githubusercontent.com/GabrielPivoto/clone-netflix/master/client/images/f3c25af9edd7c1069c967dd565f75ec6.png" 
              alt="" 
              />
              <span>Página Principal</span>
              <span>Séries</span>
              <span>Filmes Da Hora</span>
              <span>Em Alta</span>
              <span>Minha Lista Top</span>
          </div>
          <div className="right">
                <Search className='icon'/>
                <span>Infantil</span>
                <Notifications className='icon'/>
                <img src="https://avatars.githubusercontent.com/u/65688445?v=4" alt="" />
                <div className="profile">
                    <ArrowDropDown className='icon'/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
                
          </div>
      </div>
    </div>
  )
}

export default Navbar
