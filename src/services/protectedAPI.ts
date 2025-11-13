import axios from "axios";
import { BASE_URL } from "./publicAPI";

const protectedAPI = axios.create({baseURL: BASE_URL})

protectedAPI.interceptors.request.use(config =>{
    const token = localStorage.getItem("access")
    if(token){
        config.headers["Authorization"] = `Bearer ${token}`
    }
    return config;
})

export async function getUserData(){   
    try {
        const response = await protectedAPI.get("/api/accounts/me/")
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export async function createNewURL(url: string, title: string){
    try {
        const response = await protectedAPI.post("/api/links/",{url, title})
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export async function deleteURL(id: number){
    try {
        const response = await protectedAPI.delete(`/api/links/${id}/`)
        return response.status === 204
    } catch (error) {
        console.log(error);
    }
}