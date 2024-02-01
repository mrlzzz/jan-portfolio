import { useEffect, useState } from "react";

type SidePanelType = {
    refs: React.RefObject<HTMLElement>[];
};

const SidePanel = ({ refs }: SidePanelType) => {
    const [activeLink, setActiveLink] = useState(0);
    const [observerActive, setObserverActive] = useState(true);

    const handleNavClick = (index: number) => {
        setObserverActive(false);
        refs[index].current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
        setActiveLink(index);

        setTimeout(() => {
            setObserverActive(true);
        }, 1000);
    };

    useEffect(() => {
        if (!observerActive) {
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
    }, [refs, observerActive]);

    return (
        <div className="lg:w-1/5 hidden lg:flex bg-black/20">
            <div className="h-screen fixed w-1/5 justify-center flex items-center border-r border-white/40 shadow-lg">
                <div className="flex flex-col text-2xl gap-2 text-center">
                    <a
                        className={`${
                            activeLink === 0
                                ? "underline underline-offset-4 "
                                : " "
                        } cursor-pointer hover:brightness-150 transition-all`}
                        onClick={() => {
                            handleNavClick(0);
                        }}
                    >
                        Chapter I
                    </a>
                    <a
                        className={`${
                            activeLink === 1
                                ? "underline underline-offset-4 "
                                : " "
                        } cursor-pointer hover:brightness-150 transition-all`}
                        onClick={() => {
                            handleNavClick(1);
                        }}
                    >
                        Chapter II
                    </a>
                    <a
                        className={`${
                            activeLink === 2
                                ? "underline underline-offset-4 "
                                : " "
                        } cursor-pointer hover:brightness-150 transition-all`}
                        onClick={() => {
                            handleNavClick(2);
                        }}
                    >
                        Chapter III
                    </a>
                    <a
                        className={`${
                            activeLink === 3
                                ? "underline underline-offset-4 "
                                : " "
                        } cursor-pointer hover:brightness-150 transition-all`}
                        onClick={() => {
                            handleNavClick(3);
                        }}
                    >
                        Chapter IV
                    </a>
                    <a
                        className={`${
                            activeLink === 4
                                ? "underline underline-offset-4 "
                                : " "
                        } cursor-pointer hover:brightness-150 transition-all`}
                        onClick={() => {
                            handleNavClick(4);
                        }}
                    >
                        Chapter V
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SidePanel;
