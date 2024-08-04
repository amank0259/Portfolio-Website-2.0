import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView(sectionName, threshold = 0.75) {
    const isMobile = window.innerWidth <= 1024;
    const { ref, inView } = useInView({
        threshold: isMobile ? 0.1 : threshold,
    });

    useEffect(() => {
        if (inView && Date.now() > 1000) {
        }
    }, [inView, sectionName]);

    return {
        ref,
    };
}


export function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    const updateMousePosition = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);

        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePosition;
}