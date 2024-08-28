import Card from "./Card"
import { skills } from '../../data/data'
import Title from "../layout/Title"
const Skills = () => {
  return (
    <div id="skills" className="h-auto w-full bg-bodyColor grid md:grid-cols-4 grid-cols-3 place-items-center gap-5 px-5 py-10">
      {
        skills.map(title=>
          <Card name={title}/>
        )
      }
    </div>
  )
}

export default Skills