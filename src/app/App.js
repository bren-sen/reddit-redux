import './App.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path='/' element={Homepage} />
      <Route path='subreddits' element={Subpage} />
      <Route path='posts' element={Postspage} />
      <Route path='users' element={Userspage} />
    </Routes>
  );
}

export default App;
