import { Link } from "react-router-dom";


export const Comment = ({ comment, source }) => {

    const text = comment.data.body;
    const sub = comment.data.subreddit;
    const author = comment.data.author;
    const parentId = comment.data.link_id;
    let postTitle = comment.data.link_title;
    let postId;

    if (parentId) {
        postId = parentId.replace('t3_', '');
    };


    if (source === 'userView') {
        return (
        <section className="comment">
            <h4><Link to={`/users/${author}`}>{author}</Link> commented on the post <Link to={`/post/${postId}`}>{postTitle}</Link> in <Link to={`/subreddits/${sub}`}>r/{sub}</Link></h4>
            <p>{text}</p>
        </section>
        )
    };

    return (
        <section className="comment">
            <h4><Link to={`/users/${author}`}>{author}</Link> commented:</h4>
            <p>{text}</p>
        </section>
    )
};


