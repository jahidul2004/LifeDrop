const ColabCard = ({ image, text }) => {
    return (
        <div className="flex-col p-8 shadow-xl bg-[#fff4f1] flex items-center justify-center rounded">
            <img className="w-[80px] h-[80px]" src={image} alt="" />
            <h1 className="text-3xl text-[#f64245] mt-4">{text}</h1>
        </div>
    );
};

export default ColabCard;
