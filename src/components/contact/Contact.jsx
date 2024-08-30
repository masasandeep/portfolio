import Title from "../layout/Title";
import Leftside from "./Leftside";
import hero from "../../assets/hero-img.png";
const Contact = () => {
  return (
    <section id="contact" className="h-auto w-full bg-bodyColor py-10 text-xl">
        <Title title="Contact With Me" />

      <div className="flex flex-col md:flex-row w-full bg-bodyColor px-10 items-center justify-center ">
        <div className="md:w-1/2  w-full  flex  items-center justify-center py-5 ">
          <img src={hero} alt="alternate" />
        </div>{" "}
        <form className="w-full md:w-[60%] flex flex-col gap-10 p-10 shadow-shadowOne text-gray-400 ">
          <div>
            <label htmlFor="email" className="labelTitle">
              Email:
            </label>
            <input type="text" name="email" className="contactInput" />
          </div>
          <div>
            <label htmlFor="subject" className="labelTitle">
              Subject:
            </label>
            <input type="text" name="subject" className="contactInput" />
          </div>
          <div>
            <label htmlFor="message" className="labelTitle">
              Message:
            </label>
            <textarea
              name="message"
              className="contactTextArea"
              rows={8}
              cols={30}
            />
          </div>
          <div className="w-full text-gray-400">
            <button className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
