

const Footer = () => {
    return (
        <div className="bg-base-300 ">
            <footer className="footer p-10 text-base-content max-w-7xl mx-auto font-inter">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t text-base-content border-base-300 max-w-7xl mx-auto font-inter">
                <aside className="items-center grid-flow-col">
                    <p>ACME Industries Ltd. <br />Providing reliable tech since 1992</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a></a>
                        <a></a>
                        <a></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;