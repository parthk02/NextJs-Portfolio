import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaNode, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const skillIcons = [
    { icon: <FaHtml5 size={80} />, label: "HTML" },
    { icon: <FaCss3Alt size={80} />, label: "CSS" },
    { icon: <FaReact size={80} />, label: "React" },
    { icon: <FaJsSquare size={80} />, label: "JavaScript" },
    { icon: <FaNode size={80} />, label: "Node" },
    { icon: <FaDatabase size={80} />, label: "SQL" },
    { icon: <SiMongodb size={80} />, label: "MongoDB" },
    { icon: <SiExpress size={80} />, label: "Express" },
];

const Skills = () => {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32'>
      <div className='text-white max-w-[1200px] mx-auto px-4 text-center'>
        <h2 className='text-6xl font-bold mb-12'>Skills</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12'>
          {skillIcons.map((skill, index) => (
            <div 
              key={index}
              className='group h-[180px] w-[180px] md:h-[220px] md:w-[220px] flex flex-col justify-center items-center bg-white/10 p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-b hover:from-orange-500 hover:to-purple-600'>
              {skill.icon}
              <p className='mt-4 text-lg font-semibold text-white group-hover:text-white/90'>{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills;
