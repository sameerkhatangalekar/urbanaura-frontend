import axios from "axios";

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


  export const baseUrl = 'https://urban-aura-backend.onrender.com/api/v1'


  export const publicRequestInstance = axios.create({
    withCredentials: true,
    baseURL: baseUrl
  });


  export const privateRequestInstance = axios.create({
    withCredentials: true,
    baseURL: baseUrl
 });

