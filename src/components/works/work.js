import React from "react";
import "./work.css";
import lhmoe from "../assets/Mask group (1).png";
import wts from "../assets/worldtamil.png";
import lecat from "../assets/lecat.png";
import coollah from "../assets/coollah.png";
import bjmm from "../assets/bjmm.jpeg";
import office from "../assets/officechat.png";
import msloan from "../assets/msloan.png";
import gracecabs from "../assets/gracecabs.png";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    image: lhmoe,
    name: "Lhome",
    tech: "NextJS, NodeJS, MySQL",
    desc: "Clients can explore products and book sessions easily.",
    link: "/lhome",
  },
  {
    id: 2,
    image: wts,
    name: "World Tamil Siragam",
    tech: "ReactJs, NodeJs, MongoDB",
    desc: "A static website created using basic web technologies.",
    link: "/wts",
  },
  {
    id: 3,
    image: lecat,
    name: "Lecat",
    tech: "HTML, CSS, Bootstrap, React js, Firebase",
    desc: "Lecat VMobile simplifies quiz creation and manages student results with automatic class averages.",
    link: "/lecat",
  },
  {
    id: 4,
    image: coollah,
    name: "Collah",
    tech: "HTML, CSS, JavaScript, JQuery, ASP.NET, Bootstrap, ReactJS, NodeJS",
    desc: "An e-commerce web application for booking services like AC and home cleaning.",
   link: "/collah",

  },
  {
    id: 5,
    image: bjmm,
    name: "Bjmm",
    tech: "ReactNative, PHP",
    desc: "A user maintenance mobile application with authorization features.",
   link: "/bjmm",

  },
  {
    id: 6,
    image: office,
    name: "Office Chat",
    tech: "ReactJs, NodeJs, MySQL",
    desc: "Office chat platform with features for messaging, video calls, and project integration.",
    link: "/officechat",
  },
  {
    id: 7,
    image: msloan,
    name: "MS LoanGuru",
    tech: "React Native, Expo, Php",
    desc: "MS LoanGuru helps users track loans, calculate interest, apply for loans, and manage repayments easily.",
    link: "/msloan",
  },
  {
    id: 8,
    image: gracecabs,
    name: "Grace Cabs",
    tech: "ReactJs, Typescript, MySQL, NodeJs",
    desc: "Grace Cabs is a smart booking platform that lets users schedule rides, track drivers, and manage trips seamlessly.",
    link: "/gracecabs",
  },
];

const Works = () => {
    const navigate = useNavigate();

  return (
    <div className="project-container">
      {projects.map((p) => (
        <div className="project-card" key={p.id}>
          <img src={p.image} alt={p.name} className="project-img" />

          <div className="project-name">{p.name}</div>

          {/* Hover Overlay */}
          <div className="project-overlay">
            <h3>{p.name}</h3>
            <p><b>Technology Used:</b> {p.tech}</p>
            <p><b>Description:</b> {p.desc}</p>
               <div
              className="view-small"
              onClick={() => navigate(p.link)}   // 👈 Direct navigate here
            >
              <span className="arrows">➜</span> View
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Works;
