import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from '../features/homepage/homepageSlice';
import postspageReducer from '../features/Postspage/postspageSlice';
import subredditspageReducer from '../features/Subbreditspage/subredditspageSlice';
import userspageReducer from '../features/Users/userspageSlice';


export const store = configureStore({
    reducer: {
        homepage: homepageReducer,
        postspage: postspageReducer,
        subredditspage: subredditspageReducer,
        userspage: userspageReducer
    }
});