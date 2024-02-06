type SidePanelLinkProps = {
    onClick: (index: number) => void;
    activeLink: number;
    title: string;
    id: number;
};

const SidePanelLink = ({
    onClick,
    activeLink,
    title,
    id,
}: SidePanelLinkProps) => {
    return (
        <a
            className={`${
                activeLink === id ? "underline underline-offset-4 " : " "
            } cursor-pointer hover:brightness-150 transition-all`}
            onClick={() => {
                onClick(id);
            }}
        >
            {title}
        </a>
    );
};

export default SidePanelLink;
