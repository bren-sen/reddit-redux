import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSearchedPosts } from "../../components/redditApi";
import { useDispatch, useSelector } from "react-redux";
import { selectPageStatus, selectSearchTerm, selectCurrentSearch } from "./searchResultsPageSlice";
import { Post } from "../../components/Post";
import { searched } from "./searchResultsPageSlice";


export const SearchResultsPage = () => {

    const { searchInput } = useParams();
    const dispatch = useDispatch();
    const pageStatus = useSelector(selectPageStatus);
    const searchTerm = useSelector(selectSearchTerm);
    const currentSearch = useSelector(selectCurrentSearch);

    useEffect( () => {
        if (searchInput !== searchTerm) {
            dispatch(fetchSearchedPosts(searchInput));
            dispatch(searched(searchInput));
        };
    }, [dispatch, searchTerm, searchInput] );

    return (
        <>
            <h2 className="page-title">Top posts for <span>{searchInput}</span></h2>
            {pageStatus === 'isIdle' && <p>Page not loading</p>}
            {pageStatus === 'isSuccess' && searchInput === searchTerm && currentSearch.data.children.map(post => <Post post={post} key={post.data.id} />)}
        </>
    )
};
