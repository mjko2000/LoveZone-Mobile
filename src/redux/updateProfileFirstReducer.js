import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const updateProfileSplice = createSlice({
  name: "updateProfile",
  initialState: {
    name: "",
    birth: new Date(),
    height: 150,
    weight : 60,
    gender: "",
    workAt: "",
    phone: "",
    lookingFor: [],
    favorites: [],
    images: []
  },
  reducers: {
    setName(state, action) {
      return {...state, name: action.payload}
    },
    setHeight(state, action) {
      return {...state, height: action.payload}
    },
    setWeight(state, action) {
      return {...state, weight: action.payload}
    },
    setBirth(state, action) {
      return {...state, birth: action.payload}
    },
    setWorkPlace(state, action) {
      return {...state, workAt: action.payload}
    },
    setPhone(state, action) {
      return {...state, phone: action.payload}
    },
    setGender(state, action) {
      return {...state, gender: action.payload}
    },
    setLooking(state, action) {
      return {...state, lookingFor: action.payload}
    },
    setFavorites(state, action) {
      return {...state, favorites: action.payload}
    },
    setImages(state, action) {
      return {...state, images: action.payload}
    },
  }
})

export const { setName, setHeight, setWeight, setBirth, setWorkPlace, setPhone,
  setGender, setLooking, setFavorites, setImages } = updateProfileSplice.actions
export default updateProfileSplice.reducer