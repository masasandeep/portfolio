import chatapp from '../assets/chatapp.png'
import todo from '../assets/todoapp.png'
import room4thought  from '../assets/Room4Thought.png'
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
      _id: 1006,
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
    title: 'Chat-Application',
    des:'Developed a Django-based web application enabling students to create and join discussion rooms. Implemented features for room creation, content posting, and post visibility for all members, along with search functionality and a feed of recent posts to boost engagement.',
    src: chatapp,
    Link: 'https://github.com/masasandeep/chat-app'
  },
  {
    title: 'Room4Thought',
    des:'Developed a Django-based web application enabling students to create and join discussion rooms. Implemented features for room creation, content posting, and post visibility for all members, along with search functionality and a feed of recent posts to boost engagement.',
    src: room4thought,
    Link: 'https://github.com/masasandeep/Room4Thought'
  },
  {
    title: 'todo',
    des:'Developed a Django-based web application enabling students to create and join discussion rooms. Implemented features for room creation, content posting, and post visibility for all members, along with search functionality and a feed of recent posts to boost engagement.',
    src: todo,
    Link: 'https://github.com/masasandeep/todo_application'
  },
]