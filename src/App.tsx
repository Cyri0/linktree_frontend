import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import UserPage from "./pages/UserPage"
import SlugContextProvider from "./context/SlugContextProvider"
import Login from "./pages/Login"
import AuthenticatedUserContextProvider from "./context/AuthenticatedUserContextProvider"

const App = () => {
  return (
    <SlugContextProvider>
    <AuthenticatedUserContextProvider>
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
    </AuthenticatedUserContextProvider>
    </SlugContextProvider>
  )
}

export default App