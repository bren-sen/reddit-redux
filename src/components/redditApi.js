import { createAsyncThunk } from "@reduxjs/toolkit";


const rootUrl = 'https://www.reddit.com/';

//get the current top posts from all of reddit (25 by default)
export const fetchHotPosts = createAsyncThunk('homepage/fetchHotPosts', async (query) => {

    const destination = 'r/popular.json'
    let endpoint = `${rootUrl}${destination}`;

    //query use the before/after string to load the previous/next posts. count=555 is necessary otherwise before is always null in api response
    if (query) {
        endpoint = `${rootUrl}${destination}${query}&count=555`;
    };

    const response = await fetch(endpoint);
    const jsonResponse = await response.json();
    return jsonResponse;
});


//get the current top subreddits (25 by default)
export const fetchTopSubreddits = createAsyncThunk('subredditspage/fetchTopSubreddits', async (query) => {

    const destination = 'subreddits.json';
    const endpoint = `${rootUrl}${destination}`;

    if (query) {
        endpoint = `${rootUrl}${destination}${query}&count=555`;
    };

    try {
        const response = await fetch(endpoint);
        const jsonResponse = await response.json();
        return jsonResponse;
    } catch (error) {
        console.error(error);
    }
});