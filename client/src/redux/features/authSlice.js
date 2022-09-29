import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import * as api from "../api.js"


 export const login=createAsyncThunk("auth/login", async({formValue,navigate,toast},{rejectWithValue})=>{

    try {
        const response= await api.signIn(formValue)
        navigate("/")
        toast.success("Login Successfully")
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});

export const register = createAsyncThunk("auth/register", async ({formValue,navigate,toast},{rejectWithValue})=>{

    try {
        const response = await api.signUp(formValue)
        navigate("/login")
        toast.success("Registered Successfully")
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }   
})



 const authSlice= createSlice({
    name:"auth",
    initialState:{
        user:null,
        loading:false,
        error:""
    },
    extraReducers:{
        [login.pending]:(state,action)=>{
            state.loading=true;
        },
        [login.fulfilled]:(state,action)=>{
            state.loading=false;
            localStorage.setItem("profile",JSON.stringify({...action.payload}))
        },
        [login.rejected]:(state,action)=>{
            state.loading=false;
            state.error= action.payload.message
        },
        [register.pending]:(state,action)=>{
            state.loading=true;
        },
        [register.fulfilled]:(state,action)=>{
            state.loading=false;
            localStorage.setItem("profile",JSON.stringify({...action.payload}))
        },
        [register.rejected]:(state,action)=>{
            state.loading=false;
            state.error= action.payload.message
        },



    }
})


export default authSlice.reducer