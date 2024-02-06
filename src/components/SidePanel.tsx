import { useEffect, useState } from "react";
import SidePanelLink from "./SidePanelLink";
import navData from "../data/data.json";

type SidePanelType = {
    refs: React.RefObject<HTMLElement>[];
    isHidden: boolean;
    setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
    activeLink: number;
    setActiveLink: React.Dispatch<React.SetStateAction<number>>;
};

const SidePanel = ({
    refs,
    isHidden,
    setIsHidden,
    activeLink,
    setActiveLink,
}: SidePanelType) => {
    const [activeObserver, setActiveObserver] = useState(true);

    const handleNavClick = (index: number) => {
        setActiveObserver(false);
        refs[index].current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
        setActiveLink(index);

        setTimeout(() => {
            setActiveObserver(true);
        }, 1000);
    };

    const toggleHideMenu = () => {
        setIsHidden(!isHidden);
    };

    useEffect(() => {
        if (!activeObserver) {
            return;
        }

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.7,
        };

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = refs.findIndex(
                        (ref) => ref.current === entry.target
                    );
                    if (index !== -1) {
                        setActiveLink(index);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        refs.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [refs, activeObserver, setActiveLink]);

    const navLinks = navData.map((e, idx) => {
        return (
            <SidePanelLink
                key={idx}
                activeLink={activeLink}
                onClick={() => {
                    handleNavClick(idx);
                }}
                title={e.navLink}
                id={idx}
            />
        );
    });
    return (
        <div
            className={`${
                isHidden ? "lg:w-14" : " lg:w-1/5"
            } hidden lg:flex bg-black/20 transition-all duration-300`}
        >
            <div
                className={`h-screen fixed ${
                    isHidden ? "lg:w-14" : "lg:w-1/5"
                } justify-center flex items-center border-r border-white/40 shadow-lg transition-all duration-300`}
            >
                <button
                    onClick={() => {
                        toggleHideMenu();
                    }}
                    className="absolute top-4 right-4 hover:bg-black/20 transition-all"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`${
                            isHidden ? "hidden" : ""
                        } transition-all w-6 h-6`}
                    >
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                    {/* Burger Icon */}
                    <svg
                        className={`w-6 h-6 ${isHidden ? "" : "hidden"}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 6H20M4 12H20M4 18H20"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    {/* X Icon */}
                    {/* <svg
                        className={`w-6 h-6 ${isHidden ? "hidden" : ""}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 18L18 6M6 6L18 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg> */}
                </button>
                <div
                    className={`${
                        isHidden
                            ? "opacity-0"
                            : "opacity-100 delay-300 duration-300"
                    } flex flex-col text-2xl gap-2 transition-all text-center`}
                >
                    {navLinks}
                </div>
            </div>
        </div>
    );
};

export default SidePanel;
