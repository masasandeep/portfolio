import { profiles } from "../../data/data"
import Title from "../layout/Title"
import ProfileCard from "./ProfileCard"

const Profiles = () => {
  return (
    <section id="profiles" className="w-full h-auto bg-bodyColor">
        <Title title='Coding Profiles'/>
        <div className="w-[80%] mt-4 mx-auto grid md:grid-cols-3 grid-cols-1 gap-10 p-4">
            {
                profiles.map(({_id,src,solved,link})=>(
                 <ProfileCard key={_id} src={src} solved={solved}  link={link}/> 
                ))
            }
        </div>
    </section>
  )
}

export default Profiles