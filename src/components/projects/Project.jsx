import React from 'react'
import { projectsData } from '../../data/data'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <section id='projects' className='h-auto  bg-bodyColor grid grid-cols-2 md:grid-cols-3 w-full gap-10 p-20'>
      {
        projectsData.map(({title,src,des})=>
        <ProjectCard title={title} src={src} des={des}/>
        )
      }
    </section>
  )
}

export default Project