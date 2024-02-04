import axios from "axios";

export const usefulLinks =  [
    { name: "Home" ,path : '/'},
    { name: "Cart" ,path : '/cart'},
    { name: "Order Tracking", path : '/orders' },
    { name: "Terms & Conditions",path : '/'  }
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

