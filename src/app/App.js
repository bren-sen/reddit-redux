import { Navbar } from '../components/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from '../features/homepage/Homepage';
import { Subredditspage } from '../features/Subbreditspage/Subredditspage';
import { Postspage } from '../features/Postspage/Postspage';
import { Userspage } from '../features/Users/Userspage';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='subreddits' element={<Subredditspage/>} />
        <Route path='posts' element={<Postspage/>} />
        <Route path='users' element={<Userspage/>} />
      </Routes>
    </>
  );
}

export default App;
