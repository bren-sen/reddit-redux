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

    try {
        const response = await fetch(endpoint);
        const jsonResponse = await response.json();
        return jsonResponse;
    } catch (error) {
        console.error(error);
    }
});


//get the current top subreddits (25 by default)
export const fetchTopSubreddits = createAsyncThunk('subredditspage/fetchTopSubreddits', async () => {

    const destination = 'subreddits.json';
    const endpoint = `${rootUrl}${destination}`;

    try {
        const response = await fetch(endpoint);
        const jsonResponse = await response.json();
        return jsonResponse;
    } catch (error) {
        console.error(error);
    }
});


//get hot posts from the selected sub
export const fetchSubPosts = createAsyncThunk('postspage/fetchSubPosts', async (query) => {

    const destination = `r/${query}.json`;
    const endpoint = `${rootUrl}${destination}`;

    try {
        const response = await fetch(endpoint);
        const jsonResponse = await response.json();
        return jsonResponse;
    } catch (error) {
        console.error(error);
    }
});


//get posts from user search
export const fetchSearchedPosts = createAsyncThunk('searchBar/fetchSearchedPosts', async (query) => {

    const destination = `search.json?q=`;
    const endpoint = `${rootUrl}${destination}${query}`;

    try {
        const response = await fetch(endpoint);
        const jsonResponse = await response.json();
        return jsonResponse;
    } catch (error) {
        console.error(error);
    }
});


//get post and comment from selected user
export const fetchUserData = createAsyncThunk('userpage/fetchUserData', async (query) => {

    const destination = `user/${query}.json`;
    const endpoint = `${rootUrl}${destination}`;

    try {
        const response = await fetch(endpoint);
        const jsonResponse = await response.json();
        return jsonResponse;
    } catch (error) {
        console.error(error);
    }
});

//get comments from selected post
export const fetchComments = createAsyncThunk('commentpage/fetchComments', async (query) => {

    const destination = `comments/${query}/.json`;
    const endpoint = `${rootUrl}${destination}`;

    try {
        const response = await fetch(endpoint);
        const jsonResponse = await response.json();
        return jsonResponse
    } catch (error) {
        console.error(error);
    }
});