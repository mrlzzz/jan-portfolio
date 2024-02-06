import { useRef, useState } from "react";
import MainPanel from "./components/MainPanel";
import SidePanel from "./components/SidePanel";
import MobileNavbar from "./components/MobileNavbar";

const App = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [activeLink, setActiveLink] = useState(0);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const refsArray = [ref1, ref2, ref3, ref4, ref5];

    return (
        <div className={`flex w-full`}>
            <SidePanel
                refs={refsArray}
                isHidden={isHidden}
                setIsHidden={setIsHidden}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
            ></SidePanel>
            <MobileNavbar
                refs={refsArray}
                isHidden={isHidden}
                setIsHidden={setIsHidden}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
            />
            <MainPanel refs={refsArray} isHidden={isHidden}></MainPanel>
        </div>
    );
};

export default App;
