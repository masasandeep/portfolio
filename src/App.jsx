
import Profiles from "./components/coding_profiles/Profiles"
import Contact from "./components/contact/contact"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar"
import Project from "./components/projects/Project"
import Skills from "./components/skills/Skills"
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <main>
      <Navbar/>
      <Home/>
      <Skills/>
      <Project/>
      <Profiles/>
      <Contact/>
      <Toaster/>
    </main>
  )
}

export default App
