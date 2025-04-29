import OurCollaborators from "./collaborators/OurCollaborators";
import Hero from "./hero/Hero";
import OurMission from "./mission/OurMission";

const Home = () => {
    return (
        <div className="w-[95%] md:container mx-auto">
            {/* Hero */}
            <Hero></Hero>
            {/* Hero end */}

            {/* Our mission */}
            <OurMission></OurMission>
            {/* Our mission end */}

            {/* Collaborators */}
            <OurCollaborators></OurCollaborators>
            {/* Collaborators end */}
        </div>
    );
};

export default Home;
