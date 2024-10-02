"use client";
import Image from "next/image";
import { motion } from 'framer-motion';
import project from '../assets/proj1.jpg';
import project1 from '../assets/proj2.jpg';

const projects = [
    {
        title: "Pratikriti Films",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore qui tempora ea similique. Dicta iste error laborum eos hic? Nulla autem sed pariatur doloribus ab delectus officiis alias, sit veritatis!",
        devstack: "HTML, CSS, Bootstrap, Javascript, Jquery, SQL, PHP",
        link: "#",
        git: "#",
        src: project,
    },
    {
        title: "Annapurna - Food Donation System",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore qui tempora ea similique. Dicta iste error laborum eos hic? Nulla autem sed pariatur doloribus ab delectus officiis alias, sit veritatis!",
        devstack: "AngularJs, Laravel, MySQL",
        link: "#",
        git: "#",
        src: project1,
    },
    {
        title: "Portfolio",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore qui tempora ea similique. Dicta iste error laborum eos hic? Nulla autem sed pariatur doloribus ab delectus officiis alias, sit veritatis!",
        devstack: "HTML, CSS, Bootstrap, Javascript, Jquery, SQL, PHP",
        link: "#",
        git: "#",
        src: project,
    }
];

const Portfolio = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-24 mt-40" id="portfolio">
      <h1 className="text-white text-5xl max-w-[320px] mx-auto font-semibold my-12 text-center">
        Selected <span className="text-orange-400">Projects</span>
      </h1>

      <div className="max-w-[1200px] mx-auto space-y-24 px-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Project Description */}
            <div className="flex-1 space-y-4 max-w-[550px]">
              <h2 className="text-6xl text-white/70">{`0${index + 1}`}</h2>
              <h3 className="text-4xl">{project.title}</h3>
              <p className="text-lg text-white/70">{project.desc}</p>
              <p className="text-xl text-orange-400 font-semibold">{project.devstack}</p>
              <div className="flex space-x-4 mt-4">
                <a href={project.link} className="text-white/70 hover:text-white transition">Link</a>
                <a href={project.git} className="text-white/70 hover:text-white transition">Git</a>
              </div>
            </div>

            {/* Project Image */}
            <div className="flex-1 flex justify-center">
              <Image src={project.src} alt={project.title} className="h-[300px] w-[500px] object-cover rounded-lg border border-gray-700" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
