import OurCollaborators from "./collaborators/OurCollaborators";
import FAQ from "./faq/FAQ";
import Hero from "./hero/Hero";
import HowToGetBlood from "./howToGetBlood/HowToGetBlood";
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

            {/* How to get blood? */}
            <HowToGetBlood></HowToGetBlood>
            {/* How to get blood? end */}

            {/* Collaborators */}
            <OurCollaborators></OurCollaborators>
            {/* Collaborators end */}

            {/* Faq */}
            <FAQ></FAQ>
            {/* Faq end */}
        </div>
    );
};

export default Home;
