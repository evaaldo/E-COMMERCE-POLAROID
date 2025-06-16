import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Product } from "./Product";
import type { ProductType } from "../Interfaces/ProductType";
import { useEffect, useState } from "react";

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
        <Slider {...settings}>
            {products.map((product) => (
                <Product
                    key={product.id}
                    Id={product.id}
                    Name={product.name}
                    Description={product.description}
                    Price={product.price}
                    Base64={product.base64}
                />
            ))}
        </Slider>
    )
}