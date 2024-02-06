import { useAutoAnimate } from "@formkit/auto-animate/react";
import navData from "../data/data.json";
import SidePanelLink from "./SidePanelLink";

type MobileNavbarProps = {
    refs: React.RefObject<HTMLElement>[];
    isHidden: boolean;
    setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
    activeLink: number;
    setActiveLink: React.Dispatch<React.SetStateAction<number>>;
};

const MobileNavbar = ({
    refs,
    isHidden,
    setIsHidden,
    activeLink,
    setActiveLink,
}: MobileNavbarProps) => {
    const [parentAnimate] = useAutoAnimate();

    const handleNavClick = (index: number) => {
        refs[index].current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
        setActiveLink(index);
        setIsHidden(!isHidden);
    };

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
            ref={parentAnimate}
            className="lg:hidden z-10 flex flex-col  items-end w-full bg-[#161616] py-2 fixed  transition-all min-h-12 top-0 border-b border-white/40"
        >
            <button
                onClick={() => {
                    setIsHidden(!isHidden);
                }}
                className=" absolute right-3 top-3"
            >
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
                <svg
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
                </svg>
            </button>
            <div className="absolute top-3 left-3">JG</div>
            {!isHidden ? (
                <div className={`flex flex-col mt-8 p-4 text-right min-w-32`}>
                    {navLinks}
                </div>
            ) : null}
        </div>
    );
};

export default MobileNavbar;
