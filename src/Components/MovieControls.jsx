import React, { useContext } from 'react'
import {FiEye} from 'react-icons/fi'
import {AiOutlineEyeInvisible} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'

import '../Style/Watchlist.scss'

import {GlobalContext} from '../Context/GlobalContext'

function MovieControls({movie, type}) {
    const {removeFromwatchlist, addFromwatchlistTowatch, removeFromwatched, fromwatchedtowatchlist} = useContext(GlobalContext)
    return (
        <div>
            <div className="moviecontrol__container">
                {type === "watchlist" && (
                    <div className="controls">
                        <div className="control__left">
                            <FiEye onClick={() => addFromwatchlistTowatch(movie)} />
                        </div>
                        <div className="control__right">
                            <IoMdClose onClick={() => removeFromwatchlist(movie.id)}/>
                        </div>
                    </div>
                 ) }
                 {type === "watched" && (
                    <div className="controls">
                        <div className="control__left">
                            <AiOutlineEyeInvisible onClick={() => fromwatchedtowatchlist(movie)} />
                        </div>
                        <div className="control__right">
                            <IoMdClose onClick={() => removeFromwatched(movie.id)}/>
                        </div>
                    </div>
                 ) }
            </div>
        </div>
    )
}

export default MovieControls
