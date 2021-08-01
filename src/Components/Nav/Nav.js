import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {

    const [show,handleShow]=useState(false)

    function transitionNavbar(){
        if(window.scrollY>100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavbar);

        return ()=>{
            window.removeEventListener("scroll",transitionNavbar)
        }

    },[show])

    return (
        <div className={`navbar ${show && "nav__black"}`}>
             <h1>AmanFlix</h1>

            <img
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix avatar"  />
        </div>
    )
}

export default Nav
