 const Appreducer = (state, action) => {
    console.log(state);
    switch(action.type){
        
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state, 
                watchlist: [...state.watchlist, action.payload]
            };
        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return {
                ...state, 
                watchlist: state.watchlist.filter(movie => movie.id !== action.payload)
            }
            case "ADD_MOVIE_FROM_WATCHLIST_TO_WATCHED":
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => movie.id !== action.payload.id),
                watched: [...state.watched, action.payload]
            }
            case 'REMOVE_FROM_WATHCED':
                return{
                    ...state,
                    watched: state.watchlist.filter(movie => movie.id !== action.payload)
                }
            case 'FROM_WATCHED_TO_WATCHLIST': 
               return{
                   ...state, 
                   watched: state.watched.filter(movie => movie.id !== action.payload.id),
                   watchlist: [...state.watchlist, action.payload]

               }
        default:
            return state;
    }
}

export default Appreducer;