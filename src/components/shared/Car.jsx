import {
    RiCloseLine,
    RiDeleteBin6Line
  } from "react-icons/ri"

const Car = (props) => {
    const {showOrder, setShowOrder} = props
    return (
        <div className={`lg:col-span-2 fixed  top-0 bg-[#1f1d2b] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${showOrder ? "right-0" : "-right-full"} `}>
            {/* Orders */}
            <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
                <RiCloseLine onClick={() => setShowOrder(false)} className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl" />
                <h1 className="text-2xl mt-4 my-4">Orders #172045</h1>
                {/* Pills */}
                <div className="flex text-center gap-4 flex-wrap mb-8">
                    <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">Dine In</button>
                    <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">To Go</button>
                    <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">DeLivery</button>
                </div>
                {/*  Card */}
                <div>
                    <div className="grid grid-cols-6 mb-4 p-4">
                        <h5 className="col-span-4">Items</h5>
                        <h5>Qty</h5>
                        <h5>Price</h5>
                    </div>
                    {/* Products */}
                    <div className=" h-[400px] overflow-scroll">
                        {/* Product */}
                        <div className="bg-[#262837] p-4 rounded-xl mb-4">
                            <div className="grid grid-cols-6 mb-2">
                                {/* Product Description */}
                                <div className="col-span-4 flex items-center gap-2">
                                    <img src="comida.png" className="w-16 h-16 object-cover" />
                                    <div >
                                        <h5 className="text-sm">Spacy seas...</h5>
                                        <p className="text-xs text-gray-500">$2.29</p>
                                    </div>
                                </div>
                                {/* Qty */}
                                <div>
                                    <span>2</span>
                                </div>
                                {/* Price */}
                                <div>
                                    <span>$4.58</span>
                                </div>
                            </div>
                            {/* Note */}
                            <div className="grid grid-cols-5 items-center gap-4">
                                <form className="col-span-4">
                                    <input type="text" className="bg-[#1f1d2b] py-2 px-4 rounded-lg outline-none" placeholder="Order note..." />
                                </form>
                                <div>
                                    <button className="border border-red-500 p-2 rounded-lg">
                                        <RiDeleteBin6Line className="text-red-500" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Product */}
                        <div className="bg-[#262837] p-4 rounded-xl mb-4">
                            <div className="grid grid-cols-6 mb-2">
                                {/* Product Description */}
                                <div className="col-span-4 flex items-center gap-2">
                                    <img src="comida.png" className="w-16 h-16 object-cover" />
                                    <div >
                                        <h5 className="text-sm">Spacy seas...</h5>
                                        <p className="text-xs text-gray-500">$2.29</p>
                                    </div>
                                </div>
                                {/* Qty */}
                                <div>
                                    <span>2</span>
                                </div>
                                {/* Price */}
                                <div>
                                    <span>$4.58</span>
                                </div>
                            </div>
                            {/* Note */}
                            <div className="grid grid-cols-5 items-center gap-4">
                                <form className="col-span-4">
                                    <input type="text" className="bg-[#1f1d2b] py-2 px-4 rounded-lg outline-none" placeholder="Order note..." />
                                </form>
                                <div>
                                    <button className="border border-red-500 p-2 rounded-lg">
                                        <RiDeleteBin6Line className="text-red-500" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Product */}
                        <div className="bg-[#262837] p-4 rounded-xl mb-4">
                            <div className="grid grid-cols-6 mb-2">
                                {/* Product Description */}
                                <div className="col-span-4 flex items-center gap-2">
                                    <img src="comida.png" className="w-16 h-16 object-cover" />
                                    <div >
                                        <h5 className="text-sm">Spacy seas...</h5>
                                        <p className="text-xs text-gray-500">$2.29</p>
                                    </div>
                                </div>
                                {/* Qty */}
                                <div>
                                    <span>2</span>
                                </div>
                                {/* Price */}
                                <div>
                                    <span>$4.58</span>
                                </div>
                            </div>
                            {/* Note */}
                            <div className="grid grid-cols-5 items-center gap-4">
                                <form className="col-span-4">
                                    <input type="text" className="bg-[#1f1d2b] py-2 px-4 rounded-lg outline-none" placeholder="Order note..." />
                                </form>
                                <div>
                                    <button className="border border-red-500 p-2 rounded-lg">
                                        <RiDeleteBin6Line className="text-red-500" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                {/*  Submit Payment */}
                <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-500">Discount</span>
                        <span>$0</span>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-gray-500">Subtotal</span>
                        <span>$201.03</span>
                    </div>
                    <div>
                        <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">Continue to payment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Car;