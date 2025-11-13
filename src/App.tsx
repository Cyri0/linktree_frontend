import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import UserPage from "./pages/UserPage"
import SlugContextProvider from "./context/SlugContextProvider"
import Login from "./pages/Login"

const App = () => {
  return (
    <SlugContextProvider>
    <BrowserRouter>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/about"}>About</Link>
      </nav>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/u/:username" element={<UserPage/>} />
      </Routes>
    </BrowserRouter>
    </SlugContextProvider>
  )
}

export default App