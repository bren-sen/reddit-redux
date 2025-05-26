import { fetchTopSubreddits } from "../../components/redditApi";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectHotSubs, selectPageStatus } from "./subredditspageSlice";
import { Sub } from '../../components/Sub';


//Display the top subbreddits of the day
export const Subredditspage = () => {

    const pageStatus = useSelector(selectPageStatus);
    const hotSubs = useSelector(selectHotSubs);
    const dispatch = useDispatch();

     useEffect( () => {
        if (hotSubs.data.children.length === 0) {
            dispatch(fetchTopSubreddits());
        };
    }, [dispatch] );
    
    let content;

    if (pageStatus === 'isLoading') {
        content = <h3>Loading top subreddits...</h3>;
    } else if (pageStatus === 'isError') {
        content = <h3>Something went wrong...</h3>
    } else if (pageStatus === 'isIdle' ) {
        content = <button onClick={() => dispatch(fetchTopSubreddits())}>Try reloading the page</button>;
    };

    return (
        <>
            <h2 className="page-title">Top subreddits Today:</h2>
            {content}
            {pageStatus === 'isSuccess' && hotSubs.data.children.map(sub => <Sub sub={sub} key={sub.data.id} />)}
        </>
    )
}
