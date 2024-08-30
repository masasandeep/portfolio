import React from 'react'
import { projectsData } from '../../data/data'
import ProjectCard from './ProjectCard'
import Title from '../layout/Title'

const Project = () => {
  return (
    <>
   
    <section id='projects' className='h-auto min-h-screen bg-bodyColor'>

    <Title title='Projects'/>
      <div className=' p-20 md:p-10  grid grid-cols-1 md:grid-cols-3 w-full gap-5 '>
      {
        projectsData.map(({title,src,des,Link})=>
        <ProjectCard title={title} src={src} des={des} Link={Link}/>
        )

      }
      </div>
    </section>
    </>
  )
}

export default Project