import MainPanel from "./components/MainPanel";
import SidePanel from "./components/SidePanel";

const App = () => {
    return (
        <div className="flex w-full h-screen justify-end">
            <SidePanel></SidePanel>
            <MainPanel></MainPanel>
        </div>
    );
};

export default App;
