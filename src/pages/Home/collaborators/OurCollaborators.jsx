import ColabCard from "../../../components/colabCard/ColabCard";

const OurCollaborators = () => {
    return (
        <div className="my-16 px-5 max-w-6xl mx-auto">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-[#f64245] mb-3">
                    Our Collaborators
                </h1>
                <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                    We are proud to partner with dedicated organizations and individuals 
                    who share our mission to save lives through blood donation.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
                <ColabCard
                    image="https://cdn-icons-png.flaticon.com/128/179/179571.png"
                    text="DK Hospital"
                />
                <ColabCard
                    image="https://cdn-icons-png.flaticon.com/128/2847/2847965.png"
                    text="UniDrug"
                />
                <ColabCard
                    image="https://cdn-icons-png.flaticon.com/128/2382/2382461.png"
                    text="Soft Cardiac"
                />
            </div>
        </div>
    );
};

export default OurCollaborators;
