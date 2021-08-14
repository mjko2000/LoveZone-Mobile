import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  name: "",
  birth: null,
  height: 150,
  weight : 60,
  gender: "",
  workAt: "",
  phone: "",
  lookingFor: [],
  favorites: [],
  images: [],
  location: null
}
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setProfile(state, action) {
      return {...action.payload}
    },
    resetProfile(state, action) {
      return initialState
    },
  }
})

export const { setProfile, resetProfile } = userSlice.actions
export default userSlice.reducer