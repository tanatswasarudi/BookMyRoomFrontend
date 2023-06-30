import {createSlice} from '@reduxjs/toolkit';

const initialState = {
        name :   "",
        email : "",
       
}
 export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers  : {
        loginRedux : (state,action)=>{
            console.log(action.payload.data)
            state.email= action.payload.data.email
            state.name= action.payload.data.name
        },
        logoutRedux : (state,action)=>{
            state.email= "";
            state.name= "";
           
        }
    }
})

export const {loginRedux,logoutRedux} = userSlice.actions
export default userSlice.reducer