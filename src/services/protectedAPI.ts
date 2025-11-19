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

protectedAPI.interceptors.response.use(
    (response) => {return response},
    async (error) => {
        const originalRequest = error.config
        
        if(error.response?.status === 401 && !originalRequest.retryRequest){
            originalRequest.retryRequest = true
            try {
                const refreshToken = localStorage.getItem("refresh")
                const response = await axios.post(BASE_URL + "/api/accounts/token/refresh/", 
                    {refresh: refreshToken})
                const newAccessToken = response.data.access
                originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`
                localStorage.setItem("access", newAccessToken)
                console.log("Access token updated!");
                
                return protectedAPI(originalRequest)
            } catch (error) {
                console.log(error);
                localStorage.clear()
            }
        }
        return Promise.reject(error)
    }
)


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

export async function editURL(id: number, url?: string, title?:string){
    try{
        const response = await protectedAPI.patch(`/api/links/${id}/`,{url, title})
        return response.data
    } catch(error){
        console.log(error);
    }
}