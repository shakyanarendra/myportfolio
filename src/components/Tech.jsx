import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import BallCanvas from "./canvas/Ball"; 

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          What I have learned so far
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          My Skills.
        </h2>
      </motion.div>

      <div className="grid grid-cols-3 justify-center mt-8 lg:mt-12 gap-6 lg:flex lg:flex-row lg:flex-wrap lg:gap-10">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn("right", "spring", index * 0.1, 0.75)}
          >
            <div className="w-24 h-24"> {/* Adjusted size for BallCanvas */}
              <BallCanvas icon={technology.icon} />
            </div>
            <p className="text-center text-white mt-2">{technology.name}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

const WrappedTech = SectionWrapper(Tech, "tech");

export { Tech };
export default WrappedTech;
