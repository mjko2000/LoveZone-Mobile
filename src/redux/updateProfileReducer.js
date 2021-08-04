import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const updateProfileSplice = createSlice({
  name: "updateProfile",
  initialState: {
    name: "Duc Anh",
    birth: 123123123,
    height: null,
    weight : null,
    gender: "",
    workAt: "",
    phone: "",
    lookingFor: null,
    favorites: null,
    images: null
  },
  reducers: {
    setUser(state, action) {
      return action.payload
    }
  }
})

export const { setUser } = updateProfileSplice.actions
export default updateProfileSplice.reducer