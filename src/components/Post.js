import { Link } from "react-router-dom";
import styles from './Post.module.css';


export const Post = ({ post }) => {

    const postData = post.data;
    const postId = postData.id;
    const postType = postData.post_hint;
    const author = postData.author;
    const rSub = postData.subreddit_name_prefixed;
    const sub = postData.subreddit;

    let body;

    //Add logic for galery posts and self posts
    if (postType === 'link') {
        body = (
            <div className={styles.postBody}>
                <img 
                    src={postData.thumbnail} 
                    alt="thumbnail" 
                    width={postData.thumbnail_width} 
                    height={postData.thumbnail_height}
                />
                <p>Read more at <a href={postData.url}>{postData.domain}</a></p>
            </div>
        )
    } else if (postType === 'image') {
        body = (
            <div className={styles.postBody}>
                <img 
                    className={styles.postImg} 
                    src={postData.url_overridden_by_dest} 
                    alt={postData.title} 
                    width={postData.preview.images[0].source.width} 
                    height={postData.preview.images[0].source.height}
                />
                <p>{postData.selftext}</p>
            </div>
        )
    } else if (!postType) {
        body = (
            <div className={styles.postBody}>
                <p>{postData.selftext}</p>
            </div>
        )
    } else if (postType === 'hosted:video') {
        body = (
            <div className={styles.postBody}>
                <video controls className={styles.postVideo} width={postData.secure_media.reddit_video.width}>
                    <source 
                        src={postData.secure_media.reddit_video.fallback_url}
                    />
                </video>
                <p>{postData.selftext}</p>
            </div>
        )
    } else {
        body = (
            <div className={styles.postBody}>
                <p>{postType} not shown</p>
            </div>
        )
    }

    return (
        <section className={styles.post}>
            <Link to={`/post/${postId}`}>
                <h3 className={styles.postHeader}>{postData.title}</h3>
            </Link>
            {body}
            <div className={styles.postFooter}>
                <p>posted by <Link to={`/users/${author}`}>{author}</Link> in <Link to={`/subreddits/${sub}`}>{rSub}</Link></p>
                <p>{postData.num_comments} comments, {postData.score} upvotes</p>
            </div>
        </section>
    )
};
