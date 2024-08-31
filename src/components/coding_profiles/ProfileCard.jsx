import {motion} from 'framer-motion'
import { fadeIn } from '../../data/data'
const ProfileCard = ({src,solved,link}) => {
  return (
    <motion.div 
    whileHover={{scale:1.1}}
    variants={fadeIn('up',0.2)}
    initial='hidden'
    whileInView={'show'}
     className="md:w-full w-[70%] mx-auto  max-h-[400px] flex flex-col rounded-lg gap-5 shadow-shadowOne">
        <div className="flex items-center justify-center hover:scale-110 duration-300 h-[50%]  overflow-hidden p-4">
            <img src={src} alt="platform-image" className="rounded-lg overflow-hidden" />
        </div>
        <div className="w-full flex flex-col text-white text-lg  font-bodyFont text-transform: uppercase font-bold p-5">
          <div className="flex flex-col items-center justify-center gap-5">
            <p>Solved : {solved}</p>
            <a href={link} className="text-designColor hover:text-white duration-300 hover:scale-125">View</a>
            </div>
        </div>

    </motion.div>
  )
}

export default ProfileCard