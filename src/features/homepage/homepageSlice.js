import { createSlice } from "@reduxjs/toolkit";
import { fetchHotPosts } from "../../components/redditApi";


const initialState = {
    pageStatus: 'isIdle', // 'isLoading', 'isError', 'isSuccess'
    hotPosts: {data: {
        after: null,
        before: null,
        children: []
        }
    },
};

export const homepageSlice = createSlice({
    name: 'homepage',
    initialState: initialState,
    reducers: {},
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


//export const { reducers here } = homepageSlice.actions;
export default homepageSlice.reducer;
export const selectHotPosts = (state) => state.homepage.hotPosts;
export const selectPageStatus = (state) => state.homepage.pageStatus;