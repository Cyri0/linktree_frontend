import { Link } from "react-router-dom"
import type { Slug } from "../context/SlugContextProvider"

const UserCard = (props: Slug) => {
  return (
    <Link style={{
      display: "block"
    }} to={`/u/${props.username}`}>{props.username}</Link>
  )
}

export default UserCard