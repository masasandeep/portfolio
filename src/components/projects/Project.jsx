import React from 'react'
import { projectsData } from '../../data/data'
import ProjectCard from './ProjectCard'
import Title from '../layout/Title'

const Project = () => {
  return (
    <>
   
    <section id='projects' className='h-auto min-h-screen bg-bodyColor'>
    <div className="flex justify-center items-center text-center">
    <Title title='Projects'/>
      </div>
      <div className=' p-20 md:p-10  grid grid-cols-1 md:grid-cols-3 w-full gap-5'>
      {
        projectsData.map(({title,src,des})=>
        <ProjectCard title={title} src={src} des={des}/>
        )

      }
      </div>
    </section>
    </>
  )
}

export default Project