import React from "react";
import sections from "../data/data.json";
import Section from "./Section";

type MainPanelType = {
    refs: React.RefObject<HTMLDivElement>[];
};

const MainPanel = ({ refs }: MainPanelType) => {
    const dataSections = sections.map((e, idx) => {
        return (
            <Section
                sectionRef={refs[idx]}
                key={idx}
                title={e.title}
                content={e.content}
            />
        );
    });

    return (
        <div className="lg:w-4/5 h-full overflow-x-hidden">{dataSections}</div>
    );
};

export default MainPanel;
