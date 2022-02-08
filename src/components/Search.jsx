import { useState } from "react"

function Search (props) {
   
   const {
      searchMovies = Function.prototype,
   } = props
   
   const [search, setSearch] = useState('')
   const [type, setType] = useState('movie')   
   
   

   const pressEnter = (ev) => {
      if(ev.key === 'Enter'){
         searchMovies(search, type)
      }
   }

   const butev = () => {
      searchMovies(search, type)
   }

   const handleFilter = (ev) => {
      setType(ev.target.dataset.type)
      searchMovies(search, ev.target.dataset.type)
   }

   return(
      <div className="row">
               <div className="input-field">
               <input 
               id="email" 
               type="email" 
               className="validate"
               placeholder="Search here"
               value={search}
               onChange={(event) => setSearch(event.target.value)}
               onKeyDown={pressEnter}
               />
               <button
                  className="btn search-btn"
                  onClick={() => butev()}
               >
                  Search
               </button>
            </div>
            <label>
               <input
                   className="with-gap"
                   name="type"
                   type="radio"
                   data-type="movie"
                   onChange={handleFilter}
                   checked={type === 'movie'}
                  />
                 <span>Movies only</span>
            </label>
            <label>
               <input
                   className="with-gap"
                   name="type"
                   type="radio"
                   data-type="series"
                   onChange={handleFilter}
                   checked={type === 'series'}
                  />
                  <span>Series Only</span>
            </label>
      </div>
     
   )
}

export { Search }