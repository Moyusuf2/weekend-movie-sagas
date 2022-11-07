import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router> 
               {/* homepage */}
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        {/* change path of link based on movie clicked */}
        <Route path="/:mohamed" exact>
          <MovieDetails />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
