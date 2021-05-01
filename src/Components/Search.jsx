import React, { useState } from 'react'
import Item from './Item'

function Search() {
    const [value, setValue] = useState('')
    const [results, setResults] = useState([])
    const onhandleChange = (e) => {
        
        setValue(e.target.value)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=280cd56a8200e825fba021579ee1f051&language=en-US&page=1&include_adult=false&query=${e.target.value}`).then(
            res => res.json()
        ).then(
            data => {
                if(!data.errors){
                    setResults(data.results)
                }else{
                    setResults([])
                }
            }
        )
    }
   
    return (

        <div>
            <div className="search__container">
               <div className="search">
                   <input type="text" className="search" name="query" value={value} onChange={onhandleChange} placeholder="Please Movie Name..."/>
               </div>

               <Item data={results}/>
           
            </div>
            
        </div>
    )
}

export default Search
