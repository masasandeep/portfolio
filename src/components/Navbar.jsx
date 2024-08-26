import { navLinksdata } from "../data/data"
import {Link} from 'react-scroll'
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-16 px-10 bg-bodyColor p-4 sticky-top z-50 font-titleFont pr-10">
      <div className="logo text-gray-500 text-transfrom: uppercase">
        Sandeep Kumar
      </div>
      <ul className="flex items-center space-x-6">
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
    </nav>
  )
}

export default Navbar