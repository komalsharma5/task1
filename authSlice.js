import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  user: null,
};

export const signupUser = createAsyncThunk("/api/signup", async(formData) => {
  const response = await axios.post(
    "http://localhost:5000/api/signup",
    formData
  );
  
  return response.data;
 
});

export const loginUser = createAsyncThunk("/api/login", async(formData) => {
 
  const response = await axios.post(
    "http://localhost:5000/api/login",
    formData 
  )
 
  return response.data;
});

export const logoutUser = createAsyncThunk("/api/logout", async(formData) => {
  const response = await axios.post(
    "http://localhost:5000/api/logout",
    formData
  );
  localStorage.removeItem("token")
  return response.data;
});

// export const dashbord = createAsyncThunk("/api/profile", async(formData) => {
//   const response = await axios.get(
//     "http://localhost:5000/api/profile",
//     formData
//   )
//   return response.data;
// });





const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    signupUser(state,action){
      state.isAuthenticated = true;
      state.user = action.payload
    },
    loginUser(state, action){
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    profile(state,action){
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logoutUser(state){
      state.isAuthenticated = false;
      state.user = null;
    },
    
  },
});



// const userSlice = createSlice({
//   name: "User",
//     initialState :{
//       loading: false,
//       user:null,
//       error: null
//     },
//     extraReducers:(bulider)=>{
//     bulider
//     //signup user
//     .addCase(signupUser.pending, (state)=>{
//       state.loading = true
//       state.user = null
//       state.error = null
//     })
//     .addCase(signupUser.fulfilled, (state, action)=>{
//       state.loading = false
//       state.user = action.payload
//       state.error = null
//     })
//     .addCase(signupUser.rejected, (state, action)=>{
//       state.loading = true
//       state.user = null
//       console.log(action.error.message)
//     })

//     //login user
//     .addCase(loginUser.pending, (state)=>{
//       state.loading = true
//       state.user = null
//       state.error = null
//     })
//     .addCase(loginUser.fulfilled, (state, action)=>{
//       state.loading = false
//       state.user = action.payload
//       state.error = null
//     })
//     .addCase(loginUser.rejected, (state, action)=>{
//       state.loading = true
//       state.user = null
//       console.log(action.error.message);
//       if(action.error.message === 'Request failed with status code 401'){
//           state.error = "Acceses denided!!"
//       }else{
//         state.error = action.error.message
//       }
//       state.error = null
//     })
//     // logout user
//     .addCase(logoutUser.pending, (state)=>{
//       state.loading = true
//       state.user = null
//       state.error = null
//     })
//     .addCase(logoutUser.fulfilled, (state, action)=>{
//       state.loading = false
//       state.user = action.payload
//       state.error = null
//     })
//     .addCase(logoutUser.rejected, (state, action)=>{
//       state.loading = true
//       state.user = null
//       console.log(action.error.message);
//       if(action.error.message === 'Request failed with status code 401'){
//           state.error = "Acceses denided!!"
//       }else{
//         state.error = action.error.message
//       }
//       state.error = null
//     })
//     }
// })



export default userSlice.reducer;




