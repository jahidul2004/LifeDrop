const Emergency = () => {
    return (
        <div className="min-h-screen bg-base-100 py-10 px-4">
            <div className="max-w-2xl mx-auto bg-base-200 p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-2 text-[#f64245]">
                    Welcome Emergency Blood Portal
                </h2>
                <p className="text-center mb-6">
                    Request for blood via this portal if you need blood
                    emergency. Otherwise we cancel your request.
                </p>

                <form className="space-y-6">
                    {/* Patient Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">
                            Patient Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Patient Full Name"
                                className="input input-bordered w-full"
                            />
                            <input
                                type="number"
                                placeholder="Age"
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
                            <select className="select select-bordered w-full">
                                <option disabled selected>
                                    Blood Group
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
                            <input
                                type="number"
                                placeholder="Number of Bags Needed"
                                className="input input-bordered w-full"
                            />
                            <input
                                type="datetime-local"
                                placeholder="Required Within"
                                className="input input-bordered w-full"
                            />
                            <input
                                type="text"
                                placeholder="Hospital Name"
                                className="input input-bordered w-full"
                            />
                            <input
                                type="text"
                                placeholder="Hospital Address"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Doctor's Name (optional)"
                            className="input input-bordered w-full mt-4"
                        />
                        <select className="select select-bordered w-full mt-2">
                            <option disabled selected>
                                Emergency Level
                            </option>
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>
                    </div>

                    {/* Requester Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">
                            Requester Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Your Full Name"
                                className="input input-bordered w-full"
                            />
                            <input
                                type="text"
                                placeholder="Relationship to Patient"
                                className="input input-bordered w-full"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="input input-bordered w-full"
                            />
                            <input
                                type="email"
                                placeholder="Email (optional)"
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn bg-red-500 text-white w-full"
                    >
                        Submit Emergency Request
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Emergency;
