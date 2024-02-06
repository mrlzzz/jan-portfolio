type SidePanelLinkProps = {
    onClick: (index: number) => void;
    activeLink: number;
    title: string;
    id: number;
    className?: string;
};

const SidePanelLink = ({
    onClick,
    activeLink,
    title,
    id,
    className,
}: SidePanelLinkProps) => {
    return (
        <a
            className={
                `${
                    activeLink === id ? "underline underline-offset-4 " : " "
                } cursor-pointer hover:brightness-150 transition-all ` +
                className
            }
            onClick={() => {
                onClick(id);
            }}
        >
            {title}
        </a>
    );
};

export default SidePanelLink;
