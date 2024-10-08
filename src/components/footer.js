function Footer() {
    return (
        <div className="bg-primary relative z-10 mt-0 sm:py-8">
            <hr className="border-t-2 border-white opacity-20 my-8 mx-4 sm:mx-20" />  
            <footer className="bg-primary flex flex-col md:flex-row gap-8 px-4 sm:px-20">
                {/* Left Section (Logo and Links) */}
                <div className="w-full md:w-1/2 relative">
                    <h1 className="text-white text-2xl font-po font-semibold">Wallet</h1>
                    <ul className="flex flex-wrap items-center pt-6 sm:pt-10 text-base sm:text-lg font-medium text-white">
                        <li>
                            <span className="hover:underline me-4 md:me-6">© Wallet 2022</span>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Cookies policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Terms of use</a>
                        </li>
                    </ul>
                </div>

                {/* Right Section (Newsletter) */}
                <div className="w-full md:w-1/2 relative">
                    <label htmlFor="newsletter" className="text-white text-xl font-po font-light block mb-4">
                        Updates right to your Inbox
                    </label>
                    <div className="relative flex flex-col sm:flex-row items-center w-full md:w-auto mt-4 sm:mt-6 rounded-md shadow-sm space-y-4 sm:space-y-0 sm:space-x-4">
                        <input
                            id="newsletter"
                            name="newsletter"
                            type="text"
                            placeholder="Email Address"
                            className="flex-1 w-full sm:w-auto block rounded-xl bg-darkcharcoal py-3.5 px-4 text-white placeholder:text-white placeholder:font-thin placeholder:opacity-40 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg"
                        />
                        <button className="bg-lightpurple text-charcoal font-normal text-lg py-4 px-8 rounded-2xl w-full sm:w-auto">
                            Send
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;