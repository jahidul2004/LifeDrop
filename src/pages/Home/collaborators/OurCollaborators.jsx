import ColabCard from "../../../components/colabCard/ColabCard";

const OurCollaborators = () => {
    return (
        <div className="my-10 md:my-20">
            <h1 className="text-3xl font-bold text-[#f64245]">
                Our Collaborators
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-10">
                <ColabCard
                    image={
                        "https://cdn-icons-png.flaticon.com/128/179/179571.png"
                    }
                    text={"DK Hospital"}
                ></ColabCard>
                <ColabCard
                    text={"UniDrug"}
                    image={
                        "https://cdn-icons-png.flaticon.com/128/2847/2847965.png"
                    }
                ></ColabCard>
                <ColabCard
                    text={"Soft Cardiac"}
                    image={
                        "https://cdn-icons-png.flaticon.com/128/2382/2382461.png"
                    }
                ></ColabCard>
            </div>
        </div>
    );
};

export default OurCollaborators;
