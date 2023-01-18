import React, { useState } from 'react';
import { Favorite, FavoriteBorderOutlined, LocalOfferOutlined, ShoppingCartOutlined, WbIncandescent } from "@mui/icons-material";

interface ProductCardProps {
    img:string, 
    category:string, 
    title:string, 
    description:string, 
    specialOffer:boolean, 
    newProduct:boolean
}

function addToCart() {
    alert('Product added to cart.');
}

export function ProductCard({img, category, title, description, specialOffer, newProduct}:ProductCardProps) {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <div className="w-[216px] h-[370px] md:w-[310px] md:h-[440px] bg-white flex-none flex-col relative rounded-[24px] mx-3 mb-6 hover:-mt-1  hover:shadow-lg  hover:shadow-[#0066FF]/40">
            <div className="flex mt-5 justify-between ml-1.5 absolute ">

                {specialOffer ? (
                    <div className="flex -mt-2 pb-1">
                        <div className="p-1 rounded-[30px] bg-[#F35959] -mt-1 z-10 relative  ">
                            <LocalOfferOutlined className="p-1 text-[#FAC8C8] css-vubbuv" fontSize="medium"/>
                        </div>
                        <p className="font-semibold text-[#0066ff] bg-[#D6E7FF] text-xs md:text-base pl-7 py-1 pr-4 rounded-[30px] -ml-6 -mt-1">Sale</p>
                    </div>
                ) : (null)}
                
                {newProduct ? (<div className="flex -mt-2 pb-1">
                    <div className="p-1 rounded-[30px] bg-[#E0FFD6] -mt-1 z-10 relative">
                    <WbIncandescent className="p-1 rotate-180 text-[#33CC00] css-vubbuv" fontSize="medium"/>
                    </div>
                    <p className="font-semibold text-[#0066ff] bg-[#D6E7FF] text-xs md:text-base pl-7 py-1 pr-4 rounded-[30px] -ml-6 -mt-1">New</p>
                </div>
                ) : (null)}
            </div>
            <div className="flex justify-end mr-1.5 mt-1.5 absolute right-0 rounded-full border-solid border-4 border-white bg-white">
                <div className="text-[#0066ff] text-right" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    {isHovering ? (<Favorite fontSize="medium"/>) : (<FavoriteBorderOutlined fontSize="medium"/>)}
                </div>
            </div>
            <div className="m-[10px]">
                <button className="self-center">
                    <img src={img} alt="" className="w-[201px] h-[134px] md:w-[390px] md:h-[187px] rounded-[15px] mt-5 md:mt-0" />
                </button>
                <div className="flex justify-start">
                    <div className="mt-2 text-left">
                        <p className="text-blueText md:text-[14px] text-[10px] font-semibold pt-1 md:pt-2">{category}</p>
                        <p className="mt-1 md:mt-2 font-bold text-[#0066ff] md:text-[18px] text-[14px] leading-5 md:leading-6 h-10">{title}</p>
                        <p className="mt-2 leading-[12px] text-blueText text-[10px] h-[24px] md:h-9 overflow-hidden">{description}</p>
                        <div className="flex font-semibold text-blueText text-[10px] md:text-sm md:mt-3">
                            <a className="mr-1" href="/account">
                                <span className="text-[#0066ff] underline">Sign in</span>
                            </a>
                            <p> to see</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-end justify-end ml-7 mt-10 bottom-[8px] md:bottom-[16px] right-[16px] absolute">
                    <div className="w-3/12 ml-3">
                        <button className=" px-1 py-1 rounded-[30px] disabled:bg-[#3a89ff] border-solid border-2 border-[#0066ff] hover:bg-[#b0d0ff]" name="noAdded">
                            <img title="Compare" className="w-4 h-4 md:w-5 md:h-5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFoSURBVHgB7ZbPTcMwFId/DhmAEboBjNBNCAdcOCEmiDsB4UTFhbIBnYBVGKEMgF793KpJEzv+k0jtIZ9kOYodvy924mdgYuLMCIzFI81AKB2tWx3pDSvx227I4WJBP3rAOa5Q4F18wQfh0/R3c63LfftmBveAc1P/Y40nuoNfYIMEsp62l+NViMSHqHQRpgAKgwV4QGAZJcFIKscR2EuoKIl28Ky75nECMRK24CuxxmCBEInE4EyOUFhCEl+VDQmuZ57gLH6j94Glbdj4jUiSOkq0iXjzdAGXRELw/WNp0BjBmZQlSP7gbMTNQF9wSa+60KFPzYKeTV7hZDVIwP/mxaFWJxKEyuQVR6YMEwib9uZvpjoz4cC/D4SuOecOSZxyy4YEfGSjBK8luO/pTCQLpH7tXYle7EvwQEV08Mg0XA9tQzSOVqFvLnDr6fFnu5k7tJT+bUjXG30e/EYIwpygtj3tFSYmLpEdlbOb8EGWO6kAAAAASUVORK5CYII=" alt="" name="noAdded" />
                        </button>
                    </div>
                    <button className="w-28 bg-[#0066FF] py-2 text-[10px] rounded-[30px] text-white disabled:bg-[#3a89ff] hover:bg-[#4d94ff] font-semibold" onMouseDown={addToCart}>
                        <ShoppingCartOutlined fontSize="small"/>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}