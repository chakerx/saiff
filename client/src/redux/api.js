import axios from "axios"

const API= axios.create({baseURL:"http://localhost:5000"})

export const signIn=(formdata)=> API.post("/users/signin",formdata)
export const signUp = (formData) => API.post("/users/signup", formData);
