import { motion } from "framer-motion";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const steps = [
    {
        id: 1,
        title: "Step 1: Register or Login",
        description: "Create an account or login to request for blood.",
    },
    {
        id: 2,
        title: "Step 2: Fill Request Form",
        description:
            "Provide patient details, location, and required blood group.",
    },
    {
        id: 3,
        title: "Step 3: Submit & Wait",
        description: "Submit the form and wait for a donor to respond.",
    },
];

const HowToGetBlood = () => {
    return (
        <div className="my-20 px-5">
            <div className="mb-14">
                <h1 className="text-4xl font-bold text-center text-[#f64245]">
                    How to Get Blood?
                </h1>
                <p className="text-center text-gray-400 mt-2">
                    Request for blood with 3 easy step.
                </p>
            </div>

            <div className="border-2 md:border-none p-4 rounded border-error border-dashed relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3 }}
                        className="z-10 bg-white shadow-xl rounded-2xl p-6 w-72 border-t-4 border-[#f64245]"
                    >
                        <div className="text-2xl font-semibold text-[#f64245] mb-2">
                            {step.title}
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                    </motion.div>
                ))}

                {/* Line Connector for Desktop */}
                <div className="hidden md:block absolute top-1/2 w-full border-t-2 border-dashed border-[#f64245] z-0"></div>
            </div>

            <div className="flex items-center justify-center w-full mt-14">
                <Link className="btn btn-soft btn-error text-[#f64245]">
                    Request For Blood
                    <FaRegArrowAltCircleRight />
                </Link>
            </div>
        </div>
    );
};

export default HowToGetBlood;
