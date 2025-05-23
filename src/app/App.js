import { Navbar } from '../components/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from '../features/homepage/Homepage';
import { Subredditspage } from '../features/Subbreditspage/Subredditspage';
import { Postspage } from '../features/Postspage/Postspage';
import { Userspage } from '../features/Users/Userspage';
import { Comments } from '../features/commentspage/Commentspage';
import { NotFound } from '../components/NotFound';
import { SearchBar } from '../components/SearchBar';
import { SearchResultsPage } from '../features/searchResultsPage/SearchResultsPage';


function App() {
  return (
    <>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='subreddits' element={<Subredditspage/>} />
        <Route path='subreddits/:subName' element={<Postspage/>} />
        <Route path='post/:postId' element={<Comments/>} />
        <Route path='search/:searchInput' element={<SearchResultsPage/>} />
        <Route path='users/:userName' element={<Userspage/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
