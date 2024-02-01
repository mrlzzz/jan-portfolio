import { useRef } from "react";
import MainPanel from "./components/MainPanel";
import SidePanel from "./components/SidePanel";

const App = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const refsArray = [ref1, ref2, ref3, ref4, ref5];
    return (
        <div className="flex w-full">
            <SidePanel refs={refsArray}></SidePanel>
            <MainPanel refs={refsArray}></MainPanel>
        </div>
    );
};

export default App;
