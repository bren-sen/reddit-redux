import { Navbar } from '../components/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from '../features/homepage/Homepage';
import { Subredditspage, Sub } from '../features/Subbreditspage/Subredditspage';
import { Postspage } from '../features/Postspage/Postspage';
import { Userspage, User } from '../features/Users/Userspage';
import { Comments } from '../features/commentsPage/Comments';
import { NotFound } from '../components/NotFound';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='subreddits' element={<Subredditspage/>}>
          <Route path=':sub' element={<Sub/>} />
        </Route>
        <Route path='posts' element={<Postspage/>}>
          <Route path=':id' element={<Comments/>} />
        </Route>
        <Route path='users' element={<Userspage/>}>
          <Route path=':userName' element={<User/>}/>
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
