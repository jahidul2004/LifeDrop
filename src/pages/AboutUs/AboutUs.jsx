import React from "react";
import { CiCircleMore } from "react-icons/ci";

const AboutUs = () => {
    return (
        <div className="py-5 md:py-12 bg-base-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left: Image or Animation */}
                    <div className="w-full">
                        <img
                            src="https://i.ibb.co.com/DDrvTg93/istockphoto-1319068178-612x612.jpg"
                            alt="About Life Drop"
                            className="w-full rounded-2xl shadow-lg border-2 border-error border-dashed"
                        />
                    </div>

                    {/* Right: Text Content */}
                    <div>
                        <h2 className="text-4xl font-bold text-[#f64245] mb-4">
                            About Life Drop
                        </h2>
                        <p className="text-base-content text-lg mb-4">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Consequuntur reprehenderit provident
                            voluptates cum vitae asperiores perferendis quae
                            libero beatae magnam, ab rem. Iusto magnam dicta
                            molestiae laborum repudiandae?
                        </p>
                        <p className="text-base-content text-lg mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Temporibus facere labore nulla quod asperiores
                            quidem doloremque saepe perspiciatis hic obcaecati
                            reiciendis soluta, amet, ullam exercitationem
                            repellat.
                        </p>

                        <div className="mt-6 w-full">
                            <button className="btn btn-error w-full md:btn-wide btn-soft text-[#f64245]">
                                Learn More
                                <CiCircleMore />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Optional Section Below */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold text-[#f64245] mb-2">
                        Our Mission
                    </h3>
                    <p className="text-base-content text-md max-w-3xl mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea vero architecto ipsum eum distinctio eveniet sequi
                        tenetur? Laboriosam, accusamus saepe. Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Saepe, alias?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
