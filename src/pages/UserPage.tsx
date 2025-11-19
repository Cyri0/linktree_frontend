import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUserLinks, type UserLinkResponse } from "../services/publicAPI"
import { AuthUserContext } from "../context/AuthenticatedUserContextProvider"
import NewUrlComponent from "../components/NewUrlComponent"
import UrlComponent from "../components/UrlComponent"

const UserPage = () => {
  const {username} = useParams()
  const [links, setLinks] = useState<UserLinkResponse>()
  const ctx = useContext(AuthUserContext)
  
  useEffect(()=>{
    getUserLinks(username || "anonymous").then(data => setLinks(data))
  },[])
  
  return (
    <div>
        <h1>Ez itt {links?.display_name} oldala!</h1>
        {ctx && ctx.authUser.username === username && <NewUrlComponent />}
        <ul>
          {links?.links.map(link => <UrlComponent {...link} />)}
        </ul>
    </div>
  )
}

export default UserPage