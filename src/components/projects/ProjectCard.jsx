import React from 'react'
import { BsGithub } from "react-icons/bs";
import {motion} from 'framer-motion'
import { fadeIn } from '../../data/data';

const ProjectCard = ({ title, des, src,Link }) => {
  return (
    <motion.div 
    whileHover={{scale:1.1}}
    variants={fadeIn('up',0.3)}
    initial='hidden'
    whileInView={'show'}
    className="w-full  max-h-[400px] p-2 rounded-lg shadow-shadowOne flex flex-col">
    <div className="flex-grow min-h-[50%] relative overflow-hidden rounded-lg ">
      <img
        className="w-full h-60 hover:scale-110 duration-300 cursor-pointer object-cover"
        src={src}
        alt="src"
      />
    </div>
    <div className="w-full mt-5 flex flex-col  gap-6 overflow-y-auto scrollbar-thin">
      <div>
        <div className="sticky top-0  bg-bodyColor flex items-center justify-between">
          <h3 className="text-base uppercase text-designColor font-normal">
            {title}
          </h3>
          <div className="px-5">
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
              <a href={Link}><BsGithub /></a>
            </span>
          </div>
        </div>
        <p className="text-sm tracking-wide mt-3 text-white">
          {des}
        </p>
      </div>
    </div>
  </motion.div>
);
}

export default ProjectCard