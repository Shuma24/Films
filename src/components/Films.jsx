import { Film } from './Film'

function Films (props) {
   const {
      movies = []
   } = props

   return (
      <div className="films">
         {
            movies.length ? movies.map(movie => <Film key={movie.imdbID} {...movie}/>) : <h3>Not loading</h3>
         }
      </div>
   )
}

export { Films }