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
            className=" h-[80vh] border border-white/40 my-10 mx-5 flex flex-col items-center justify-center"
        >
            <div className="flex flex-col gap-6 justify-evenly text-center">
                <h1 className="font-semibold lg:text-5xl text-white/70">
                    {title}
                </h1>
                <p className="max-w-3xl lg:text-2xl">{content}</p>
            </div>
        </motion.div>
    );
};

export default Section;
