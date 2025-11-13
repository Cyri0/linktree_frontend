import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUserLinks, type UserLinkResponse } from "../services/publicAPI"

const UserPage = () => {
  const {username} = useParams()
  const [links, setLinks] = useState<UserLinkResponse | undefined>()

  useEffect(()=>{
    getUserLinks(username || "anonymous").then(data => setLinks(data))
  },[])

  return (
    <div>
        <h1>Ez itt {links?.display_name} oldala!</h1>

        <ul>
          {links?.links.map(link => 
          <li key={link.id}>
            <a href={link.url}>
            {link.title}</a>
          </li>)}
        </ul>
    </div>
  )
}

export default UserPage