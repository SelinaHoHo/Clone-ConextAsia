import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    loading: false,
    error:[],
    data: [],
    details:[]
    
} 

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    
  }
})


export default authSlice.reducer