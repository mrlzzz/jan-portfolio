import React from "react";
import sections from "../data/data.json";
import Section from "./Section";

type MainPanelType = {
    refs: React.RefObject<HTMLDivElement>[];
    isHidden: boolean;
};

const MainPanel = ({ refs, isHidden }: MainPanelType) => {
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
        <div
            className={`${
                isHidden ? "w-full" : "lg:w-4/5"
            } h-full flex flex-col justify-center overflow-x-hidden transition-all duration-300`}
        >
            {dataSections}
        </div>
    );
};

export default MainPanel;
