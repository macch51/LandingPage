import Wallet from '../assets/wallet.gif';
import Button from './button';
function Contact() {
    return (
        <div className='flex gap-8 bg-primary h-normal pb-6'>
            <section className="w-1/2 relative bg-primary  flex mt-28 justify-center text-left ">
                <div className="w-full px-4 sm:px-8">
                    {/* Heading */}
                    <h1 className="text-6xl pl-24 poppins-semibold leading-24 px-20 text-white w-full px-4">
                        Questions? 
                        <br/>Let’s talk
                    </h1>
                    {/* Subheading */}
                    <p className="text-lg pl-24 px-4 poppins-light text-gray-200 mt-4 opacity-40">
                        This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
                    </p>
                    {/* Button */}
                    <Button
                        padding="mx-24 mt-16"
                        text="Get Started"
                        size="text-lg"
                        weight="font-thin"
                        fontFamily="poppins-light"
                        bgColor="bg-yellow"
                        color="text-darkcharcoal"
                        width="w-44"
                        height="h-12"
                        radius="rounded-2xl"
                    />
                </div>
            </section>
            <section className="w-1/2 mt-28  px-8">
                <img src={Wallet} alt="Wallet" className='pr-16 pl-4 w-auto h-auto' />
            </section>
        </div>
    );
}

export default Contact;