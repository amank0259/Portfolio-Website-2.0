import React, { lazy, Suspense } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Layout from '../layout/Layout';
import ThemeSwitch from '../ui/ThemeSwitch';
import { ScrollProgress } from '../ui/ScrollProgress';
import Divider from '../ui/Divider';
import ProjectSlider from './ProjectSlider';

const LazySiteBarLeft = lazy(() => import('../ui/SiteBarLeft'));
const LazyHeaderIntro = lazy(() => import('../ui/HeaderIntro'));
const LazySiteBarRight = lazy(() => import('../ui/SideBarRight'));
const LazyBannerQuote = lazy(() => import('./BannerQuote'));
const LazyTechStack = lazy(() => import('../components/TechStack'));
const LazyRadialGradient = lazy(() => import('../ui/RadialGradient'));
const LazyAboutMe = lazy(() => import('../components/AboutMe'))

const Home = () => {
    const theme = useTheme();

    return (
        <>
            <Layout>
                <ThemeSwitch />
                <header className="h-screen">
                    <ScrollProgress
                        position={"left"}
                        color={"orange"}
                        height={10}
                        smoothness={true}
                    />

                    <Suspense fallback={<div></div>}>
                        <LazySiteBarLeft />
                        <LazyHeaderIntro />
                        <LazySiteBarRight />
                    </Suspense>
                </header>
                <main className="relative">
                    <Suspense fallback={<div></div>}>
                        <LazyBannerQuote style={"withBG"} quoteIndex={0} containerType="quote" />
                        <Divider
                            thickness="0.25rem"
                            direction="outer-right-to-inner-left"
                            color="lightblue"
                            height="small"
                            dividerStyle="solid"
                        />
                        <LazyTechStack />
                        <Divider
                            thickness="0.25rem"
                            direction="inner-right-to-middle"
                            color="lightblue"
                            height="middle"
                            dividerStyle="solid" />

                        <LazyBannerQuote
                            style={"noBg"}
                            quoteIndex={1}
                            containerType="statement" />
                        <Divider
                            thickness="0.25rem"
                            direction="middle"
                            height="large"
                            dividerStyle="solid" />
                        <ProjectSlider />
                        <div className="realtive -mb-24 pb-32 -mt-10">
                            <LazyRadialGradient
                                opacity={theme === "light" ? "opacity-30" : "opacity-30"}
                                scale="scale-y-100"
                                position="-top-24" />
                            <Divider
                                thickness="0.25rem"
                                direction="middle-to-inner-left"
                                color="lightblue"
                                height="middle"
                                dividerStyle="solid" />
                            <LazyAboutMe />
                        </div>
                    </Suspense>
                </main>
            </Layout>
        </>
    );
};

export default Home;