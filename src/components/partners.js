import Accenture from "../assets/accenture.svg";
import Apple from "../assets/apple.svg";
import Microsoft from "../assets/microsoft.svg";
import Google from "../assets/google.svg";
import Sap from "../assets/sap.svg";

export default function Partners() {
  return (
    <div className="bg-primary relative z-10 mt-0 sm:py-8">
      <hr className="border-t-2 border-white opacity-20 my-4 sm:my-8 mx-4 sm:mx-20" />
      <div className="mx-auto py-4 max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid */}
        <div className="mx-auto grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          <img
            alt="Accenture"
            src={Accenture}
            className="max-h-12 w-full object-contain col-span-1"
          />
          <img
            alt="Apple"
            src={Apple}
            className="max-h-12 w-full object-contain col-span-1"
          />
          <img
            alt="Microsoft"
            src={Microsoft}
            className="max-h-12 w-full object-contain col-span-1"
          />
          <img
            alt="Google"
            src={Google}
            className="max-h-12 w-full object-contain col-span-1"
          />
          <img
            alt="SAP"
            src={Sap}
            className="max-h-12 w-full object-contain col-span-1"
          />
        </div>
      </div>
      <hr className="border-t-2 border-white opacity-20 my-4 sm:my-8 mx-4 sm:mx-20" />
    </div>
  );
}