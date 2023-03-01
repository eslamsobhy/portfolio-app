import { GiBriefcase } from "react-icons/gi";
import { BsFront, BsBack } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
import { MdCardMembership } from "react-icons/md";

export const projects = [
  {
    id: 0,
    title: "Cocktails Web App",
    description:
      "Single page web application that displays drinks and cocktails from around the world, inspired from the cocktails db.",
    image: "/images/6.jpg",
    tags: ["Javascript", "HTML", "CSS", "ReactJs"],
    source: "https://github.com/eslamsobhy/cocktails-app",
    visit: "https://cocktails-app-vert.vercel.app/",
  },
  {
    id: 1,
    title: "Shopping Cart App",
    description:
      "Single page web application that allows us to display, delete, increase, and decrease chosen cart items from an external API",
    image: "/images/2.jpg",
    tags: ["Javascript", "HTML", "CSS", "ReactJs"],
    source: "https://github.com/eslamsobhy/cart-app",
    visit: "https://cart-app-rho.vercel.app/",
  },
  {
    id: 2,
    title: "Omnifood",
    description:
      " Fully responsive web site for a premium food delivery company that is responsible for providing a healthy and affordable meals in currently four cities.",
    image: "/images/3.jpg",
    tags: ["HTML", "CSS", "JQuery"],
    source: "https://github.com/eslamsobhy/Omnifood",
    visit: "https://omnifood-xi.vercel.app/",
  },
  {
    id: 3,
    title: "Leon",
    description:
      "Fully responsive web site template for Leon agency, which is responsible for Graphic/Web design, UI/UX, and Web development.",
    image: "/images/4.jpg",
    tags: ["HTML", "CSS"],
    source: "https://github.com/eslamsobhy/Leon-app",
    visit: "https://leon-app.vercel.app/",
  },
];

export const timelineData = [
  {
    year: 2017,
    text: "Started my journey as a computer science student.",
    icon: <GiBriefcase />,
  },
  {
    year: 2018,
    text: "Took a deep dive into front-end web development.",
    icon: <BsFront />,
  },
  {
    year: 2020,
    text: "Took a deep dive into Back-End web development.",
    icon: <BsBack />,
  },
  {
    year: 2021,
    text: "Got a bachelor's degree in computer science from Ain Shams University.",
    icon: <GrCertificate />,
  },
  {
    year: 2023,
    text: "Became a full-stack web development trainee at ITI.",
    icon: <MdCardMembership />,
  },
  {
    year: 2023,
    text: "Became a software engineer trainee at ALX Africa.",
    icon: <MdCardMembership />,
  },
];
