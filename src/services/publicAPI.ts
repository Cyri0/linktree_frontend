import axios from "axios"

export const BASE_URL = "https://thjj2rgx-8000.euw.devtunnels.ms"

type UserLink = {
    id: number,
    title: string,
    url: string,
}

export type UserLinkResponse = {
    id: number,
    username: string,
    display_name: string,
    bio: string,
    links: UserLink[]
}

export async function getUserLinks(username: string) {
    try {
        const response = await axios.get(BASE_URL + `/api/links/public/${username}/`)
       
        return response.data
    } catch (error) {
        // TODO
    }
}

type TokenResponse = {
    access: string,
    refresh: string
}

export async function loginUser(username: string, password: string){
    const response = await fetch(
        BASE_URL + "/api/accounts/token/",
        {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({username, password})
        }
    )

    if(!response.ok){
        console.error("Hibás felhasználónév vagy jelszó!");
        // TODO: Ez azért lehetne elegánsabb...
        return
    }
    alert("Sikeres bejelentkezés!") // TODO: Meg ez is...
    const data:TokenResponse = await response.json()
    localStorage.setItem("refresh", data.refresh)
    localStorage.setItem("access", data.access)
}