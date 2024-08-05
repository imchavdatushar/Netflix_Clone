
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Netflix from './pages/Netflix';
import Player from './pages/Player';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import MyList from './pages/MyList';

function App() {
  return (
    <Routes>
        <Route exact path='/' element={<SignUp/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/netflix' element={<Netflix/>}/>
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/tv" element={<TVShows />} />
        <Route exact path="/mylist" element={<MyList />} />
    </Routes>
  );
}

export default App;
