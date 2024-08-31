import React from 'react'
import {motion} from 'framer-motion'
import { item } from '../../data/data'
const Card = ({name}) => {
  return (
    <motion.div
    variants={item}
     className="item h-[180px] w-[180px] bg-bodyColor border-4 border-white text-xl font-bodyFont font-bold  text-white flex items-center justify-center rounded-full">
        {name}
    </motion.div>
  )
}


export default Card