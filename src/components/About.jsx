import React from "react";
import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
    return (
        <ParallaxTilt
            tiltMaxAngleX={45}
            tiltMaxAngleY={45}
            scale={1}
            transitionSpeed={450}
            className="xs:w-[250px] w-full"
        >
            <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    // options={{ max: 45, scale: 1, speed: 450 }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img
                        src={icon}
                        alt={title}
                        className="w-16 h-16 object-contain"
                    />
                    <h3 className="text-white text-[20px] font-bold text-center">
                        {title}
                    </h3>
                </div>
            </motion.div>
        </ParallaxTilt>
    );
};

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mb-4  text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                I work as a Front-End Developer in Nigeria. I'm fascinated by UI
                effects, animations, and the creation of intuitive, dynamic user
                experiences. Person who is well-organized, a problem solver, and
                an independent worker who pays close attention to detail.
                Manchester United supporter who enjoys outdoor activities and
                watching TV shows.
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
