import { createSlice } from '@reduxjs/toolkit';

export const camaraSlice = createSlice({
  name: 'camara',
  initialState: {
    camaraImage: null,
  },
  reducers: {
   
    setCamaraImage: (state, action) => {
      state.camaraImage = action.payload;
    },
    resetCamaraImage: (state) => {
        state.camaraImage = null;
      },
  },
});

export const { setCamaraImage,resetCamaraImage } = camaraSlice.actions;


export const selectCamaraImage = state => state.camara.camaraImage;

export default camaraSlice.reducer;
