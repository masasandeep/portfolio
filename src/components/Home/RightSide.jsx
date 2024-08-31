import { fadeIn } from '../../data/data'
import source from './../../assets/hero-img.png'
import {motion}  from 'framer-motion'
const RightSide = () => {
  return (
    <motion.div
    variants={fadeIn('up',0.4)}
    initial='hidden'
    whileInView={'show'} className="md:w-1/2 w-full text-xl gap-5 text-gray-400 flex flex-col  items-center justify-center ">
      <motion.img 
      whileHover={{scale:1.2}}
      src={source} alt='alternate' className=' cursor-pointer'/>
      <motion.a
      variants={fadeIn('right',0.4)}
      initial='hidden'
      whileInView={'show'} href="https://drive.google.com/file/d/1HE-3vv15bzfZIDaRDxWm37jxVSprr8ao/view?usp=drive_link" className='text-transform: uppercase font-bold bg-black p-5 rounded-lg hover:text-designColor duration-300 hover:scale-110' >Resume</motion.a>
    </motion.div>
  )
}

export default RightSide