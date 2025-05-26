import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentPost, selectCurrentPostId, selectPageStatus } from "./commentspageSlice";
import { fetchComments } from "../../components/redditApi";
import { Post } from "../../components/Post";
import { Comment } from "../../components/Comment";
import styles from './Commentspage.module.css'


//Display a single post and its comments
export const Comments = () => {

    const { postId } = useParams();
    const dispatch = useDispatch();
    const postData = useSelector(selectCurrentPost);
    const pageStatus = useSelector(selectPageStatus);
    const loadedPostId = useSelector(selectCurrentPostId);

    let singlePost;
    let comments;

    if (pageStatus === 'isSuccess') {
        singlePost = postData[0].data.children[0];
        comments = postData[1];
    };

    useEffect( () => {
        if (postId !== loadedPostId) {
            dispatch(fetchComments(postId));
        }
    }, [dispatch]);


    return (
        <>
            <section className={styles.post}>
                {(pageStatus === 'isIdle' || pageStatus === 'isLoading') && <p>Working on it...Try refreshing your browser if your post is not loading</p>}
                {pageStatus === 'isSuccess' && postId === loadedPostId && <Post post={singlePost} />}
            </section>
            <section className={styles.comments}>
                {pageStatus === 'isSuccess' && postId === loadedPostId && comments.data.children.map(comment => comment.kind === 't1' && <Comment comment={comment} source='postView' key={comment.data.id} />)}
            </section>
        </>
    )

};