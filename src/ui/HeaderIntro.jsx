import React from "react";
import Button from "../ui/Button";
import RadialGradient from "./RadialGradient";
import { headerIntroData } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import { BsMouse } from "react-icons/bs";

const HeaderIntro = () => {
    const { ref } = useSectionInView("Home", 0.5);

    return (
        <section
            className="hero flex flex-col justify-center gap-10 items-center h-full max-lg:h-full max-lg:gap-6"
            ref={ref}
            id="home"
        >
            <RadialGradient scale="scale-y-125" opacity="opacity-30" />
            <img
                src={headerIntroData.profilepicture}
                alt={headerIntroData.profilepicture}
                className="w-1/6 h-[45%] drop-shadow-2xl rounded-full shadow-2xl object-cover avatar-img max-lg:w-3/4"
            />
            <h1>
                {headerIntroData.title}
                <span className="wave text-7xl">&#128075;&#127997;</span>
            </h1>
            <h2>{headerIntroData.subtitle}</h2>
            <p className="w-1/2 text-center max-lg:hidden">
                {headerIntroData.description}
            </p>

            <div className="button-container flex items-center justify-center mr-8 gap-10 mb-12 max-lg:flex-col max-lg:items-center">
                {headerIntroData.buttons.map((button, index, resumeLink) => (
                    <Button
                        key={index}
                        label={button.label}
                        iconSVG={button.icon}
                        link={button.link}
                        // link={`#${button.name.toLocaleLowerCase()}`}
                        buttoncolor={button.color}
                    />
                ))}
            </div>
            <div className="scroll-down-container animate-bounce flex gap-6">
                <BsMouse className="text-[2.6rem]" />
            </div>
        </section>
    );
};

export default HeaderIntro;