import { Link } from "react-router-dom";
import styles from './Comments.module.css';


export const Comment = ({ comment, source }) => {

    const text = comment.data.body;
    const sub = comment.data.subreddit;
    const author = comment.data.author;
    const parentId = comment.data.link_id;
    let postTitle = comment.data.link_title;
    let postId;

    //Was to get the right ID regardless of source for api call when clicking on subreddit link but can be changed to one value now
    if (parentId) {
        postId = parentId.replace('t3_', '');
    };

    //Handle nested comments with recursion
    let nestedComment;

    if (comment.data.replies && comment.data.replies.data.children.length > 0) {
        nestedComment = comment.data.replies.data.children.map(comment => comment.kind === 't1' && <Comment comment={comment} source='postView' key={comment.data.id} />)
    }

    //Add link to sub and post on userpage comments
    if (source === 'userView') {
        return (
        <section className={styles.comment}>
            <h4 className={styles.commentTitle}><Link to={`/users/${author}`}>{author}</Link> commented on the post <Link to={`/post/${postId}`}>{postTitle}</Link> in <Link to={`/subreddits/${sub}`}>r/{sub}</Link></h4>
            <p className={styles.commentBody}>{text}</p>
        </section>
        )
    };

    return (
        <section className={styles.comment}>
            <h4 className={styles.commentTitle}><Link to={`/users/${author}`}>{author}</Link> commented:</h4>
            <div className={styles.commentBody}>
                <p>{text}</p>
                {nestedComment}
            </div>
        </section> 
    )
};


