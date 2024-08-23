import React, { useState, useEffect, useRef } from "react";
import Button from "../ui/Button.jsx";
import axios from "axios";
import { Highlight, themes } from "prism-react-renderer";
import { contactData, toastMessages } from "../lib/data.jsx";
import { useSectionInView } from "../lib/hooks.jsx";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "../contexts/ThemeContext.jsx";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [lastUpdatedField, setLastUpdatedField] = useState(null);
    const [error, setError] = useState(null);
    const { ref } = useSectionInView("Contact");
    const { theme } = useTheme();
    const animationReference = useRef(null);
    const { scrollYProgress } = useScroll({
        target: animationReference,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    const notifySentForm = async (e) => {
        e.preventDefault();
        setError(null);

        const formDataToSend = new FormData(e.currentTarget);
        formDataToSend.append("access_key", "c22292d9-faaa-4876-b391-1e8187a7a6a2");

        try {
            const response = await axios.post("https://api.web3forms.com/submit", formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const data = response.data;

            if (data.success) {
                toast.success(toastMessages.successEmailSent);
                e.target.reset();
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
            } else {
                toast.error(toastMessages.failedEmailSent);
            }
        } catch (error) {
            console.log("Submission Error", error);
            toast.error(toastMessages.failedEmailSent);
            setError("An Error occurred, try again later");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
        setLastUpdatedField(name);
    };

    const handleInputFocus = (fieldName) => {
        setLastUpdatedField(fieldName);
    };

    const wordWrap = (text, maxLineLength, indentation) => {
        const words = text.split(" ");
        let lines = [];
        let currentLine = "";

        words.forEach((word) => {
            if (currentLine.length + word.length <= maxLineLength) {
                currentLine += word + " ";
            } else {
                lines.push(currentLine.trim());
                currentLine = `${indentation}${word} `;
            }
        });

        if (currentLine) {
            lines.push(currentLine.trim());
        }

        return lines.join("\n");
    };

    const [cursorBlink, setCursorBlink] = useState(true);

    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setCursorBlink((prev) => !prev);
        }, 400);

        return () => {
            clearInterval(blinkInterval);
        };
    }, []);

    const codeSnippet = `
import { useState } from "react";

// 🌈 Spreading Stardust: 
// Crafting Cosmic Email 🌌

const [sender, setSender] = "${formData.name}${lastUpdatedField === "name" ? (cursorBlink ? "|" : " ") : ""}🚀";
const [recipient, setRecipient] = "${formData.email}${lastUpdatedField === "email" ? (cursorBlink ? "|" : " ") : ""}📧";
const [subject, setSubject] = \n"${formData.subject}${lastUpdatedField === "subject" ? (cursorBlink ? "|" : " ") : ""}✨";
const [message, setMessage] = 
\`Hello, intrepid traveler! 👋\n
Across the cosmos, a message for you:\n
"${wordWrap(formData.message, 40, " ")}${lastUpdatedField === "message" ? (cursorBlink ? "|" : " ") : ""}"\n
Wishing you stardust dreams,\n
${formData.name}${lastUpdatedField === "name" ? (cursorBlink ? "|" : " ") : ""}
\``;

    return (
        <>
            <section className="contact-container w-full min-[1921px]:px-[55rem] mt-16" id="contact">
                <div className="title-container flex flex-col gap-6 justify-center items-center py-16 max-lg:p-16" ref={ref}>
                    <motion.div
                        ref={animationReference}
                        style={{
                            scale: scaleProgess,
                            opacity: opacityProgess,
                            textAlign: "center",
                        }}
                    >
                        <p className="text-[--black] mb-6">
                            <span className="text-[--orange]">&lt;</span>
                            {contactData.title}
                            <span className="text-[--orange]">/&gt;</span>
                        </p>

                        <h2 className="text-[--black] text-center">
                            {contactData.description}
                        </h2>
                    </motion.div>
                </div>
                <div className="flex flex-row justify-center items-start px-32 pt-32 mb-32 max-lg:flex-col max-lg:p-10">
                    <div className="w-1/2 bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-24 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-500 transition-all quote-outer-container text-left max-lg:hidden cursor-progress">
                        <Highlight
                            code={codeSnippet}
                            language="jsx"
                            theme={themes.nightOwl}
                        >
                            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                <pre className={`${className} text-4xl`} style={style}>
                                    {tokens.map((line, lineIndex) => {
                                        const lineProps = getLineProps({ line, key: lineIndex });
                                        const { key, ...restLineProps } = lineProps; // Extract key and other props

                                        return (
                                            <div key={key} {...restLineProps}>
                                                {line.map((token, tokenIndex) => {
                                                    const tokenProps = getTokenProps({ token, key: tokenIndex });
                                                    const { key, ...restTokenProps } = tokenProps; // Extract key and other props

                                                    return <span {...restTokenProps} key={key} />;
                                                })}
                                            </div>
                                        );
                                    })}
                                </pre>
                            )}
                        </Highlight>
                    </div>
                    <form
                        className="flex flex-col gap-6 justify-center items-center px-32 w-1/2 max-lg:w-full max-lg:p-10"
                        onSubmit={notifySentForm}
                        autoComplete="off"
                    >
                        {contactData.inputfields.map((input, index) => (
                            <input
                                key={index}
                                type={input.type}
                                placeholder={input.placeholder}
                                name={input.name}
                                value={formData[input.name] || ""}
                                required
                                onFocus={() => handleInputFocus(input.name)}
                                onMouseEnter={() => handleInputFocus(input.name)}
                                onChange={handleInputChange}
                                className={`${theme === "dark"
                                    ? "bg-[--blackblue] dark-mode-shadow"
                                    : "bg-[--icewhite] dark-shadow"
                                    }`}
                            />
                        ))}
                        <textarea
                            rows={contactData.textarea.rows}
                            placeholder={contactData.textarea.placeholder}
                            name={contactData.textarea.name}
                            value={formData[contactData.textarea.name] || ""}
                            onFocus={() => handleInputFocus(contactData.textarea.name)}
                            onMouseEnter={() => handleInputFocus(contactData.textarea.name)}
                            onChange={handleInputChange}
                            className={`${theme === "dark"
                                ? "bg-[--blackblue] dark-mode-shadow"
                                : "bg-[--icewhite] dark-shadow"
                                }`}
                        />
                        <Button
                            value={contactData.button.value}
                            iconSVG={contactData.icon}
                            buttoncolor={contactData.colors.main}
                            iconcolor={contactData.colors.icon}
                            type="submit"
                            elementType="input"
                        />
                    </form>
                </div>
            </section>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    );
};

export default Contact;