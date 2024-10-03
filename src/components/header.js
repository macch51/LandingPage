import Button from './button';

function Header() {
    return (
      <header className="bg-primary">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          {/* Logo Section */}
          <div className="flex lg:flex-1">
            <a href="#" className="text-textColor font-semibold text-2xl font-poppins">
              {/* Replace with your logo */}
              Wallet
            </a>
          </div>
  
          {/* Navigation Links Section */}
          <div className="flex gap-4">
              <p className='text-textColor font-regular text-lg px-4 py-2 font-poppins'>Sign up</p>
            <Button
              text="Log in"
              size="text-lg"
              fontSize="text-lg"
              fontWeight="font-regular"
              fontFamily="font-poppins"
              bgColor="bg-lightpurple"
              color="text-darkcharcoal"
              width="w-44"
              height="h-12"
              radius="rounded-2xl"
            />
          </div>
        </nav>
      </header>
    );
  }
  
  export default Header;
  