import chatapp from '../assets/chatapp.png'
import todo from '../assets/todoapp.png'
import room4thought  from '../assets/Room4Thought.png'
import cc from '../assets/cc-logo-sd.png'
import leetcode from '../assets/leetcode.jpeg'
import gfg from '../assets/gfg.jpeg'
export const navLinksdata = [
    {
      _id: 1001,
      title: "Home",
      link: "home",
    },
    {
      _id: 1002,
      title: "Skills",
      link: "skills",
    },
    {
      _id: 1003,
      title: "Projects",
      link: "projects",
    },
    {
      _id: 1005,
      title: "Profiles",
      link: "profiles",
    },
    {
      _id: 1004,
      title: "Contact",
      link: "contact",
    },
    
  ];
  export const skills = [
    'Django',
    'React js',
    'Tailwind',
    'python',
    'c++',
    'Node js',
    'Express js',
    'Mongo Db'
  ]
export const projectsData=[
  {
    _id:1,
    title: 'Chat-Application',
    des:'Developed a Django-based web application enabling students to create and join discussion rooms. Implemented features for room creation, content posting, and post visibility for all members, along with search functionality and a feed of recent posts to boost engagement.',
    src: chatapp,
    Link: 'https://github.com/masasandeep/chat-app'
  },
  {
    _id:2,
    title: 'Room4Thought',
    des:'Developed a Django-based web application enabling students to create and join discussion rooms. Implemented features for room creation, content posting, and post visibility for all members, along with search functionality and a feed of recent posts to boost engagement.',
    src: room4thought,
    Link: 'https://github.com/masasandeep/Room4Thought'
  },
  {
    _id:3,
    title: 'todo',
    des:'Developed a Django-based web application enabling students to create and join discussion rooms. Implemented features for room creation, content posting, and post visibility for all members, along with search functionality and a feed of recent posts to boost engagement.',
    src: todo,
    Link: 'https://github.com/masasandeep/todo_application'
  },
]
export const profiles=[
  {
    _id: 4,
    platform: 'Leetcode',
    src: leetcode,
    solved: 464,
    link: 'https://leetcode.com/u/masasandeep/'
  },
  {
    _id: 5,
    src: cc,
    platform: 'CodeChef',
    solved: 258,
    link: 'https://www.codechef.com/users/masa_sandeep'
  },
  {
    _id: 6,
    src: gfg,
    platform: 'GFG',
    solved: 34,
    link: 'https://www.geeksforgeeks.org/user/masa_sandeep/'
  }
]
export const skill = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.4
    }
  }
};

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};
export const fadeIn = (direction,delay)=>{
  return{
      hidden:{
          y: direction === 'up'?100: direction === 'down' ?-100 :0,
          x: direction === 'left'?-100: direction === 'right' ?100 :0,
          opacity: 0
      },
      show:{
          y:0,
          x:0,
          opacity:1,
          transition:{
              type: "tween",
              duration: 1.2,
              delay: delay,
              ease: [0.25,0.25,0.25,0.75]
          }
      }
  }

}