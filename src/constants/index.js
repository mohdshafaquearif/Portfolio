import { FaJenkins } from "react-icons/fa";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  edureka,
  resturant,
  jobit,
  tripguide,
  Jenkins,
  Kubernetes,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Devops Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Jenkins",
    icon: Jenkins,
  },
  {
    name: "Kubernetes",
    icon: Kubernetes,
  },
];

const experiences = [
  {
    title: "Technical Consultant",
    company_name: "edureka!",
    icon: edureka, 
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Working on Real time applications and building Realtime applications",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website, but Arif proved me wrong.",
    name: "Jessica Jasyleen",
    designation: "Associate Software Engineer",
    company: "LTTS",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've met a web developer who truly loves development' like Shafaque Arif.",
    name: "Naveen Arun Jaswanth",
    designation: "SDE",
    company: "Accenture",
    image: "https://media.licdn.com/dms/image/v2/D5635AQFlDkYZeNTJFA/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1706512585877?e=1739617200&v=beta&t=cDlqEafjsT616aAILpVzWCxexzSID0EC7XFqVgdJlmk",
  },
  {
    testimonial:
      "After Shafaque Joined with me, We are now ready to bring new change in Development",
    name: "Raju",
    designation: "Software Engineer",
    company: "Tech Mahindra",
    image: "https://media.licdn.com/dms/image/v2/D5603AQERMvLc4fc9Dg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1730916161363?e=1744848000&v=beta&t=mBHWwafjq9JTZKqeojRVz4YLT0FxLYotFGL3uxqm7oc",
  },
];

const projects = [
  {
    name: "Restaurant Website",
    description:
     "A web-based platform that enables users to explore menus, place orders, and manage restaurant reservations seamlessly, offering a convenient and delightful dining experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: resturant,
    source_code_link: "https://github.com/mohdshafaquearif",
  },
  {
    name: "Chat Application",
    description:
   "A MERN-based real-time chat app using Socket.io for instant messaging. Users can create chat rooms and manage conversations seamlessly.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "red-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/mohdshafaquearif/Chat_Application.git",
  },
  {
    name: "Website Dockerization",
    description:
      "A fully Dockerized web application using Docker, Docker Hub, Git, and GitHub for seamless deployment, scalability, and version control.",
    tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "DockerHub",
        color: "green-text-gradient",
      },
      {
        name: "Git",
        color: "pink-text-gradient",
      },
      {
        name: "Github",
        color: "yellow-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/mohdshafaquearif",
  },
];

export { services, technologies, experiences, testimonials, projects };
