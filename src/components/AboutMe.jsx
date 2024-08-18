import React, { useRef } from "react";
import me from "../assets/img/me.webp";
import { aboutMeData } from "../lib/data";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useScroll, useTransform } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSectionInView } from "../lib/hooks";

const AboutMe = () => {
    const { ref } = useSectionInView("About me");
    const animationReference = useRef(null);
    const { scrollYProgress } = useScroll({
        target: animationReference,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const paragraphs = aboutMeData.paragraphs;

    return (
        <>
            <section className="about-me relative mt-16 " id="about-me" ref={ref}>
                <div className="title-container flex flex-col gap-6 justify-center items-center p-32 w-1/2 max-lg:w-full max-lg:p-16 max-lg:items-start">
                    <motion.div
                        ref={animationReference}
                        style={{
                            scale: scaleProgess,
                            opacity: opacityProgess,
                            textAlign: "left",
                        }}
                    >
                        <p className="text-[--black] mb-6 text-center">
                            <span className="text-orange">&lt;</span>
                            {aboutMeData.title}
                            <span className="text-orange">/&gt;</span>
                        </p>

                        <h2 className="text-[--black] text-center max-lg:text-left break-words">
                            {aboutMeData.description}
                        </h2>
                    </motion.div>
                </div>
                <div className="flex flex-row justify-center gap-6 items-center pl-32 pr-32 mb-16  max-lg:flex-col max-lg:p-16 min-[1921px]:px-[45rem] min-[1921px]:mb-48">
                    <article className="pl-60 max-lg:p-0">
                        <img src={me} alt={me} />
                    </article>
                    <Swiper
                        spaceBetween={100}
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        // onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="w-1/2 pt-32 relative z-2 pr-20 pb-32 pl-20 max-lg:w-full max-lg:pt-16 max-lg:pb-16 max-lg:pl-0 max-lg:pr-0 min-[1921px]:w-1/2"
                    >
                        {paragraphs.map((paragraph, index) => (
                            <SwiperSlide
                                className="bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-24 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-500 transition-all text-left max-lg:p-10 cursor-grab"
                                key={index}
                            >
                                <div className="flex gap-6 flex-row justify-start items-center max-lg:flex-col max-lg:justify-center max-lg:text-center ">
                                    <div>
                                        <img
                                            src={paragraph.icon}
                                            alt={paragraph.icon}
                                            className="w-24"
                                        />
                                    </div>
                                    <div>
                                        <div>
                                            <h2>{paragraph.title}</h2>
                                        </div>
                                        <div>
                                            <h4 className="text-gray-500">{paragraph.subtitle}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-10 max-lg:flex-col">
                                    <div className="flex flex-col gap-4 items-center justify-between -mt-10 -mb-10 max-lg:flex-row max-lg:m-0">
                                        <p className="text-white">
                                            <span className="text-orange">&lt;</span>{paragraph.from}
                                            <span className="text-orange">/&gt;</span>
                                        </p>
                                        <div className="flex justify-between items-center w-1 h-[100%] max-lg:flex-row max-lg:w-[10rem]  max-lg:bg-lightblue">
                                            <div></div>
                                            <div className="w-[0.5rem] bg-[--lightblue] h-[100%] max-lg:w-10  max-lg:bg-lightblue max-lg:h-[0.25rem]"></div>
                                            <div></div>
                                        </div>
                                        <p className="text-white">
                                            <span className="text-orange">&lt;</span>{paragraph.to}
                                            <span className="text-orange">/&gt;</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-white text-4xl">
                                            {paragraph.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default AboutMe;