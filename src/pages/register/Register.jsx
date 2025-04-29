import React, { useState } from "react";

// Sample data
const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const divisions = {
    Dhaka: ["Dhaka", "Gazipur", "Narayanganj", "Tangail"],
    Chattogram: ["Chattogram", "Cox's Bazar", "Rangamati"],
    Khulna: ["Khulna", "Jessore", "Satkhira"],
    Rajshahi: ["Rajshahi", "Natore", "Pabna"],
    Barishal: ["Barishal", "Bhola", "Patuakhali"],
    Sylhet: ["Sylhet", "Moulvibazar", "Habiganj"],
    Rangpur: ["Rangpur", "Dinajpur", "Kurigram"],
    Mymensingh: ["Mymensingh", "Netrokona", "Jamalpur"],
};

const Register = () => {
    const [activeTab, setActiveTab] = useState("donor");
    const [selectedDivision, setSelectedDivision] = useState("");
    const districts = selectedDivision ? divisions[selectedDivision] : [];

    const renderDonorForm = () => (
        <form className="space-y-4">
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered w-full"
                />
                <input
                    type="text"
                    placeholder="Gender"
                    className="input input-bordered w-full"
                />
                <input
                    type="date"
                    placeholder="Date of Birth"
                    className="input input-bordered w-full"
                />
                <input
                    type="number"
                    placeholder="Weight (kg)"
                    className="input input-bordered w-full"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="select select-bordered w-full">
                    <option disabled selected>
                        Select Blood Group
                    </option>
                    {bloodGroups.map((group) => (
                        <option key={group}>{group}</option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Identity Number"
                    className="input input-bordered w-full"
                />
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full"
                />
                <input
                    type="text"
                    placeholder="Mobile Number"
                    className="input input-bordered w-full"
                />
                <select
                    className="select select-bordered w-full"
                    onChange={(e) => setSelectedDivision(e.target.value)}
                >
                    <option disabled selected>
                        Select Division
                    </option>
                    {Object.keys(divisions).map((div) => (
                        <option key={div}>{div}</option>
                    ))}
                </select>
                <select className="select select-bordered w-full">
                    <option disabled selected>
                        Select District
                    </option>
                    {districts.map((dist) => (
                        <option key={dist}>{dist}</option>
                    ))}
                </select>
            </div>

            <input
                type="text"
                placeholder="Detailed Address"
                className="input input-bordered w-full"
            />

            {/* Emergency */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Emergency Contact Name"
                    className="input input-bordered w-full"
                />
                <input
                    type="text"
                    placeholder="Emergency Contact Number"
                    className="input input-bordered w-full"
                />
            </div>

            <button className="btn bg-red-500 text-white w-full">
                Register as Donor
            </button>
        </form>
    );

    const renderVolunteerForm = () => (
        <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered w-full"
                />
                <select className="select select-bordered w-full">
                    <option disabled selected>
                        Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
                <input
                    type="date"
                    placeholder="Date of Birth"
                    className="input input-bordered w-full"
                />
                <input
                    type="tel"
                    placeholder="Phone Number"
                    className="input input-bordered w-full"
                />
            </div>

            <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
            />
            <input
                type="text"
                placeholder="Present Address"
                className="input input-bordered w-full"
            />
            <input
                type="text"
                placeholder="Area of Interest (e.g. Campaign, Tech Support)"
                className="input input-bordered w-full"
            />
            <input
                type="text"
                placeholder="Skills (Optional)"
                className="input input-bordered w-full"
            />

            <select className="select select-bordered w-full">
                <option disabled selected>
                    Availability
                </option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>On-call</option>
            </select>

            <label className="label cursor-pointer">
                <span className="label-text">
                    I agree to the terms & conditions
                </span>
                <input
                    type="checkbox"
                    className="checkbox checkbox-primary ml-2"
                />
            </label>

            <button className="btn bg-red-500 text-white w-full">
                Register as Volunteer
            </button>
        </form>
    );

    const renderOrganizationForm = () => (
        <form className="space-y-4">
            {/* Organization Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Organization Name"
                    className="input input-bordered w-full"
                />
                <input
                    type="text"
                    placeholder="Type (e.g. Hospital, NGO, etc.)"
                    className="input input-bordered w-full"
                />
                <input
                    type="text"
                    placeholder="License / ID No"
                    className="input input-bordered w-full"
                />
                <input
                    type="date"
                    placeholder="Establishment Date"
                    className="input input-bordered w-full"
                />
            </div>

            <input
                type="url"
                placeholder="Website (optional)"
                className="input input-bordered w-full"
            />

            {/* Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="select select-bordered w-full">
                    <option disabled selected>
                        Select Division
                    </option>
                    {Object.keys(divisions).map((div) => (
                        <option key={div}>{div}</option>
                    ))}
                </select>
                <select className="select select-bordered w-full">
                    <option disabled selected>
                        Select District
                    </option>
                    {/* You can populate dynamically based on division if needed */}
                </select>
            </div>
            <input
                type="text"
                placeholder="Full Address"
                className="input input-bordered w-full"
            />

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="email"
                    placeholder="Email Address"
                    className="input input-bordered w-full"
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    className="input input-bordered w-full"
                />
                <input
                    type="text"
                    placeholder="Contact Person Name"
                    className="input input-bordered w-full"
                />
                <input
                    type="text"
                    placeholder="Designation"
                    className="input input-bordered w-full"
                />
            </div>

            <button className="btn bg-red-500 text-white w-full">
                Register Organization
            </button>
        </form>
    );

    const renderForm = () => {
        switch (activeTab) {
            case "donor":
                return renderDonorForm();
            case "volunteer":
                return renderVolunteerForm();
            case "organization":
                return renderOrganizationForm();
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-base-100 py-5 md:py-8 px-4">
            <div className="max-w-3xl mx-auto bg-base-200 p-8 rounded-xl shadow-xl">
                <h2 className="text-3xl font-bold text-center mb-6 text-[#f64245]">
                    Register
                </h2>

                <div className="tabs tabs-boxed justify-center mb-8 flex-wrap">
                    {["donor", "volunteer", "organization"].map((tab) => (
                        <a
                            key={tab}
                            className={`tab ${
                                activeTab === tab
                                    ? "tab-active bg-[#f64245] text-white rounded-full py-0"
                                    : ""
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </a>
                    ))}
                </div>

                {renderForm()}
            </div>
        </div>
    );
};

export default Register;
