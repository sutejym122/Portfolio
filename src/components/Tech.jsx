import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <div className='flex flex-wrap gap-3 justify-center max-w-4xl mx-auto'>
      {technologies.map((technology, index) => (
        <motion.div
          variants={fadeIn("up", "spring", index * 0.03, 0.4)}
          key={technology.name}
          className='flex items-center gap-2.5 border border-line rounded-lg px-3.5 py-2.5 bg-tertiary/40 hover:border-signal/40 transition-colors'
        >
          <span className='w-5 h-5 rounded bg-white-100 flex items-center justify-center shrink-0'>
            <img
              src={technology.icon}
              alt={technology.name}
              className='w-3.5 h-3.5 object-contain'
            />
          </span>
          <span className='text-[13px] font-mono-ui text-secondary whitespace-nowrap'>
            {technology.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
