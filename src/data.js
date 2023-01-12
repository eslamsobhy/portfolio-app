import React from "react";
import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillLinkedin,
} from "react-icons/ai";

export const links = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "/projects", text: "Projects" },
  { id: 3, url: "/technologies", text: "Technologies" },
  { id: 4, url: "/about", text: "About" },
];

export const social = [
  {
    id: 1,
    url: "mailto:eslamsobhy206@gmail.com",
    icon: <AiFillGoogleCircle />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/eslam-sobhy-800249175",
    icon: <AiFillLinkedin />,
  },
  { id: 3, url: "https://www.github.com/eslamsobhy", icon: <AiFillGithub /> },
];
