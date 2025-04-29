const ColabCard = ({ image, text }) => {
    return (
        <div className="flex flex-col items-center justify-center p-6 bg-[#fff4f1] rounded-2xl shadow-md hover:shadow-xl transition duration-300 ease-in-out hover:scale-105">
            <img
                className="w-20 h-20 object-contain mb-4"
                src={image}
                alt={text}
            />
            <h1 className="text-2xl font-semibold text-[#f64245]">{text}</h1>
        </div>
    );
};

export default ColabCard;
