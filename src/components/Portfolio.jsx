import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { portfolio } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SnakeGame } from ".";

const ProjectCard = ({
  index,
  name,
  description,
  image,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={`w-full mt-[-2px] flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-5 md:gap-8`}
    >
      <div className='relative w-full md:w-3/5'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-auto object-cover rounded-lg md:rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300'
        />
      </div>

      <div className={`w-full md:w-2/5 px-4 sm:px-6 md:p-8 lg:p-12 flex flex-col justify-center ${isEven ? "text-left" : "text-left md:text-right"}`}>
        <h3 className='text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight'>{name}</h3>
        <p className='mt-3 sm:mt-4 text-secondary text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed'>{description}</p>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className='px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-center mb-8 sm:mb-12`}>Portfolio</h2>
      </motion.div>

      <div className='mt-8 sm:mt-12 md:mt-16 flex flex-col gap-12 sm:gap-16 md:gap-24'>
        {/* Snake Game Section */}
        <motion.div
          variants={fadeIn("up", "spring", 0, 0.75)}
          className="w-full flex flex-col items-center justify-center bg-gray-900 rounded-xl p-6 sm:p-8"
        >
          <h3 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-6">Interactive Snake Game</h3>
          <SnakeGame />
        </motion.div>

        {/* Projects */}
        {portfolio.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
