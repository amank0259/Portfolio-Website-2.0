import React, { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const RadialGradient = ({ scale, opacity, position, overflow, size }) => {
    const [mouseXPercentage, setMouseXPercentage] = useState(0);
    const [mouseYPercentage, setMouseYPercentage] = useState(0);
    const { theme } = useTheme();

    useEffect(() => {
        const handleMouseMove = (event) => {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const newMouseXPercentage = Math.round((event.pageX / windowWidth) * 100);
            const newMouseYPercentage = Math.round((event.pageY / windowHeight) * 100);

            setMouseXPercentage(newMouseXPercentage);
            setMouseYPercentage(newMouseYPercentage);
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const radialGradientStyle = {
        background: `radial-gradient(at ${mouseXPercentage}% ${mouseYPercentage}%, #cfbb2f,  ${theme === "light" ? "#9daaf2" : "#0c1220"})`,
    };

    return (
        <>
            <div
                className={`radial-gradient-styling absolute ${position} left-0 h-full w-full -z-[1] ${opacity} ${scale} ${overflow}`}
                style={radialGradientStyle}
            ></div>
        </>
    );
};

export default RadialGradient;
