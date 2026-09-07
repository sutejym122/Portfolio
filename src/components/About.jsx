import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.6)}
    className='group flex-1 min-w-[220px] border border-line rounded-lg p-6 bg-tertiary/40 hover:border-signal/50 transition-colors duration-300'
  >
    <img
      src={icon}
      alt={title}
      className='w-10 h-10 object-contain mb-6 opacity-90 group-hover:opacity-100 transition-opacity'
    />
    <h3 className='text-white-100 text-[16px] font-semibold'>{title}</h3>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-6 text-secondary text-[17px] max-w-[640px] leading-[30px]'
      >
        I'm a software engineer with an M.S. in Computer Science from SUNY
        Binghamton and a B.E. in Computer Science from VTU, working mainly
        across Python, FastAPI/Flask, React, Angular, and native SwiftUI/iOS
        development. My background spans enterprise support and integration
        work at Cognizant, full-stack feature development at Find Me, and
        research engineering on a Django/PostGIS platform at Binghamton
        University. Outside of that, I build full-stack and mobile projects
        end-to-end — an observability platform, an LLM evaluation harness,
        and an AI-assisted iOS fitness app — to keep learning production
        systems design.
      </motion.p>

      <div className='mt-14 flex flex-wrap gap-4'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
