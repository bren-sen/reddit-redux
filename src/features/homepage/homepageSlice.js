import { createSlice } from "@reduxjs/toolkit";
import { fetchHotPosts } from "../../components/redditApi";


const initialState = {
    pageStatus: 'isIdle', // 'isLoading', 'isError', 'isSuccess'
    hotPosts: []
};

export const homepageSlice = createSlice({
    name: 'homepage',
    initialState: initialState,
    reducers: {
        addPosts(state, action) {
            state.hotPosts = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchHotPosts.pending, (state) => {
            state.pageStatus = 'isLoading';

        })
        .addCase(fetchHotPosts.rejected, (state) => {
            state.pageStatus = 'isError';
        })
        .addCase(fetchHotPosts.fulfilled, (state, action) => {
            state.pageStatus = 'isSuccess';
            state.hotPosts = action.payload;
        })
    }
});


export const { addPosts } = homepageSlice.actions;
export default homepageSlice.reducer;
export const selectHotPosts = (state) => state.homepage.hotPosts;
export const selectPageStatus = (state) => state.homepage.pageStatus;