import React from 'react';

import reactjs from "../../assets/images/react.png"
import nextjs from "../../assets/images/nextjs.png"
import image4 from "../../assets/images/vuejs.png"
import nodejs from "../../assets/images/nodejs.png"
import html from "../../assets/images/html-5.png"
import sass from "../../assets/images/sass.png"
import css from "../../assets/images/css3.png"
import js from "../../assets/images/js.png"
import typescript from "../../assets/images/typescript.png"
import angularjs from "../../assets/images/angularjs.png"
import postgress from "../../assets/images/database.png"
import mongodb from "../../assets/images/data-server.png"

import bootstrap from "../../assets/images/bootstrap.png"
import material from "../../assets/images/composite.png"
import tailwind from "../../assets/images/tailwind.png"
import git from "../../assets/images/social.png"
import github from "../../assets/images/github.png"

import orms from "../../assets/images/programming.png"
import authentication from "../../assets/images/authentication.png"
import express from "../../assets/images/express.png"
import supabase from "../../assets/images/supabase.png"
import java from "../../assets/images/java.png"
import python from "../../assets/images/python.png"
import student from "../../assets/images/student.png"

import ai_img from "../../assets/images/ai.png"
import app_dev from "../../assets/images/app-dev.png"
import web_dev from "../../assets/images/web-dev.png";
import wordPress from "../../assets/images/wordpress.png"
import mysql from "../../assets/images/mysql.png"
import Container from '../common/Container';

const SkillsAbilities = ({ refs }) => {

  const myskills_data = [
    { imgicon: reactjs, skillname: "React.js" },
    { imgicon: nodejs, skillname: "Node.js" },
    { imgicon: express, skillname: "Express.js" },
    { imgicon: nextjs, skillname: "Next.js" },
    { imgicon: ai_img, skillname: "AI" },
    { imgicon: html, skillname: "HTML" },
    { imgicon: css, skillname: "CSS" },
    { imgicon: sass, skillname: "SCSS" },
    { imgicon: js, skillname: "Javascript" },
    { imgicon: typescript, skillname: "Typescript" },
    { imgicon: angularjs, skillname: "AngularJs" },
    { imgicon: image4, skillname: "Vue.js" },
    { imgicon: mongodb, skillname: "Mongodb" },
    { imgicon: postgress, skillname: "PostgreSQL" },
    { imgicon: mysql, skillname: "MySQL" },
    { imgicon: orms, skillname: "Prisma ORM" },
    { imgicon: orms, skillname: "Drizzle ORM" },
    { imgicon: authentication, skillname: "Clerk | Authentication" },
    { imgicon: bootstrap, skillname: "Bootstrap" },
    { imgicon: material, skillname: "Material UI" },
    { imgicon: tailwind, skillname: "Tailwind Css" },
    { imgicon: git, skillname: "Git" },
    { imgicon: github, skillname: "Github" },
    { imgicon: student, skillname: "Students Project" },
    { imgicon: python, skillname: "Python" },
    { imgicon: java, skillname: "Java" },
    { imgicon: web_dev, skillname: "Web Development" },
    { imgicon: app_dev, skillname: "App Development" },
     { imgicon: wordPress, skillname: "WordPress" },
  ]

  return (
    <Container>
      <div ref={refs.ourSkills} id="ourSkills" className=''>
        <h1 className='text-3xl  font-bold text-[#132238] text-center leading-9 pt-5 sm:text-4xl mt-4 sm:mt-16  lg:text-center lg:text-[38px]'> Skills & Abilities</h1>
        <p className='text-base py-8 text-[#87909D] text-center lg:text-center lg:text-[17px]'> Empowering digital innovation with a versatile skill set and modern technologies
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {
            myskills_data.map((value, i) => {
              return (
                <div className="skills_1 p-6 text-center" key={i}>
                  <img src={value.imgicon} alt="" />
                  <h2>{value.skillname}</h2>
                </div>
              )
            })
          }

        </div>


      </div>
    </Container>
  )
}

export default SkillsAbilities;
