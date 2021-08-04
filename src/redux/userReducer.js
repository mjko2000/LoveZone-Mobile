import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "Ndeva"
  },
  reducers: {
    setUser(state, action) {
      return action.payload
    }
  }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer