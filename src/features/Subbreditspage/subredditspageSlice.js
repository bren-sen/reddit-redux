import { createSlice } from "@reduxjs/toolkit";
import { fetchTopSubreddits } from "../../components/redditApi";


const initialState = {
    pageStatus: 'isIdle', // 'isLoading', 'isError', 'isSuccess'
    hotSubs: []
};

export const subredditspageSlice = createSlice({
    name: 'subredditspage',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchTopSubreddits.pending, (state) => {
            state.pageStatus = 'isLoading';
        })
        .addCase(fetchTopSubreddits.rejected, (state) => {
            state.pageStatus = 'isError';
        })
        .addCase(fetchTopSubreddits.fulfilled, (state, action) => {
            state.pageStatus = 'isSuccess';
            state.hotSubs = action.payload;
        })
    }
});


// export { reducer1, reducer2, ...} = homepageSlice.actions;
export default subredditspageSlice.reducer;
export const selectHotSubs = (state) => state.subredditspage.topSubs;