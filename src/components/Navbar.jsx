import { navLinksdata } from "../data/data"
import {Link} from 'react-scroll'
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false)
  return (
    <nav className="sticky top-0 flex text-xl items-center justify-between h-20 font-bold p-5  bg-bodyColor   z-50 font-titleFont md:px-32">
      <div className="logo text-gray-400 text-transfrom: uppercase">
        Sandeep Kumar
      </div>
      <ul className="hidden md:flex items-center space-x-14">
        {navLinksdata.map(({_id,title,link})=>(
          <li key={_id} className="text-gray-400 cursor-pointer tracking-wide  hover:text-red-600 duration-300">
            <Link
            activeClass="active"
            to={link}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
            {title}
            </Link>
          </li>
        ))}
      </ul>
      <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl md:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
      {
        showMenu && <div className="absolute top-0 right-0 w-[40%] h-screen flex flex-col font-bold p-10 bg-bodyColor font-titleFont">
        <ul className="flex-col items-center space-y-6 p-4">
          {navLinksdata.map(({_id,title,link})=>(
            <li key={_id} className="text-gray-400 cursor-pointer hover:text-red-600">
              <Link
              activeClass="active"
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
              {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
          </div>
      }
    </nav>
  )
}

export default Navbar