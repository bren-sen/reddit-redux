import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "../../components/redditApi";


const initialState = {
    pageStatus: 'isIdle', // 'isLoading', 'isError', 'isSuccess'
    userName: 'not set yet',
    userData: {data: {
        after: null,
        before: null,
        children: []
        }
    },
};

export const userspageSlice = createSlice({
    name: 'userspage',
    initialState: initialState,
    reducers: {
        currentUser: (state, action) => {
            state.userName = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchUserData.pending, (state) => {
            state.pageStatus = 'isLoading';
        })
        .addCase(fetchUserData.rejected, (state) => {
            state.pageStatus = 'isError';
        })
        .addCase(fetchUserData.fulfilled, (state, action) => {
            state.pageStatus = 'isSuccess';
            state.userData = action.payload;
        })
    }
});


export const { currentUser } = userspageSlice.actions;
export default userspageSlice.reducer;
export const selectCurrentUser = state => state.userspage.userName;
export const selectUserData = state => state.userspage.userData;
export const selectPageStatus = state => state.userspage.pageStatus;
