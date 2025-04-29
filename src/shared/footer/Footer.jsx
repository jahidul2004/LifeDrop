import { BsDropletFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <nav>
                    <h6 className="footer-title text-error">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-error">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-error">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
                <aside className="grid-flow-col items-center">
                    <BsDropletFill className="text-error" size={34} />
                    <p className="font-semibold">
                        <span className="text-error text-lg">LifeDrop</span>
                        <br />
                        An open-source blood donation platform
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 text-error">
                        <a>
                            <RiFacebookCircleLine size={32} />
                        </a>
                        <a>
                            <FaWhatsapp size={32} />
                        </a>
                        <a>
                            <SiInstagram size={28} />
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
