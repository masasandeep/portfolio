
import Contact from "./components/contact/contact"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar"
import Project from "./components/projects/Project"
import Skills from "./components/skills/Skills"


function App() {
  return (
    <main>
      <Navbar/>
      <Home/>
      <Skills/>
      <Project/>
      <Contact/>
    </main>
  )
}

export default App
