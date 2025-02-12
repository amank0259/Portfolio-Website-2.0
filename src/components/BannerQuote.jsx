import React from "react";
import bannerBg from "../assets/img/bannerbg.webp";
import { quotesData } from "../lib/data";
import { useQuoteAnimation } from "../lib/useQuoteAnimation";

const BannerQuote = ({
    style,
    containerType,
}) => {
    useQuoteAnimation(`.${containerType}-container h2`);

    return style === "withBG" ? (
        <>
            <section className="quote-banner relative overflow-x-clip z-[1]">
                <div
                    className="quote-outer-container bg-[--darkblue] h-[50vh] -rotate-3 flex justify-center items-center scale-110 max-lg:h-full min-[1921px]:px-96"
                    style={{
                        backgroundImage: `url(${bannerBg})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="quote-container rotate-3 flex items-center flex-col justify-center p-56 max-lg:p-20 ">
                        <h2 className="text-[--white] text-center text-8xl mb-20 mt-20 max-lg:text-[3rem] max-lg:mb-10 max-lg:leading-tight">
                            {quotesData[0].en}
                        </h2>
                        <p className="text-[--grey]">{quotesData[0].author}</p>
                    </div>
                </div>
            </section>
        </>
    ) : (
        <>
            <section className="quote-banner relative overflow-x-clip min-[1921px]:px-96">
                <div className="h-[50vh] -rotate-3 flex justify-center items-center scale-110">
                    <div className="statement-container rotate-3 flex items-center flex-col justify-center p-56 max-lg:p-20">
                        <h2 className="text-[--black] text-center text-9xl mb-20 mt-20 max-lg:text-[3rem] max-lg:mb-10 max-lg:leading-tight">
                            {quotesData[1].en}
                        </h2>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BannerQuote;
