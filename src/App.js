import Navbar from "./components/Navbar";
import { getPopularMovies } from "./utils/getPopularMovies";

function App() {
  return (
    <div className="App">
    <Navbar />
      <button type='button' onClick={() => getPopularMovies()} >
        getPopularMovies
        
      </button>
    </div>
  );
}

export default App;
