type SectionType = {
    title: string;
    content: string;
};

const Section = ({ title, content }: SectionType) => {
    return (
        <section className="h-[75vh] border border-white/40  flex flex-col items-center justify-center">
            <div className="flex flex-col gap-4 justify-evenly text-center">
                <h1 className="font-semibold lg:text-5xl">{title}</h1>
                <p className="max-w-3xl lg:text-2xl">{content}</p>
            </div>
        </section>
    );
};

export default Section;
