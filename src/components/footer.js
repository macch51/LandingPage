function Footer() {
    return (
        <div className="bg-primary relative z-10 mt-0 sm:py-8">
            <hr className="border-t-2 border-white opacity-20 my-8 mx-18" />  
            <footer className="bg-primary flex gap-8">
                <div className="w-1/2 relative mx-20">
                    <h1 className="text-white text-2xl font-po font-semibold relative">Wallet</h1>
                    <ul className="flex flex-wrap items-center pt-10 text-lg font-medium text-white dark:text-white sm:mt-0">
                        <li>
                            <span className="hover:underline me-4 md:me-6">© Wallet 2022
                            </span>
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
                <div className="w-1/2 relative">
                    <label for="newsletter" className="text-white text-xl leading-6 font-po font-light relative">Updates right to your Inbox</label>
                    <div className="relative flex items-center w-1/2 mt-6 rounded-md shadow-sm space-x-2">
                    {/* Input Field */}
                    <input
                        id="newsletter"
                        name="newsletter"
                        type="text"
                        placeholder="Email Address"
                        className="flex-1 block rounded-xl bg-darkcharcoal py-3.5 mr-4 pl-7 pr-20 text-white placeholder:text-white placeholder:font-lg placeholder:font-thin placeholder:opacity-40 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                    />

                    {/* Button Next to Input */}
                    <button className="bg-lightpurple text-charcoal font-normal text-lg ml-8 py-4 px-14 rounded-2xl">
                        Send
                    </button>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;