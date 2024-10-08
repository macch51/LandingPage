import Wallet from '../assets/wallet.gif';
import Button from './button';

function Contact() {
  return (
    <div className='flex flex-col md:flex-row gap-8 bg-primary h-normal pb-6'>
      <section className="w-full md:w-1/2 relative bg-primary flex mt-8 md:mt-28 justify-center text-center md:text-left">
        <div className="w-full px-4 sm:px-8">
          {/* Heading */}
          <h1 className="text-3xl md:text-6xl pl-4 md:pl-24 poppins-semibold leading-10 md:leading-24 text-white">
            Questions? 
            <br /> Let’s talk
          </h1>
          {/* Subheading */}
          <p className="text-base md:text-lg pl-4 md:pl-24 poppins-light text-gray-200 mt-4 opacity-40">
            This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
          </p>
          {/* Button */}
          <Button
            padding="mx-4 md:mx-24 mt-8 md:mt-16"
            text="Get Started"
            size="text-base md:text-lg"
            weight="font-thin"
            fontFamily="poppins-light"
            bgColor="bg-yellow"
            color="text-darkcharcoal"
            width="w-full md:w-44"
            height="h-12"
            radius="rounded-2xl"
          />
        </div>
      </section>
      <section className="w-full md:w-1/2 mt-8 md:mt-28 px-4 md:px-8">
        <img src={Wallet} alt="Wallet" className='w-full h-auto' />
      </section>
    </div>
  );
}

export default Contact;