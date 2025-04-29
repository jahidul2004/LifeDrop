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
        </div>
    );
};

export default Home;