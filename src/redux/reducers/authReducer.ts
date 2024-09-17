import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthentReducer} from '../../types/authTypes';

const initialState: AuthentReducer = {
  createProfile: {
    email: '',
    mobile: '',
    token: '',
    gender: '',
  },
};

const authReducer = createSlice({
  initialState,
  name: 'authReducer',
  reducers: {
    setCreatedProfile: (
      state,
      action: PayloadAction<AuthentReducer['createProfile']>,
    ) => {
      state.createProfile = action.payload;
    },

    initcreateProfile(state) {
      state.createProfile = {
        email: '',
        mobile: '',
        token: '',
        gender: '',
      };
    },
  },
});

export const {setCreatedProfile, initcreateProfile} = authReducer.actions;

export default authReducer.reducer;
