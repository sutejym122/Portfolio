import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[140px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start`}
      >
        <div className='flex items-center gap-2 mb-6 border border-line rounded-full pl-2 pr-4 py-1.5 bg-tertiary/60 w-fit'>
          <span className='relative flex h-2 w-2'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-ok opacity-60' />
            <span className='relative inline-flex rounded-full h-2 w-2 bg-ok' />
          </span>
          <span className='text-[13px] font-mono-ui text-secondary'>
            open to full-time software engineering roles
          </span>
        </div>

        <h1 className={`${styles.heroHeadText}`}>
          Hi, I'm <span className='text-signal'>Sutej</span>
        </h1>
        <p className={`${styles.heroSubText} mt-3`}>
          I build backend services, full-stack web apps, and native iOS
          apps — <br className='sm:block hidden' />
          the kind of systems teams rely on after launch, not just at demo time.
        </p>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-2 border-line flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-signal mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
