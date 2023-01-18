import { CategoriesCarousel } from "./CategoriesCarousel";

export function Categories() {
    return (
        <section className="w-full md:h-[505px] relative bg-blueText -mt-[70px] md:-mt-[6.8125rem]">
            <img src="https://testing-e-commerce.vercel.app/static/media/bannerShopNew.fe3cf3ba9ec20ff5d1b9.png" alt="" className="w-full object-cover object-[right10] absolute h-full -z-10"></img>
            <div className="h-full w-full relative bg-gradient-to-b from-white/10 via-[#07074d] to-[#07074d]">
                <section className="pb-3 mb-10 md:mb-0 md:pb-0 h-[650px] md:h-[430px] z-10 relative w-full pt-40">
                    <div className="flex flex-col justify-center items-center px-4 md:px-10 mb-12">
                        <h2 className="font-bold text-[29px] md:text-5xl text-white text-left">Categories</h2>
                        <h3 className="font-bold text-[16px] md:text-2xl text-center w-full text-[#c5ddff]">We are together to find what you are looking for</h3>
                    </div>
                    <section>
                        <CategoriesCarousel/>
                    </section>
                </section>
            </div>
        </section>
    )
}