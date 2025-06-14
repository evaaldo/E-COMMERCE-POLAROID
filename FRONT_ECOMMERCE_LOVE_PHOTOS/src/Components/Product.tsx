import { Bag } from "phosphor-react"
import { type Product } from "../Interfaces/Product"

export function Product(product: Product) {
    return(
        <div className="flex items-center justify-center gap-30 py-18">
            <div className="flex flex-col">
                <img src="/produto1.png" alt="" className="w-[400px] rounded-2xl" />
                <div className="flex justify-center gap-4 py-4">
                    <img src="/produto1.png" alt="" className="w-[80px] rounded-2xl" />
                    <img src="/produto1.png" alt="" className="w-[80px] rounded-2xl" />
                    <img src="/produto1.png" alt="" className="w-[80px] rounded-2xl" />
                    <img src="/produto1.png" alt="" className="w-[80px] rounded-2xl" />
                </div>
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-blue-500 text-center mb-2">Love Photos</span>
                <h2 className="font-bold text-4xl text-center">{product.Name}</h2>
                <span className="w-[400px] py-5">{product.Description}</span>
                <span className="font-bold text-green-700 text-2xl">R$ {product.Price}</span>
                <button className="bg-green-700 text-white flex justify-center items-center gap-2 py-4 rounded-xl mt-6 cursor-pointer hover:bg-green-600 transition-all duration-300 ease-in-out">
                    <Bag size={20}/> Comprar
                </button>
            </div>
        </div>
    )
}