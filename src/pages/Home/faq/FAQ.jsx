const FAQ = () => {
    return (
        <div className="my-20 px-5 max-w-4xl mx-auto">
            <div className="mb-10 text-center">
                <h2 className="mb-2 text-4xl font-bold text-center text-[#f64245] ">
                    Frequently Asked Questions
                </h2>
                <p className="text-gray-400">
                    Find answers to the most common questions about our blood
                    donation process, <br /> eligibility, and how you can get
                    help quickly.
                </p>
            </div>

            <div className="space-y-4">
                {/* Question 1 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        How can I request for blood?
                    </div>
                    <div className="collapse-content">
                        <p>
                            To request for blood, you need to register or log
                            in, fill out the blood request form with accurate
                            information, and submit it. A donor will be notified
                            once a match is found.
                        </p>
                    </div>
                </div>

                {/* Question 2 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        Is there any cost for blood donation?
                    </div>
                    <div className="collapse-content">
                        <p>
                            No, blood donation through our platform is
                            completely free. Our goal is to connect voluntary
                            donors with those in need.
                        </p>
                    </div>
                </div>

                {/* Question 3 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        Who can donate blood?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Anyone aged between 18 to 60 years, in good health,
                            and meeting donation criteria (like weight,
                            hemoglobin level, etc.) can donate blood.
                        </p>
                    </div>
                </div>

                {/* Question 4 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        How will I know if a donor is found?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Once a compatible donor is found, you will receive a
                            notification via SMS, email, or through your
                            dashboard.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
