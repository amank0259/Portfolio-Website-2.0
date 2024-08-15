import React, { useRef } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import { skillsDataWeb } from "../assets/lib/data";
import { useTheme } from "../contexts/ThemeContext";
import SkillSection from "../ui/SkillSection";
import RadialGradient from "../ui/RadialGradient";
import { motion, useScroll, useTransform } from "framer-motion";

const TechStack = () => {
    const { ref } = useSectionInView("Skills");
    const { theme } = useTheme();
    const animationReference = useRef(null);
    const { scrollYProgress } = useScroll({
        target: animationReference,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <>
            <section
                className="relative tech-stack max-lg:p-16 "
                id="skills"
                ref={ref}
            >
                <RadialGradient
                    scale="scale-y-[3]"
                    opacity={theme === "light" ? "opacity-30" : "opacity-30"}
                    position="top-[55rem]"
                />
                <div className="title-container flex flex-col justify-center items-center p-12 md:p-16 w-full gap-6 min-[1921px]:px-[55rem] max-lg:p-0  max-lg:w-full max-lg:flex max-lg:items-center max-lg:py-0 ">
                    <motion.div
                        ref={animationReference}
                        style={{
                            scale: scaleProgess,
                            opacity: opacityProgess,
                        }}
                    >
                        <p className="font-black mb-6 flex items-center justify-center">
                            <span className="text-[--orange]">&lt;</span>Skills
                            <span className="text-[--orange]">/&gt;</span>
                        </p>
                        <h2>
                            My TechStack and Skills
                        </h2>
                    </motion.div>
                </div>
                <div className="flex gap-40 justify-center max-lg:flex-col">
                    <div className="w-4/6 max-lg:w-full">
                        <SkillSection skillsData={skillsDataWeb} theme={theme} />
                    </div>
                </div>
            </section>
            <ReactTooltip
                place="top"
                id="my-tooltip"
                style={{
                    fontSize: "1.5rem",
                    zIndex: 10,
                    backgroundColor: "var(--orange)",
                }}
            />
        </>
    );
};

export default TechStack;