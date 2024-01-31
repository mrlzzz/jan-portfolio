const SidePanel = () => {
    return (
        <div className="lg:w-1/5 hidden lg:flex">
            <div className="h-screen fixed w-1/5 justify-center flex items-center border border-black shadow-lg">
                <div className="flex flex-col text-2xl gap-2 text-center">
                    <a>Chapter I</a>
                    <a>Chapter II</a>
                    <a>Chapter III</a>
                    <a>Chapter IV</a>
                    <a>Chapter V</a>
                </div>
            </div>
        </div>
    );
};

export default SidePanel;
