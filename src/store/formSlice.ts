import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FormState {
  fullName: string;
  email: string;
}

const initialState: FormState = {
  fullName: '',
  email: '',
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addUser: (state: FormState, action: {payload: {fullName: string, email: string}}) => {
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
    }
  }
})

export const formValues = (state: {
  form: { fullName: string, email: string,}
}) => state.form

export const { addUser } = formSlice.actions

export default formSlice.reducer