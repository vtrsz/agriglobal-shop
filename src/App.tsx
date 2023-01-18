import { Navbar } from "./components/Navbar";
import { Categories } from "./components/Categories";
import { CategoriesCarousel } from "./components/CategoriesCarousel";
import { Footer } from "./components/Footer";
import { ProductOffer } from "./components/ProductOffer";
import { ResultOfCategory } from "./components/ResultOfCategory";

export function App() {

  return (
    <>
      <Navbar/>
      <main>
        <div className="bg-[#f3f5f8] -mt-[70px] md:-mt-[6.8125rem] ">
          <Categories/>
          <ResultOfCategory/>
          <ProductOffer/>
        </div>
        <Footer/>
      </main>
    </>
  )
};