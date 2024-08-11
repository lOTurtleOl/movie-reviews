import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <div className="container-fluid">
        <h1 className="text-center mt-5 mb-5 fw-bold">Movie Reviews</h1>
      </div>
      <MovieList />
    </div>
  );
}

export default App;
