import Title from "../layout/Title";
import hero from "../../assets/hero-img.png";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {motion} from 'framer-motion'
import { fadeIn } from "../../data/data";
const Contact = () => {
  const form = useRef();
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')
  const sendEmail = (e) => {
    const values = {
      name: name,
      email: email,
      message: message
    }
    console.log(values)
    e.preventDefault();
    emailjs.send(import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        values, {
        publicKey: import.meta.env.VITE_APP_PUBLIC_ID,
      })
      .then(
        () => {
          toast.success("Mail was sent successfully")
          console.log("SUCCESS!");
        },
        (error) => {
          toast.error("Failed to send the mail")
          console.log("FAILED...", error.text);
        }
      )
      .finally(()=>{
        setName('')
        setEmail('')
        setMessage('')
      });
  };
  return (
    <section id="contact" className="h-auto w-full bg-bodyColor py-10 text-xl">
      <Title title="Contact With Me" />

      <div className="flex flex-col mt-10 md:flex-row w-full bg-bodyColor px-10 items-center shadow-shadowOne justify-center ">
        <motion.div
        variants={fadeIn('left',0.3)}
        initial='hidden'
        whileInView={'show'}
         className="md:w-1/2  w-full  flex  items-center justify-center px-10 ">
          <img src={hero} alt="alternate"  />
        </motion.div>{" "}
        <motion.form
        variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={'show'}
          ref={form}
          className="w-full md:w-[60%] flex flex-col gap-10 p-10 shadow-shadowOne text-gray-400 "
          onSubmit={sendEmail}
        >
            <div >
              <label htmlFor="name" className="labelTitle">
                Name:
              </label>
              <input type="text" name="name" className="contactInput" value={name} onChange={(e)=>setName(e.target.value)} />
              </div>
            <div >
              <label htmlFor="email" className="labelTitle">
                Email:
              </label>
              <input type="text" name="email" className="contactInput" value={email} onChange={(e)=>setEmail(e.target.value)}/>
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
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
            />
          </div>
          <div className="w-full text-gray-400">
            <input
              className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
              value="submit"
              type="submit"
            />
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
