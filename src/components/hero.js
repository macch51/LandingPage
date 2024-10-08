import Button from './button';
import "../fonts/Lightbox.otf";
import HeroGif from "../assets/hero.gif";

function Hero() {
    return (
        <div className='flex flex-col md:flex-row gap-8 bg-primary h-auto pb-6'>
            {/* Left Section: Text */}
            <section className="w-full md:w-1/2 relative bg-primary flex mt-12 md:mt-28 justify-center text-center md:text-left">
                <div className="w-full px-4 sm:px-8">
                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl pl-0 md:pl-24 poppins-semibold leading-tight md:leading-24 text-white w-full">
                        SaaS Landing Page Template
                    </h1>
                    {/* Subheading */}
                    <p className="text-base sm:text-lg pl-0 md:pl-24 poppins-light text-gray-200 mt-4 opacity-40">
                        This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
                    </p>
                    {/* Button */}
                    <Button
                        padding="mx-0 md:mx-24 mt-8 md:mt-16"
                        text="Get Started"
                        size="text-base sm:text-lg"
                        weight="font-light"
                        fontFamily="poppins-light"
                        bgColor="bg-yellow"
                        color="text-darkcharcoal"
                        width="w-full sm:w-44"
                        height="h-12"
                        radius="rounded-2xl"
                    />
                </div>
            </section>

            {/* Right Section: Image */}
            <section className="w-full md:w-1/2 mt-12 md:mt-28 px-4 sm:px-8">
                <img src={HeroGif} alt="hero" className='w-full h-auto md:w-auto md:pr-16 md:pl-4' />
            </section>
        </div>
    );
}

export default Hero;