import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {CgMenuGridO} from 'react-icons/cg'
import {TiTimes} from 'react-icons/ti'


function Navbar() {
   const [active, setActive] = useState('')
   const NavOpen = () => {
     if(active === ''){
      setActive('active')
     }
     else{
      setActive('')
     }
   }
    return (
        <div className="navbar__container">
            <div className="navbar">
               <div className="left__side">
                   <h1>MovieApp</h1>
               </div>
               <div className="right__side">
                  <ul className={`nav__list ${active}`}>
                     <li>
                        <Link to="/" className="link">Home</Link>
                     </li>
                     <li>
                        <Link to="/Watchlist" className="link">WatchList</Link>
                     </li>
                     <li>
                        <Link to="/Watched" className="link">Watched</Link>
                     </li>
                     <li>
                        <Link to="/" className="link add">Add +</Link>
                     </li>
                  </ul>
                  <div className="hamburger__icon">
                     {active==='active' 
                      ?(<TiTimes onClick={()=>  NavOpen()}/>) 
                      : (<CgMenuGridO onClick={()=>  NavOpen()}/>)}
                  </div>

                    
               </div>
            </div>
        </div>
    )
}

export default Navbar
