import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appSlice';
import camaraReducer from '../features/camaraSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    camara:camaraReducer
  },
});
