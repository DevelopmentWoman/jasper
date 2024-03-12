import { useState } from "react"
import { Link, NavLink } from "react-router-dom"


export const Navbar = ({rMenu, setRMenu}) => {



    const onClickMenu = ()=>{
        setRMenu(!rMenu);
    } 



  return (

    <header className="cont-main-nav" >

        
        <div className="wrapp-nav">
            <div className="logo">
                <Link to="/" className="m-l-logo">
                    <img src="../src/assets/logo.webp" alt="Logo"/>
                </Link>
            </div>

            <nav className= {rMenu ? "navbar head-togg" : "navbar"}>
                    <div className="r-menu"  onClick={onClickMenu}>
                            <span className={rMenu ? "img-m url-togg" : "img-m"}></span>
                    </div>

                    <div className="container-nav-l">
                        

                        <NavLink
                            className={ rMenu ? ({isActive})=> `navbar-opc  ${isActive ? 'active a-visible' : 'a-visible'}` : ({isActive})=> `navbar-opc  ${isActive ? 'active' : ''} `}
                            onClick={onClickMenu}
                            to="/home"
                        >
                            HOME
                        </NavLink>
                        

                        <NavLink
                            className={ rMenu ? ({isActive})=> `navbar-opc  ${isActive ? 'active a-visible' : 'a-visible'}` : ({isActive})=> `navbar-opc  ${isActive ? 'active' : ''} `}
                            onClick={onClickMenu}
                            to="/about"
                        >
                            ABOUT   
                        </NavLink>
                        <NavLink
                            className={ rMenu ? ({isActive})=> `navbar-opc  ${isActive ? 'active a-visible' : 'a-visible'}` : ({isActive})=> `navbar-opc  ${isActive ? 'active' : ''} `}
                            onClick={onClickMenu}
                            to="/services"
                        >
                            SERVICES   
                        </NavLink>
                        <NavLink
                            className={ rMenu ? ({isActive})=> `navbar-opc  ${isActive ? 'active a-visible' : 'a-visible'}` : ({isActive})=> `navbar-opc  ${isActive ? 'active' : ''} `}
                            onClick={onClickMenu}
                            to="/employment"
                        >
                            EMPLOYMENT   
                        </NavLink>
                        <NavLink
                            className={ rMenu ? ({isActive})=> `navbar-opc  ${isActive ? 'active a-visible' : 'a-visible'}` : ({isActive})=> `navbar-opc  ${isActive ? 'active' : ''} `}
                            onClick={onClickMenu}
                            to="/contact"
                        >
                            CONTACT   
                        </NavLink>
                        
                        
                    </div>

                
            </nav>
        </div>
    </header>
  )
}


