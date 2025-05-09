import { createSlice } from "@reduxjs/toolkit";


const initialState = {};

export const homepageSlice = createSlice({
    name: 'homepage',
    initialState: initialState,
    reducers: {}
});


// export { reducer1, reducer2, ...} = homepageSlice.actions;
export default homepageSlice.reducer;