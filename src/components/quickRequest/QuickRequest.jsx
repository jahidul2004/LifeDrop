import { FaHeartbeat } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const QuickRequest = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/emergency");
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-5 right-5 z-50 bg-[#f64245] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
            title="Emergency Blood Request"
        >
            <FaHeartbeat className="text-xl animate-pulse" />
            <span className="hidden md:inline font-semibold">Emergency</span>
        </button>
    );
};

export default QuickRequest;
