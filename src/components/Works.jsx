import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  window_title,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.25, 0.6)} className='sm:w-[380px] w-full'>
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        scale={1.01}
        transitionSpeed={450}
        className='window-chrome'
      >
        <div className='window-titlebar'>
          <span className='window-dot' style={{ background: "#FB6467" }} />
          <span className='window-dot' style={{ background: "#FFB454" }} />
          <span className='window-dot' style={{ background: "#3DD68C" }} />
          <span className='ml-2 text-[12px] font-mono-ui text-secondary truncate'>
            {window_title}
          </span>
          <div className='flex-1' />
          {live_demo_link && (
            <a
              href={live_demo_link}
              target='_blank'
              rel='noreferrer'
              className='text-[11px] font-mono-ui text-ok border border-ok/30 rounded px-2 py-0.5 hover:bg-ok/10 transition-colors'
            >
              live
            </a>
          )}
          {source_code_link ? (
            <a
              href={source_code_link}
              target='_blank'
              rel='noreferrer'
              className='ml-2 flex items-center justify-center w-6 h-6 rounded hover:bg-line/60 transition-colors'
            >
              <img src={github} alt='source code' className='w-3.5 h-3.5 object-contain' />
            </a>
          ) : (
            <span className='ml-2 text-[11px] font-mono-ui text-secondary'>private</span>
          )}
        </div>

        <div className='w-full h-[220px] bg-black-200'>
          <img
            src={image}
            alt={`${name} screenshot`}
            className='w-full h-full object-cover'
          />
        </div>

        <div className='p-5 bg-tertiary'>
          <h3 className='text-white-100 font-bold text-[20px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] leading-relaxed'>{description}</p>

          <div className='mt-4 flex flex-wrap gap-x-3 gap-y-1'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className='text-[12px] font-mono-ui text-secondary'
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>my work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-[640px] leading-[30px]'
        >
          A few things I've built end-to-end, from backend architecture to
          the interface on top. Each card links to the source where it's
          public, and to a live demo where one exists.
        </motion.p>
      </div>

      <div className='mt-16 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
