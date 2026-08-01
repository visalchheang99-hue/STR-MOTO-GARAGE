import React from "react";
import "../Style/About.css";
import { Link } from "react-router-dom";
import imgP8 from "../assets/image/P8.jpg";
import imgsrc from "../assets/image/Owner.jpg";
import imgbt from "../assets/image/Bt.jpg";
import imgSastra from "../assets/image/Men.jpg";
import imgVisal from "../assets/image/Sal.jpg";
const About = () => {
  const teamMembers = [
    {
      name: "Sitharith Suon",
      title: "The Onwer Of STR MOTO GARAGE",
      image: imgsrc,
      alt: "Sitharith Suon",

    },
    {
      name: "Sastra Ja Ratana",
      title: "Mechanic of STR MOTO GARAGE",
      image: imgbt,
      alt: "Sastra Ja Ratana Profile",
    },
    {
      name: "Reak",
      title: "Exhasut Builder of STR MOTO GARAGE",
      image: imgVisal,
      alt: "Visal Profile",
    },
    {
      name: "Morn Sivmen",

      title: "Admin Page",
      image: imgSastra,
      alt: "Morn Sivmen Profile",
    },
  ];
  return (
    <div
      className=" min-h-screen w-full bg-cover bg-center pt-24 bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${imgP8})` }}
    >
      <div className="About-cards-container">
        {/* Fixed: Changed 'Members' to 'teamMembers' to match the array name */}
        {teamMembers.map((member, index) => (
          <React.Fragment key={index}>
            <section className="about-card">
              <div className="about-image-container animate-[fadeIn_3.2s_ease_both]">
                <img
                  src={member.image}
                  className="about-img"
                  alt={member.alt}
                />
              </div>
              <div className="about-content">
                <h2 className="about-name">{member.name}</h2>
                <p className="about-title">{member.title}</p>
              </div>
            </section>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};


export default About;