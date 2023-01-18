import React, { useState, useEffect } from 'react';
import { ProductCard } from "./ProductCard";

interface ProductOfferProps {
    imgP:string, 
    category:string, 
    title:string, 
    description:string, 
    specialOfferTimeTo:string, 
    updatedAt:string
}

interface ProductOffertedProp {
    offerted:boolean
}

export function ProductOffer() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("https://testing-agriglobal-market.ue.r.appspot.com/api/getproducts/admisiones");
            const data = await response.json();
            if (data.ok) {
                setProducts(data.products);
            }
        };
        fetchProducts();
    }, []);

    return (
        <section className="ml-4 md:ml-6 md:mt-4 mt-2">
            <div className="flex flex-row justify-between items-center">
                <h2 className="text-blueText font-semibold md:font-bold text-[24px] md:text-4xl md:w-6/12 text-left">Product Offer.
                </h2>
            </div>
            <div className="flex overflow-x-auto overscroll-x-contain space-x-4 mt-4 items-center scrollbar-hide">
                
                {products.filter((product:ProductOffertedProp) => product.offerted).map((product:ProductOfferProps) => {
                    const specialOfferDate = new Date(product.specialOfferTimeTo);
                    const specialOffer = (specialOfferDate.getTime() >= new Date().getTime());
                    const productUpdatedDate = new Date(product.updatedAt);
                    const isNewProduct = (productUpdatedDate.getTime() >= new Date().getTime() - 1000 * 60 * 60 * 24 * 30);
                    return (
                        <ProductCard img={product.imgP} category={product.category} title={product.title} description={product.description} specialOffer={specialOffer} newProduct={isNewProduct}/>
                    );
                })}
            </div>
        </section>
    )
}