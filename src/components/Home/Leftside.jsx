import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaNode } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { BiLogoDjango } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import {motion} from 'framer-motion'
import { fadeIn } from "../../data/data";
const Leftside = () => {
  const [text] = useTypewriter({
    words: [
      "Competitive Programmer",
      "Full Stack Developer",
      "Django Developer",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <motion.div 
    variants={fadeIn('down',0.4)}
    initial='hidden'
    whileInView={'show'}
    className=" w-full lg:w-1/2 flex flex-col gap-5 px-10 py-10 ">
      <h4 className="text-transform: uppercase">welcome to my world</h4>
      <h1 className="text-6xl text-white font-bold">
        Hi,I'm{" "}
        <span className="text-designColor font-titleFont">Sandeep Kumar</span>
      </h1>
      <motion.h1
      variants={fadeIn('right',0.4)}
      initial='hidden'
      whileInView={'show'} className="text-4xl font-bold text-white">
        a <span>{text}</span>
        <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
      </motion.h1>
      <motion.div
      variants={fadeIn('left',0.4)}
      initial='hidden'
      whileInView={'show'}
      className="flex flex-col lg:flex-row gap-6 justify-between">
        <div>
        <h4 className="text-tranform: uppercase text-gray-400 mb-4">Find me on</h4>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://www.facebook.com/profile.php?id=100072142543167&mibextid=kFxxJD"><FaFacebookF /></a>
            
          </span>
          <span className="bannerIcon"><a href="https://www.instagram.com/m.s.kumar12?igsh=ZzRuNDdza25naTc2">
          <FaInstagram />
          </a>
          </span>
          <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/sandeep-kumar-masa-b246b4255/">
            <FaLinkedinIn />
            </a>
          </span>
        </div>
        </div>
        <div>
        <h4 className="text-tranform: uppercase text-gray-400 mb-4">
            best skills on 
        </h4>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact/>
          </span>
          <span className="bannerIcon">
            <FaNode/>
          </span>
          <span className="bannerIcon">
            <SiTailwindcss/>
          </span>
          <span className="bannerIcon">
            <BiLogoDjango/>
          </span>
          <span className="bannerIcon">
            <SiMongodb/>
          </span>
        </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Leftside;
