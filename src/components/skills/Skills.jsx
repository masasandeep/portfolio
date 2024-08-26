import Card from "./Card"
import { skills } from '../../data/data'
const Skills = () => {
  return (
    <div id="skills" className="h-auto bg-bodyColor grid md:grid-cols-5 grid-cols-3 gap-10 px-20">
      {
        skills.map(title=>
          <Card name={title}/>
        )
      }
    </div>
  )
}

export default Skills