import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './SearchBar.module.css';


export const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();

    const handleInput = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchInput}`);
        setSearchInput('');
    };

    return (
        <form className={styles.searchform} id="search" onSubmit={handleSubmit}>
            <input 
                type="search"
                className={styles.input}
                id="searchWord" 
                name="searchWord" 
                value={searchInput} 
                onChange={handleInput}
                placeholder="Find more posts"
                required
            />
            <input 
                type="submit" 
                value='Search'
                className={styles.button}
            />
        </form>
    )
};