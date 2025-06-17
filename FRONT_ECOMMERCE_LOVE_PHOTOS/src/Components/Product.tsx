import { Bag } from "phosphor-react"
import { type ProductType } from "../Interfaces/ProductType"

export function Product(product: ProductType) {
    const base64Formatted = (base64: string) => {
        return "data:image/png;base64," + base64;
    };

    const priceFormatted = (price: number) => {
        return price + "0";
    };

    const whatsappFormatted = (sellerName: string, sellerPhone: string, Name: string) => {
        const message = `Olá, ${sellerName}, gostaria de mais informações sobre o produto ${Name}`;
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${sellerPhone}?text=${encodedMessage}`;
    };

    return(
        <div id="product" className="flex flex-col items-center justify-center gap-10 pt-10 px-10 lg:px-0 lg:flex-row lg:gap-30 lg:pt-18">
            <div className="flex flex-col">
                <img src={base64Formatted(product.Base64)} alt="" className="w-full rounded-2xl lg:w-[400px]" />
                <div className="hidden lg:flex justify-center gap-4 py-4">
                    <img src={base64Formatted(product.Base64)} alt="" className="w-[80px] rounded-2xl" />
                    <img src={base64Formatted(product.Base64)} alt="" className="w-[80px] rounded-2xl" />
                    <img src={base64Formatted(product.Base64)} alt="" className="w-[80px] rounded-2xl" />
                    <img src={base64Formatted(product.Base64)} alt="" className="w-[80px] rounded-2xl" />
                </div>
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-blue-500 text-center mb-2">Love Photos</span>
                <h2 className="font-bold text-4xl text-center">{product.Name}</h2>
                <span className="w-[350px] py-5">{product.Description}</span>
                <span className="font-bold text-green-700 text-2xl">R$ {priceFormatted(product.Price)}</span>
                <a href={whatsappFormatted(product.SellerName, product.SellerPhone, product.Name)} className="bg-green-700 text-white flex justify-center items-center gap-2 py-4 rounded-xl mt-6 cursor-pointer hover:bg-green-600 transition-all duration-300 ease-in-out">
                    <Bag size={20}/> Comprar
                </a>
            </div>
        </div>
    )
}