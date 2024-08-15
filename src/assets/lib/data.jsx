import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindicon from '../../assets/icons/tailwindicon.svg'
import mongodbicon from "../../assets/icons/mongoicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import tastyMockup from "../../assets/img/tasty_mockup.webp"
import instorMockup from "../../assets/img/instor_mockup.webp";
import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import profile from "../../assets/img/profile.png";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import { PiReadCvLogoDuotone } from "react-icons/pi";


export const headerIntroData = {
    title: "Hi, I'm Aman",
    subtitle: "Front-end Developer",
    description:
        "I'm Aman, and I'm an Experienced Web Developer with a strong focus on Front-End development. Proficiency in HTML, CSS, JavaScript, ReactJs, Tailwind CSS, C++ with a deep understanding of modern web standards and best practices. As a Web Developer and fervent Tech Enthusiast, I am driven by the exploration of the boundless opportunities within the realm of Web Development. 🌐🚀",
    buttons: [
        {
            name: "Contact",
            label: "Contact me",
            icon: FiMail,
            color: "main-btn",
        },
        {
            name: "My Resume",
            label: "My Resume",
            icon: PiReadCvLogoDuotone,
            color: "secondary-btn",
        },
    ],
    profilepicture: profile,
};

export const projectsData = [
    {
        title: "Tasty App",
        description:
            "A recipe app that we built as a team with React and the MealDB API. I was the front-end developer and programmed features like voice search or print to PDF. The design was created with Figma. The website is responsive and mobile-optimized.",
        technologies: [
            { name: "Html", icon: htmlicon },
            { name: "CSS", icon: cssicon },
            { name: "JavaScript", icon: javascripticon },
            { name: "REST Api", icon: apiicon },
            { name: "React", icon: reacticon },
            { name: "Figma", icon: figmaicon },
            { name: "Canva", icon: canvaicon },
        ],
        image: tastyMockup,
        deploymenturl: "",
        githuburl: "",
        githubicon: FiGithub,
        deploymenticon: FiLink,
        colors: {
            main: "main-btn",
            second: "secondary-btn",
            icon: "white",
            projectcolor: "#70B9BE",
        },
    },
    {
        title: "Silentmoon",
        description:
            "A yoga and meditation app that we built as a team with React, MongoDB, Express and Node.js. My task as a gitmaster and backend developer was to program the backend with connection using a restful API and to model the database in MongoDB.",
        technologies: [
            { name: "Html", icon: htmlicon },
            { name: "CSS", icon: cssicon },
            { name: "JavaScript", icon: javascripticon },
            { name: "React", icon: reacticon },
            { name: "Axios", icon: axiosicon },
            { name: "MongoDB", icon: mongodbicon },
            { name: "Node.js", icon: nodejsicon },
            { name: "Figma", icon: figmaicon },
        ],
        image: silentmoonMockup,
        deploymenturl: "",
        githuburl:
            "",
        githubicon: FiGithub,
        deploymenticon: FiLink,
        colors: {
            main: "main-btn",
            second: "secondary-btn",
            icon: "white",
            projectcolor: "#FFD5BD",
        },
    },
    {
        title: "Furniture Organizer",
        description:
            "A furniture organizer app that we programmed as a duo team with React, MongoDB, Express and Node.js. As a gitmaster, I took over the connection of the frontend to the backend and the database modeling. The app is responsive and mobile-optimized.",
        technologies: [
            { name: "Html", icon: htmlicon },
            { name: "CSS", icon: cssicon },
            { name: "JavaScript", icon: javascripticon },
            { name: "React", icon: reacticon },
            { name: "Axios", icon: axiosicon },
            { name: "MongoDB", icon: mongodbicon },
            { name: "Node.js", icon: nodejsicon },
            { name: "Figma", icon: figmaicon },
        ],
        image: instorMockup,
        deploymenturl: "",
        githuburl: "",
        githubicon: FiGithub,
        deploymenticon: FiLink,
        colors: {
            main: "main-btn",
            second: "secondary-btn",
            icon: "white",
            projectcolor: "#E3964A",
        },
    },
];

export const liveTickerData = {
    content: "More Projects on Github",
};

export const skillsDataWeb = [
    {
        skillsTitle: "WebDevelopment",
        skills: [
            {
                title: "HTML",
                hash: "#html",
                icon: htmlicon,
                color: "#F1662A",
            },
            {
                title: "CSS",
                hash: "#CSS",
                icon: cssicon,
                color: "#1572B6",
            },
            {
                title: "JavaScript",
                hash: "#JavaScript",
                icon: javascripticon,
                color: "#F7DF1E",
            },
            {
                title: "React",
                hash: "#React",
                icon: reacticon,
                color: "#61DAFB",
            },
            {
                title: "Next.js",
                hash: "#Next.js",
                icon: [nextjsicon, nextjsiconwhite],
                color: ["#000000", "#FFFFFF"],
            },
            {
                title: "Node.js",
                hash: "#Node.js",
                icon: nodejsicon,
                color: "#339933",
            },
            {
                title: "Tailwind",
                hash: "#Tailwind",
                icon: tailwindicon,
                color: "#38B2AC",
            },
            {
                title: "MongoDB",
                hash: "#MongoDB",
                icon: mongodbicon,
                color: "#449C45",
            },
            {
                title: "SASS/SCSS",
                hash: "#SASS/SCSS",
                icon: sassscssicon,
                color: "#CC6699",
            },
        ],
    },
];


export const navLinks = [
    { en: "Home", hash: "#home", icon: GoHome },
    { en: "Skills", hash: "#skills", icon: GoStack },
    { en: "Projects", hash: "#projects", icon: GoProject },
    { en: "About me", hash: "#about-me", icon: GoPerson },
    { en: "Contact", hash: "#contact", icon: GoMail },
];

export const sideBarRightMail = {
    link: "mailto:amank0259@gmail.com",
    text: "amank0259@gmail.com",
};

export const sideBarLeftSocials = [
    {
        link: "https://www.linkedin.com/in/amank0259",
        icon: FiLinkedin,
        altimgname: "linkedin",
    },
    {
        link: "https://github.com/amank0259",
        icon: FiGithub,
        altimgname: "github",
    },
    {
        link: "mailto:amank0259@gmail.com",
        icon: FiMail,
        altimgname: "mail",
    },
];

export const quotesData = [
    {
        en: `"The secret to getting ahead is getting started. The secret to getting started is breaking your complex, overwhelming tasks into small manageable tasks, and then starting on the first one."`,
        author: "- Mark Twain",
    },
    {
        en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
    },
];

export const aboutMeData = {
    title: "About me",
    description: "A few code snippets about me",
    paragraphs: [
        {
            title: "The Circuits of My Heart",
            description:
                "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
            icon: hardwareicon,
        },
        {
            title: "On the Fast Lane of Life",
            description:
                "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
        },
        {
            title: "The Joy of Discovery as a Life Motto",
            description:
                "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
        },
    ],
};

export const contactData = {
    title: "Contact",
    description: "Write me a message and I will get back to you.",
    inputfields: [
        {
            name: "name",
            placeholder: "Your Name",

            type: "text",
            validation: "Please fill in your name",
            pattern: "{2}",
        },
        {
            name: "email",
            placeholder:
                "Your E-Mail",
            type: "email",
            validation:
                "Please fill in your email",
            pattern: "[@]{4}",
        },
        {
            name: "subject",
            placeholder:
                "Your Subject",
            type: "text",
            validation:
                "Please fill in your subject",
            pattern: "{10}",
        },
    ],
    textarea: {
        placeholder:
            "Your Message",
        name: "message",
        rows: 10,
        validation:
            "Please fill in your message",
        pattern: "{10}",
    },
    button: {
        value:
            "Send",
    },
    icon: FiMail,
    iconcolor: "#FFFFFF",
    colors: {
        main: "main-btn",
        second: "secondary-btn",
        icon: "white",
    },
    privacyOptIn: {
        checkbox:
            "I agree that Admin may use my personal data (name and e-mail address) to contact me.",
        description:
            "By submitting this request, you acknowledge that you have read the Private Policy",
    },
};

export const toastMessages = {
    loadingProject:
        " The live demo will open shortly. Starting servers...",
    successEmailSent:
        " Thank you for your email. I will get back to you as soon as possible",
    failedEmailSent:
        " Unfortunately the sending of your email did not work. Please try again later",
    failedValidationName:
        "Please fill in your name",
};

export const buttonLabels = {
    language:
        "EN",
};

export const directionStyles = {
    "outer-right-to-inner-left": {
        marginRight: "4rem",
    },
    "outer-left-to-inner-right": {
        marginLeft: "4rem",
        transform: "scaleX(-1)",
    },
    "inner-right-to-middle": {
        width: "100%",
        transform: "scaleY(1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    "inner-left-to-middle": {
        width: "100%",
        transform: "scaleX(-1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    "middle-to-inner-right": {
        width: "100%",
        transform: "scale(1,-1)",
    },
    "middle-to-inner-left": {
        width: "100%",
        transform: "scale(-1,-1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    middle: {
        width: "100%",
        transform: "scaleX(-1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
};

export const heightStyles = {
    small: {
        heights: ["25rem", "15rem"],
    },
    middle: {
        heights: ["35rem", "25rem"],
    },
    large: {
        heights: ["45rem", "35rem"],
    },
    extraLarge: {
        heights: ["55rem", "45rem"],
    },
};

export const spaceStyles = {
    "outer-right-to-inner-left": {
        marginTop: "-6rem",
        width: "100%",
    },
    "outer-left-to-inner-right": {
        marginTop: "-6rem",
        width: "100%",
    },
    "inner-right-to-middle": {
        marginTop: "-20rem",
        width: "50%",
        zIndex: "-10",
    },
    "inner-left-to-middle": {
        marginTop: "-10rem",
        width: "50%",
        zIndex: "-10",
    },
    "middle-to-inner-right": {
        width: "75%",
    },
    "middle-to-inner-left": {
        marginTop: "-2.5rem",
        width: "50%",
    },
    middle: {
        marginTop: "-2.5rem",
        width: "0%",
        display: "none",
    },
};

export const widthStyles = {
    "outer-right-to-inner-left": {
        widths: ["74.45%", "74.45%"],
    },
    "outer-left-to-inner-right": {
        widths: ["75%", "75%"],
    },
    "inner-right-to-middle": {
        widths: ["50.1%", "49%"],
    },
    "inner-left-to-middle": {
        widths: ["50.1%", "49%"],
    },
    "middle-to-inner-right": {
        widths: ["33.4%", "50.03%"],
    },
    "middle-to-inner-left": {
        widths: ["50.1%", "49%"],
    },
    middle: {
        widths: ["0%", "0%"],
    },
};
