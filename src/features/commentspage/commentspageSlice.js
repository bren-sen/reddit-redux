import { createSlice } from "@reduxjs/toolkit";
import { fetchComments } from "../../components/redditApi";


const initialState = {
    pageStatus:  'isIdle',
    currentPostId: "not set yet",
    currentPost : {data: {
        after: null,
        before: null,
        children: []
        }
    }
};

export const commentspageSlice = createSlice({
    name: 'commentspage',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchComments.pending, (state) => {
            state.pageStatus = 'isLoading';
        })
        .addCase(fetchComments.rejected, (state) => {
            state.pageStatus = 'isError';
        })
        .addCase(fetchComments.fulfilled, (state, action) => {
            state.pageStatus = 'isSuccess';
            state.currentPost = action.payload;
            state.currentPostId = action.payload[0].data.children[0].data.id;
        })
    }
});


// export { reducer1, reducer2, ...} = homepageSlice.actions;
export default commentspageSlice.reducer;
export const selectPageStatus = (state) => state.commentspage.pageStatus;
export const selectCurrentPost = (state) => state.commentspage.currentPost;
export const selectCurrentPostId = (state) => state.commentspage.currentPostId;