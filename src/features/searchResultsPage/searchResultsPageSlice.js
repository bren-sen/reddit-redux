import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchedPosts } from "../../components/redditApi";


const initialState = {
    searchTerm: 'no search yet',
    pageStatus: 'isIdle',
    currentSearch : {data: {
        after: null,
        before: null,
        children: []
        }
    }
};

export const searchResultsPageSlice = createSlice({
    name: 'searchResultsPage',
    initialState: initialState,
    reducers: {
        searched: (state, action) => {
            state.searchTerm = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchSearchedPosts.pending, (state) => {
            state.pageStatus = 'isLoading';
        })
        .addCase(fetchSearchedPosts.rejected, (state) => {
            state.pageStatus = 'isError';
        })
        .addCase(fetchSearchedPosts.fulfilled, (state, action) => {
            state.pageStatus = 'isSuccess';
            state.currentSearch = action.payload;
        })
    }
});


export const { searched } = searchResultsPageSlice.actions;
export default searchResultsPageSlice.reducer;
export const selectPageStatus = (state) => state.searchResultspage.pageStatus;
export const selectSearchTerm = (state) => state.searchResultspage.searchTerm;
export const selectCurrentSearch = (state) => state.searchResultspage.currentSearch;