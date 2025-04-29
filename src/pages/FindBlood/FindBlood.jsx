import React from "react";
import { IoSearch } from "react-icons/io5";

const FindBlood = () => {
    return (
        <div className="py-12 bg-base-100">
            <div className="max-w-6xl mx-auto px-4">
                {/* Title Section */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-[#f64245] mb-2">
                        Find Blood
                    </h2>
                    <p className="text-base-content text-lg">
                        Search for available blood donors near you instantly.
                    </p>
                </div>

                {/* Search Form Section */}
                <div className="bg-base-200 p-6 rounded-xl shadow-md">
                    <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Blood Group Dropdown */}
                        <select className="select select-bordered w-full">
                            <option disabled selected>
                                Select Blood Group
                            </option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                            <option>O+</option>
                            <option>O-</option>
                        </select>

                        {/* District Input */}
                        <input
                            type="text"
                            placeholder="Enter District"
                            className="input input-bordered w-full"
                        />

                        {/* Search Button */}
                        <button
                            type="submit"
                            className="btn bg-[#f64245] text-white w-full"
                        >
                            Search <IoSearch />
                        </button>
                    </form>
                </div>

                {/* Result Placeholder */}
                <div className="mt-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Search Results:
                    </h3>
                    {/* Replace this block with dynamic results */}
                    <div className="text-base-content">
                        [Blood donor search results will appear here]
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindBlood;
