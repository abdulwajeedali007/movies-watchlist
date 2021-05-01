import React from 'react'
import {Link} from 'react-router-dom'
export default function Landing() {
    return (
        <div className="landing__container">
            <div className="img__container">
               <img src="./Images/movie1.jpg" alt="landingpage"/>
               <div className="content__box">
                   <h2>MovieApp </h2>
                   <p>One platform for all Latest MOVIE update, get the old movies updates <br/> with a total details of that movie</p>
                   <br/>
                   <div className="btns">
                     <Link to="/watchlist"><button>Watch List</button></Link>
                     <Link to="/watched"><button>Watched</button></Link>
                   </div>
               </div>
            </div>
        </div>
    )
}
