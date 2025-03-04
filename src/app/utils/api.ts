import axios from 'axios';
const API_URL = 'http://localhost:3000/users';

export const getUsers = async () => {
    const res = await axios.get(API_URL);
    return res.data;
}
export const createUser = async ( name: string, email: string ) => {
    const res=await axios.post(API_URL,{name,email})    
}
/*export const createUser = async (name: string, email: string) => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
  });*/

