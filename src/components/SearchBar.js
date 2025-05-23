import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


export const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleInput = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    const handleSubmit = () => {
        navigate(`/search/${searchInput}`);
    };

    return (
        <div className="search-box">
            <input 
                type="text" 
                id="searchWord" 
                name="searchWord" 
                value={searchInput} 
                onChange={handleInput}
                placeholder="Find more posts"
            />
            <button onClick={handleSubmit}>Search</button>
        </div>
    )
};