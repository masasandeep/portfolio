import Leftside from "./Leftside";
import RightSide from "./rightside";
const Home = () => {
   
  return (
    <section id="home"  className="h-screen  flex-col md:flex-row bg-bodyColor w-full flex text-gray-400 gap-10 p-10">
       <Leftside/>
       <RightSide/>
    </section>
  )
}

export default Home