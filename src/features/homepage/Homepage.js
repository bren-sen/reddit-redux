import { useSelector, useDispatch } from "react-redux";
import { selectHotPosts, selectPageStatus } from "./homepageSlice";
import { useEffect } from "react";
import { Post } from '../../components/Post';
import { fetchHotPosts } from "../../components/redditApi";


//Display the top posts of the day
export const Homepage = () => {

    const pageStatus = useSelector(selectPageStatus);
    const hotPosts = useSelector(selectHotPosts);
    const dispatch = useDispatch();

    useEffect( () => {
        if (hotPosts.data.children.length === 0) {
            dispatch(fetchHotPosts());
        };
    }, [dispatch, hotPosts.data.children.length] );


    let content;

    if (pageStatus === 'isLoading') {
        content = <h3>Loading posts...</h3>;
    } else if (pageStatus === 'isError') {
        content = <h3>Oops, something went wrong!</h3>;
    } else if (pageStatus === 'isIdle' ) {
        content = <button onClick={() => dispatch(fetchHotPosts())}>Try reloading the page</button>;
        };
     
    const handleMoreClick = () => {
        const after = hotPosts.data.after;
        const query = `?after=${after}`
        dispatch(fetchHotPosts(query));
    };

    const handleLessClick = () => {
        const before = hotPosts.data.before;
        const query = `?before=${before}`
        dispatch(fetchHotPosts(query));
    };

    return (
        <>
            
            <h2>Popular on reddit today</h2>
            {content}
            {pageStatus === 'isSuccess' && hotPosts.data.children.map(post => <Post post={post} key={post.data.id}/>)}
            {hotPosts.data.before !== null && <button onClick={handleLessClick} >Previous posts</button>}
            <button onClick={handleMoreClick} >See more posts</button>
        </>
    )
};