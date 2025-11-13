import { createContext } from "react"
import { useEffect, useState } from "react"
import { BASE_URL } from "../services/publicAPI"

export type Slug = {
    username: string
}

export const SlugContext = createContext<{slugs: Slug[]}>({slugs: []})

const SlugContextProvider = (props: {children:React.ReactNode}) => {
    const [userSlugs, setUserSlugs] = useState<Slug[]>([])

    useEffect(() => {
        fetch(BASE_URL + "/api/accounts/slugs/")
            .then(res => res.json())
            .then(data => setUserSlugs(data))
    }, [])

    return (
        <SlugContext.Provider value={{slugs: userSlugs}}>
            { props.children }
        </SlugContext.Provider>
    )
}

export default SlugContextProvider