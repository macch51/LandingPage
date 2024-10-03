import Button from './button';
import "../fonts/Lightbox.otf"
import HeroImage from "../assets/hero.svg"
import HeroGif from "../assets/hero.gif"
function Hero() {
    return (
        <div className='flex gap-8 bg-primary'>
            <section className="w-1/2 relative bg-primary h-screen flex mt-28 justify-center text-left">
                <div className="w-full px-4 sm:px-8">
                    {/* Heading */}
                    <h1 className="text-6xl pl-24 poppins-semibold leading-24 px-20 text-white w-full px-4">
                    SaaS Landing Page Template
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
                        weight="font-light"
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
                <img src={HeroGif} alt="hero" className='pr-16 pl-4 w-auto h-auto' />
            </section>
        </div>
    );
  }
  
  export default Hero;
  