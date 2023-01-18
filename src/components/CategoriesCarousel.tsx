import React from "react";
import Slider from "react-slick";
import { CategoriesBackground } from "./CategoriesBackground";
import CategoriesJSON from "../assets/json/categories.json"
export function CategoriesCarousel() {
    var settings = {
        className: "slider variable-width",
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };
    return (
        <Slider {...settings} >
            <CategoriesBackground>
                <div className="flex flex-row gap-2 justify-between content-center items-center pl-5 pr-5">
                    <img className="w-[99px] h-[99px] rounded-full object-fill" src="https://testing-e-commerce.vercel.app/static/media/SupplyToMills.e5cfc0bbfdf9d9f9a8dd.png" alt=""/>
                    
                    <h2 className="text-[#0066ff] text-xl font-bold w-[171px] md:w-[101px]">Supply to feed mills</h2>
                    <a href="https://testing-e-commerce.vercel.app/shop">
                        <button className="mt-3 text-[#0066ff] rounded-[30px] bg-[#D6E7FF] py-2 px-4 border-2 border-[#0066ff]">&gt;</button>
                    </a>
                </div>
            </CategoriesBackground>

            {CategoriesJSON.map((category) => (
                <CategoriesBackground>
                    <div className="flex flex-row gap-5 justify-center content-center items-center pl-5 pr-5">
                        <img className="w-[99px] h-[99px] rounded-full object-fill" src={category.img} alt=""/>
                        <div className="flex flex-col justify-center text-center">
                            <h2 className="text-[#737373] text-lg h-[60px] w-[171px] md:w-[141px]">{category.title}</h2>
                            <span className="font-bold italic text-[#737373] text-sm">{category.status}</span>
                            <a href="https://testing-e-commerce.vercel.app/categoryrequest">
                                <span className="font-medium text-[#0066ff]">Request</span>
                            </a>
                        </div>
                    </div>
                </CategoriesBackground>
            ))}
        </Slider>
    );
}