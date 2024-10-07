import Accenture from "../assets/accenture.svg"
import Apple from "../assets/apple.svg"
import Microsoft from "../assets/microsoft.svg"
import Google from "../assets/google.svg"
import Sap from "../assets/sap.svg"

export default function Partners() {
    return (
      <div className="bg-primary relative z-10 mt-0 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="Accenture"
              src={Accenture}
              width={202}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 -mt-2"
            />
            <img
              alt="Apple"
              src={Apple}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Microsoft"
              src={Microsoft}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Google"
              src={Google}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 ml-6"
            />
            <img
              alt="SAP"
              src={Sap}
              width={300}
              height={300}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
        </div>
      </div>
    )
  }
  