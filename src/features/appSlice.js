import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: null,
    selectCamaraImage:null
  },
  reducers: {
   
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    selectImage:(state,action)=>{

      state.selectCamaraImage = action.payload;
    },
    resetImage:(state)=>{

      state.selectCamaraImage = null;
    },
  },
});

export const { login,logout,selectImage,resetImage } = appSlice.actions;


export const selectuser= state => state.app.user;
export const selectSelectedImage = state => state.app.selectCamaraImage;

export default appSlice.reducer;
