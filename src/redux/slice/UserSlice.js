import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'User',
    initialState:[],
    reducers:{
        addUser: (state, action)=>{
            state.push(action.payload);           
        },
        delUser: (state, action)=>{            
            state.splice(action.payload, 1);
        }
    }
})

export const {addUser, delUser} = userSlice.actions;

export default userSlice.reducer;
