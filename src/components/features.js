import Purse from "../assets/purse.svg"
import Cards from "../assets/cards.svg"
import Coin from "../assets/coin.svg"
function Features() {
    return (
        <div class="bg-primary py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4 items-center">
                            <img src={Cards} alt="Customizable Card" width={70} height={70} />
                            <div>
                            <dd class="order-first text-lg font-bold tracking-tight text-white sm:text-lg">Customizable card</dd>
                            <dt class="text-lg leading-7 text-gray-400">Custom your own card for your exact incomes and expenses needs.</dt>
                            </div>
                        </div>  
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4 items-center">
                            <img src={Coin} alt="No Payment Fee" width={70} height={70} />
                            <div>
                                <dd class="order-first text-lg font-bold tracking-tight text-white sm:text-lg">No payment fee</dd>
                                <dt class="text-lg leading-7 text-gray-400">Transfer your payment all over the world with no payment fee.</dt>
                            </div>
                        </div>
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4 items-center">
                            <img src={Purse} alt="All in One Place" width={70} height={70} />
                            <div>
                                <dd class="order-first text-lg font-bold tracking-tight text-white sm:text-lg">All in one place</dd>
                                <dt class="text-lg leading-7 text-gray-400">The right place to keep your credit and debit cards, boarding passes & more.</dt>
                            </div>
                        </div>
                </dl>
            </div>
        </div>
    )
}
export default Features;
