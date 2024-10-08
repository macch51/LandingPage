import Purse from "../assets/purse.svg";
import Cards from "../assets/cards.svg";
import Coin from "../assets/coin.svg";

function Features() {
    return (
        <div className="bg-primary py-12 sm:py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center sm:grid-cols-2 lg:grid-cols-3">
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4 items-center">
                        <img src={Cards} alt="Customizable Card" className="w-[70px] h-[70px]" />
                        <div>
                            <dd className="order-first text-lg font-bold tracking-tight text-white sm:text-xl">Customizable card</dd>
                            <dt className="text-base leading-7 text-gray-400">Customize your own card for your exact incomes and expenses needs.</dt>
                        </div>
                    </div>

                    <div className="mx-auto flex max-w-xs flex-col gap-y-4 items-center">
                        <img src={Coin} alt="No Payment Fee" className="w-[70px] h-[70px]" />
                        <div>
                            <dd className="order-first text-lg font-bold tracking-tight text-white sm:text-xl">No payment fee</dd>
                            <dt className="text-base leading-7 text-gray-400">Transfer your payment all over the world with no payment fee.</dt>
                        </div>
                    </div>

                    <div className="mx-auto flex max-w-xs flex-col gap-y-4 items-center">
                        <img src={Purse} alt="All in One Place" className="w-[70px] h-[70px]" />
                        <div>
                            <dd className="order-first text-lg font-bold tracking-tight text-white sm:text-xl">All in one place</dd>
                            <dt className="text-base leading-7 text-gray-400">The right place to keep your credit and debit cards, boarding passes & more.</dt>
                        </div>
                    </div>
                </dl>
            </div>
        </div>
    );
}

export default Features;