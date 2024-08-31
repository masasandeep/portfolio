import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../../data/data';
const Title = ({title}) => {
  return (
    <motion.div
    variants={fadeIn('down',0.3)}
    whileInView={'show'}
    initial='hidden'
    className="flex justify-center items-center gap-4 font-titleFont ">
      <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">{title}</h1>
    </motion.div>
  );
}

export default Title