import { useContext, useEffect } from "react"
import { SlugContext } from "../context/SlugContextProvider"
import UserCard from "../components/UserCard"
import { getUserData } from "../services/protectedAPI"

const Home = () => {
  const {slugs} = useContext(SlugContext)
  
  useEffect(()=>{
    getUserData()
  },[])

  return (
    <main>
        <h1>Link 🌳</h1>
        {slugs.map(slug => <UserCard {...slug} />)}
    </main>
  )
}

export default Home