import Lottie from "lottie-react";
import lottieFiles from "../../../assets/lottie/HeroLottie.json";
import { Link } from "react-router-dom";
import { LuDroplets } from "react-icons/lu";

const Hero = () => {
    return (
        <div className="grid grid-cols-2 justify-center items-center">
            {/* Lottie */}
            <div>
                <Lottie animationData={lottieFiles}></Lottie>
            </div>
            {/* Lottie end */}

            {/* Info */}
            <div className="text-right">
                <h1 className="text-3xl md:text-5xl font-bold mb-5">
                    Save Life Donate{" "}
                    <span className="text-[#f64245]">Blood</span>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio ducimus omnis tenetur expedita dicta consequuntur magni
                    tempore temporibus molestiae magnam aperiam, deleniti
                    nostrum, laborum sit nesciunt quas autem dolorem, minima
                    facere aliquid et impedit repellendus incidunt. Vel
                    exercitationem mollitia aperiam. Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Vel, quam?
                </p>
                <Link className="mt-5 btn btn-soft btn-error text-[#f64245]">
                    <LuDroplets />
                    GET BLOOD NOW
                </Link>
            </div>
            {/* Info end */}
        </div>
    );
};

export default Hero;
