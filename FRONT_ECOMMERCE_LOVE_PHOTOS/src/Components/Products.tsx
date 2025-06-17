import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Product } from "./Product";
import type { ProductType } from "../Interfaces/ProductType";
import { useEffect, useState } from "react";
import { XCircle } from "phosphor-react";

export function Products() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
    fetch("https://localhost:7173/api/product")
        .then((response) => response.json())
        .then((data) => {
        setProducts(data);
        console.log(data);
        })
        .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            { products.length ? (
                <Slider {...settings}>
                {products.map((product) => (
                    <Product
                        key={product.id}
                        Id={product.id}
                        Name={product.name}
                        Description={product.description}
                        Price={product.price}
                        Base64={product.base64}
                        SellerName={product.sellerName}
                        SellerPhone={product.sellerPhone}
                    />
                ))}
            </Slider>
            ) :
            <div className="flex flex-col items-center text-center pt-12 px-6 max-w-md mx-auto">
                <XCircle size={150} className="text-red-600 mb-6 animate-pulse" />
                <h1 className="text-3xl font-semibold mb-3 text-gray-800">Ops! Estamos enfrentando alguns problemas</h1>
                <span className="mt-6">
                    Enquanto isso, que tal dar uma passada no nosso{' '}
                    <a 
                        href="https://www.instagram.com/lovephotooficial/" 
                        className="underline font-bold transition"
                    >
                    Instagram
                    </a>?
                </span>
            </div>
            }       
        </div> 
    )
}