import sections from "../data/data.json";
import Section from "./Section";

const MainPanel = () => {
    const dataSections = sections.map((e, idx) => {
        return <Section key={idx} title={e.title} content={e.content} />;
    });

    return <div className="lg:w-4/5">{dataSections}</div>;
};

export default MainPanel;
