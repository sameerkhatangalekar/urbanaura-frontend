export const usefulLinks =  [
    { name: "Home" },
    { name: "Cart" },
    { name: "Man Fashion" },
    { name: "Woman Fashion" },
    { name: "Accessories" },
    { name: "My Account" },
    { name: "Order Tracking" },
    { name: "Wishlist" },
    { name: "Terms & Conditions" }
  ] as const;


  export const baseUrl = 'http://localhost:5000/api/v1'

//   import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// });

// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   headers: { Authorization :  `Bearer ${TOKEN}` },
// });