"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Zenin - Finance Tracker",
    description:
      "A mobile finance tracking app that categorizes spending, suggests savings strategies, and tracks investments. Built using React Native and Firebase.",
    link: "https://github.com/hemanth/zenin",
    color: "text-rose-500",
    image: "/images/zenin-front.jpg", // put your image path here
    imageClass: "max-h-60 rotate-5",
  },
  {
    title: "Dazai - Trading Algo",
    description:
      "A quantitative trading algorithm that generates buy/sell signals for stocks and crypto, with logging to track performance. Developed with Python and various technical indicators.",
    link: "https://github.com/hemanth/dazai",
    color: "text-emerald-500",
    image: "/images/dazaiui.jpg",
    imageClass: "", // placeholder or actual image
  },
  {
    title: "RentKr - Item Rental Service",
    description:
      "A MERN stack web app for renting out items like sound systems, bikes, and books. Built with React, Node.js, MongoDB, and AWS S3 for image storage.",
    link: "https://github.com/hemanth/rentkr",
    color: "text-indigo-500",
    image: "/images/rentkr-front.png",
    imageClass: "rotate-4 ", // placeholder or actual image
  },
];

export default function ProjectPage() {
  return (
    <main className="min-h-screen px-6 py-20 flex items-start justify-center text-neutral-100 bg-gradient-to-br from-black/70 via-zinc-800 to-red-600">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="max-w-5xl w-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold mb-16 text-center"
        >
          My Projects
        </motion.h2>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-16 flex flex-col sm:flex-row items-center bg-neutral-900 rounded-2xl shadow-xl p-8"
          >
            {/* Left side text */}
            <div className="sm:w-1/2 pr-4">
              <h3 className={`text-3xl font-bold ${project.color}`}>
                {project.title}
              </h3>
              <p className="mt-4 text-lg text-neutral-400 leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                className={`mt-6 inline-block ${project.color} font-medium hover:underline`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub &rarr;
              </a>
            </div>

            {/* Right side image */}
            <motion.div className="sm:w-1/2 mt-8 sm:mt-0 flex justify-center" style={{ perspective: 1000 }}>
              <motion.img
                src={project.image}
                alt={`${project.title} screenshot`}
                className={`max-w-full h-full rounded-lg shadow-lg transform ${project.imageClass} transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:z-20 group-hover:shadow-2xl`}
                style={{ objectFit: "cover" }}
                whileHover={{
                  scale:1.2,
                  rotateY:8,
                  rotateX:1,
                  zIndex:19,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.4)"
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}
