import React, {createContext, useReducer, useEffect} from 'react'
import Appreducer from './Appreducer'
// initial state
const initialState = {
    watchlist : localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched: localStorage.getItem("watched") ? JSON.parse(localStorage.getItem('watched')) : []
}


// create context
export const GlobalContext = createContext(initialState);

// global provider
export const GlobalProvider = props => {

    const [state, dispatch] = useReducer(Appreducer,initialState)

    // useEffect loading after that add to localstorage
    useEffect(() => {
       localStorage.setItem("watchlist", JSON.stringify(state.watchlist))
       localStorage.setItem("watched", JSON.stringify(state.watched))
    }, [state])


    // actions
    const addMovietowatchlist = (movie) => {
        dispatch ({type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie})
    }
    // remove from watchlist
    const removeFromwatchlist = (id) =>{
        dispatch({type:'REMOVE_MOVIE_FROM_WATCHLIST', payload: id})
    }
    // add from watchlist to watched
    const addFromwatchlistTowatch = (movie) =>{
        dispatch({type: 'ADD_MOVIE_FROM_WATCHLIST_TO_WATCHED', payload: movie})
    }
    // removefrom watched
    const removeFromwatched = (id) => {
        dispatch({type: 'REMOVE_FROM_WATHCED', payload: id})
    }
    // from watched to watchlist
    const fromwatchedtowatchlist = (movie) => {
        dispatch({type: 'FROM_WATCHED_TO_WATCHLIST',  payload: movie})
    }
    return ( 
        <GlobalContext.Provider 
        value={{watchlist: state.watchlist, watched: state.watched, addMovietowatchlist, removeFromwatchlist,addFromwatchlistTowatch, removeFromwatched, fromwatchedtowatchlist}}>
           {props.children}
        </GlobalContext.Provider>
    )
    

} 