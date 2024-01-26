import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: {},
  isLogedin: false,
  message: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //sign up user
    userSignUp(state, action) {
      const newUser = action.payload;
      const existingUSer = state.users.find(
        (user) => user.email === newUser.email
      );
      if (!existingUSer) {
        if (newUser.password === newUser.confPassowrd) {
          state.users.push({
            id:nanoid(),
            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
            confPassowrd: newUser.confPassowrd,
          });
          state.message = "account created";
        } else {
          state.message = "check your confirm passowrd";
        }
      } else {
        state.message = "you all ready have an account";
      }
    },
    //login user
    userLogin(state, action) {
      const oldUser = action.payload;
      const existingUSer = state.users.find(
        (user) => user.email === oldUser.email
      );
      if (existingUSer) {
        if (existingUSer.password === oldUser.password) {
          state.currentUser["email"] = oldUser.email;
          state.currentUser["password"] = oldUser.password;

          state.isLogedin = true;
          state.message = "Loged In";
        } else {
          state.isLogedin = false;
          state.message = "check your password";
        }
      } else {
        state.isLogedin = false;
        state.message = "check your email";
      }
    },
    //logout user
    userLogout(state) {
      const existingUSer = state.currentUser;
      if (Boolean(existingUSer) && state.isLogedin) {
        state.currentUser = {};
        state.isLogedin = false;
        state.message = "Log out";
      }
    },
  },
});


export const selectedAllUsers = (state) => state.auth;
export const { userSignUp, userLogin, userLogout } = authSlice.actions;
export default authSlice.reducer;
