import { skill,item, skills } from "../../data/data";
import Title from "../layout/Title";
import Card from "./Card";
import { motion } from "framer-motion"
const Skills = () => {
  return(
    
  <section
    
    id="skills"
    className="h-auto w-full bg-bodyColor py-10"
  >
    <motion.div
    variants={skill}
    whileInView={'visible'}
    initial='hidden'
    className="skill">
    <Title title='Skills'/>
      <div className="w-full grid md:grid-cols-4 grid-cols-3 place-items-center gap-5 px-5 py-10">
    {skills.map((title,index) => (
      
      <Card  key={index} name={title} />
    ))}
     </div>
    </motion.div>
   
  </section>
  )
};

export default Skills;
