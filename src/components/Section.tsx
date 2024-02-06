import { motion } from "framer-motion";

type SectionType = {
    title: string;
    content: string;
    sectionRef: React.RefObject<HTMLDivElement>;
};

const Section = ({ title, content, sectionRef }: SectionType) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
            ref={sectionRef}
            className=" lg:h-[80vh] border border-white/40 first:mt-20 mt-10 last:mb-10 p-5 lg:my-10 mx-5 flex flex-col lg:items-center lg:justify-center"
        >
            <div className="flex flex-col gap-6 justify-evenly lg:text-center">
                <h1 className="font-semibold text-xl lg:text-5xl text-white/70 text-center">
                    {title}
                </h1>
                <p className="max-w-3xl lg:text-2xl text-pretty">{content}</p>
            </div>
        </motion.div>
    );
};

export default Section;
