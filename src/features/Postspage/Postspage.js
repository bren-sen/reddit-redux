import { useParams } from "react-router-dom";
import { fetchSubPosts } from "../../components/redditApi";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectCurrentSubStatus, selectCurrentSub, selectCurrentSubName } from "./postspageSlice";
import { Post } from "../../components/Post";


//Display the Posts from the selected subreddit
export const Postspage = () => {

    const { subName } = useParams();
    const dispatch = useDispatch();
    const currentSubStatus = useSelector(selectCurrentSubStatus);
    const currentSub = useSelector(selectCurrentSub);
    const currentSubName = useSelector(selectCurrentSubName);

     useEffect( () => {
        if (currentSubName !== subName) {
            dispatch(fetchSubPosts(subName));
        }
    }, [dispatch] );
 

    return (
        <>
            <h2 className="page-title">{subName}</h2>
            {currentSubStatus === 'isSuccess' && currentSubName === subName && currentSub.data.children.map(post => <Post post={post} key={post.data.id} />)}
        </>
    )
};

