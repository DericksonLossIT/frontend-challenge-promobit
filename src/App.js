import { getPopularMovies } from "./utils/getPopularMovies";

function App() {
  return (
    <div className="App">
      <button type='button' onClick={() => getPopularMovies()} >
        getPopularMovies
        
      </button>
    </div>
  );
}

export default App;
