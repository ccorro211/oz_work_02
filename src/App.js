import './App.css';
import movie from './store/movielist';
import DetailMovie from './Components/DetailMovie';
import { Route, Routes } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';
function App() {
  console.log(movie)
  console.log(movie.results)
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/detail' element={<Detail/>}></Route>
        <Route path='/detail/:id' element={<DetailMovie/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
