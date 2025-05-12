import { Outlet, useParams } from "react-router-dom";


// searching for a subreddit will display posts from that sub here. 
// Clicking on title will open post with comments in postpage. 
// Clicking on author will open user in userpage
export const Subredditspage = () => {
    return (
        <>
            <p>Seach for your favourite subreddits</p>
            <Outlet/>
        </>
    )
}

export const Sub = () => {
    const { sub } = useParams();
    return (
        <h2>Viewing posts from the following subreddit: {sub}</h2>
    )
};