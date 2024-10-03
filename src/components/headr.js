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
            <a href="#" className="text-textColor hover:bg-white hover:text-primary transition duration-200 px-4 py-2 rounded">
              Sign Up
            </a>
            <Button text="Login" color="purple" />
          </div>
        </nav>
      </header>
    );
  }
  
  export default Header;
  