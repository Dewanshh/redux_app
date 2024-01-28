import {createSlice} from '@reduxjs/toolkit'

const uiSlice=createSlice({
    name:"ui",
    initialState:{notifications:null},
    reducers:{
    showNotification(state,action){
        state.notifications={
            message:action.payload.message,
            type:action.payload.type,
            open:action.payload.open
        }
    }
}
});


export const uiActions=uiSlice.actions;
export default uiSlice;