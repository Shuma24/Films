function Film (props) {
   const {
      Title,
      Year,
      imdbID,
      Type,
      Poster,
   } = props;

   return (
      <div id={imdbID} className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={Poster} alt={`https://via.placeholder.com/300x400`}/>
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{Title}</span>
        {Year}<p><span className="right">{Type}</span></p>
      </div>
    </div>
   )
}

export { Film }