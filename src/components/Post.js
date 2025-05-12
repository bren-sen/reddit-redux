import { Link } from "react-router-dom";


export const Post = ({ post }) => {

    const postData = post.data;
    const postId = postData.id;
    const postType = postData.post_hint;
    const author = postData.author;
    const rSub = postData.subreddit_name_prefixed;
    const sub = postData.subreddit;

    return (
        <section className="post">
            <Link to={`/posts/${postId}`}>
                <h3>{postData.title}</h3>
            </Link>
            <p>{postType}</p>
            <p>posted by <Link to={`/users/${author}`}>{author}</Link> in <Link to={`/subreddits/${sub}`}>{rSub}</Link></p>
            <p>{postData.num_comments} comments, {postData.score} upvotes</p>
        </section>
    )
};