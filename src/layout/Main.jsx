import {useState, useEffect} from 'react'
import { Preloader } from '../components/Preloader';
import { API_KEY } from '../config'
import { Films } from '../components/Films'
import { Search } from '../components/Search';

function Main () {
   const [movies, setMovies] = useState([]);
   const [loading, setLoading] = useState(true)
   
   
   useEffect(() => {
      fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=Terminator`)
      .then(response => response.json())
      .then(data => {
         if (data.Search){
            setMovies(data.Search)
            setLoading(false)
         }
      })
   }, [])

   const searchMovies = (str, type = 'episode') => {
      setLoading(true)
      fetch(
         `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'movie' ? `&type=${type}` : ''}`)
      .then(response => response.json())
      .then(data => {
         setMovies(data.Search)
         setLoading(false)
      })

   } 
   
   
   
   
   return (
      <main className="main">
         <Search searchMovies={searchMovies}/>
         {
            loading ? <Preloader /> : <Films movies={movies}/>
         }
      </main>
   )
}

export { Main }