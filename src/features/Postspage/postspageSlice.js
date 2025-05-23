import { createSlice } from "@reduxjs/toolkit";
import { fetchSubPosts } from "../../components/redditApi";


const initialState = {
    currentSubStatus:  'isIdle',
    currentSubName: "not set yet",
    currentSub : {data: {
        after: null,
        before: null,
        children: []
        }
    }
};

export const postspageSlice = createSlice({
    name: 'postspage',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchSubPosts.pending, (state) => {
            state.currentSubStatus = 'isLoading';
        })
        .addCase(fetchSubPosts.rejected, (state) => {
            state.currentSubStatus = 'isError';
        })
        .addCase(fetchSubPosts.fulfilled, (state, action) => {
            state.currentSubStatus = 'isSuccess';
            state.currentSub = action.payload;
            state.currentSubName = action.payload.data.children[0].data.subreddit;
        })
    }
});


// export { reducer1, reducer2, ...} = homepageSlice.actions;
export default postspageSlice.reducer;
export const selectCurrentSubStatus = (state) => state.postspage.currentSubStatus;
export const selectCurrentSub = (state) => state.postspage.currentSub;
export const selectCurrentSubName = (state) => state.postspage.currentSubName;