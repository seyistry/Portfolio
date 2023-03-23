import React from "react";
import { contactLinks } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function Socials() {
    return (
        <div className="flex flex-wrap gap-10 justify-center">
            {contactLinks.map((item, index) => (
                <motion.div
                    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
                    key={item.index}
                    className="flex rounded-full overflow-hidden h-15 w-15 cursor-pointer"
                    style={{ backgroundColor: item.bgColor }}
                >
                    <a href={item.link} target="_blank">
                        <img
                            src={item.icon}
                            alt={item.title}
                            className="h-10 w-10 p-2"
                        />
                    </a>
                </motion.div>
            ))}
        </div>
    );
}

export default SectionWrapper(Socials, "");
