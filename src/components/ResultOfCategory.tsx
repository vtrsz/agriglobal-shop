import React, { useState, useEffect } from 'react';
import { ArrowBack, ArrowForward, Search } from "@mui/icons-material";
import { ProductCard } from './ProductCard';

interface ProductCardProps {
    imgP:string, 
    category:string, 
    title:string, 
    description:string, 
    specialOfferTimeTo:string, 
    updatedAt:string
}

export function ResultOfCategory() {
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
        <section className="flex flex-col pb-6 mt-4">
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className="pl-4 md:pl-4 lg:pl-8">
                    <h3 className="font-bold text-left text-2xl text-[#07074d] mt-0">Results of Category</h3>
                    <p className="text-sm font-normal text-left text-[#07074d]/70 my-2">Your search results... {products.length} Products</p>
                </div>
            </div>
            <div className="w-full flex lg:min-w-[960px]">
                <div className="w-full flex lg:min-w-[960px]">
                    <div className="hidden lg:flex">
                        <section className="md:absolute lg:relative md:z-20 md:bg-whiteAGM border-2 lg:border-0 pb-4 md:w-9/12 lg:w-[300px] lg:h-auto lg:pl-8 xl:w-[400px]">
                            <div className="flex flex-col md:mt-8 items-center">
                                <div className="relative w-11/12 pt-4 pb-8 border-b-2 ">
                                    <input className="w-full rounded-[8px] focus:outline-none h-10 border px-3 py-2 leading-5 text-sm" id="title" name="title" placeholder="Search" type="text" />
                                    <Search fontSize="medium" className="absolute top-6 right-5"/>
                                </div>
                                <div className="flex flex-col w-11/12 text-left mt-4 pb-8 border-b-2">
                                    <label className="font-semibold text-[16px] text-[#07074d] ml-1 mb-4" htmlFor="name">Prices</label>
                                    <div className="flex justify-between space-x-1">
                                        <input className="h-10 w-full rounded-[8px] pl-2 border px-3 py-2 leading-5 text-sm border" placeholder="Price From" type="number" id="priceFrom" name="priceFrom" required="" />
                                        <input className="h-10 w-full rounded-[8px] pl-2 border px-3 py-2 leading-5 text-sm border" placeholder="Price To" type="number" id="priceTo" name="priceTo" required="" />
                                    </div>
                                </div>
                                <div className="pb-8 border-b-2 w-11/12 mt-4">
                                    <div className="flex md:flex-col items-start mb-4 md:my-0">
                                        <p className="text-[#07074d] font-semibold text-sm">Open Market</p>
                                        <div className="flex items-center pl-3 md:pl-0">
                                            <input type="radio" className="rounded-[8px]" name="openMarketYes" id="openMarketYes" value="openMarketYes" />
                                            <label className="text-[#07074d] ml-2 text-sm" htmlFor="openMarketYes">Yes</label>
                                        </div>
                                        <div className="flex items-center pl-3 md:pl-0">
                                            <input type="radio" className="rounded-[8px]" name="openMarketNo" id="openMarketNo" value="openMarketNo" />
                                            <label className="text-[#07074d] ml-2 text-sm" htmlFor="openMarketNo">No</label>
                                        </div>
                                    </div>
                                    <select className="md:mt-4 w-full h-10 rounded-[8px] text-gray-400 bg-white border px-3 py-2 leading-5 text-sm" name="countryofOrigin" id="countryofOrigin" required="">
                                        <option value="">Country of Origin</option>
                                        <option value="afghanistan">Afghanistan</option>
                                        <option value="brazil">Brazil</option>
                                        <option value="paraguay">Paraguay</option>
                                        <option value="colombia">Colombia</option>
                                        <option value="chile">Chile</option>
                                        <option value="argentina">Argentina</option>
                                        <option value="algeria">Algeria</option>
                                        <option value="albania">Albania</option>
                                        <option value="andorra">Andorra</option>
                                        <option value="vaticancity">VaticanCity</option>
                                        <option value="unitedstate">United State</option>
                                    </select>
                                    <select className="mt-4 w-full h-10 rounded-[8px] text-gray-400 bg-white border px-3 py-2 leading-5 text-sm" name="countriesOpenMarket" id="countriesOpenMarket" required="">
                                        <option value="">Destination Country</option>
                                        <option value="afghanistan">Afghanistan</option>
                                        <option value="algeria">Algeria</option>
                                        <option value="bangladesh">Bangladesh</option>
                                        <option value="belize">Belize</option>
                                        <option value="botswana">Botswana</option>
                                        <option value="bulgaria">Bulgaria</option>
                                        <option value="albania">Albania</option>
                                        <option value="algeria">Algeria</option>
                                        <option value="albania">Albania</option>
                                        <option value="singapore">Singapore</option>
                                        <option value="vietnam">Vietnam</option>
                                        <option value="thailand">Thailand</option>
                                        <option value="china">China</option>
                                        <option value="angola">Angola</option>
                                        <option value="andorra">Andorra</option>
                                        <option value="antiguaandbarbuda">AntiguaandBarbuda</option>
                                        <option value="australia">Australia</option>
                                        <option value="azerbaijan">Azerbaijan</option>
                                        <option value="austria">Austria</option>
                                        <option value="bahrain">Bahrain</option>
                                        <option value="belarus">Belarus</option>
                                        <option value="barbados">Barbados</option>
                                        <option value="armenia">Armenia</option>
                                        <option value="belgium">Belgium</option>
                                        <option value="benin">Benin</option>
                                        <option value="argentina">Argentina</option>
                                        <option value="bolivia">Bolivia</option>
                                        <option value="bosniaandherzegovina">BosniaandHerzegovina</option>
                                        <option value="bhutan">Bhutan</option>
                                        <option value="centralafricanrepublic">CentralAfricanRepublic</option>
                                        <option value="chad">Chad</option>
                                        <option value="canada">Canada</option>
                                        <option value="chile">Chile</option>
                                        <option value="colombia">Colombia</option>
                                        <option value="congorepublicofthe">Congo,Republicofthe</option>
                                        <option value="costarica">CostaRica</option>
                                        <option value="comoros">Comoros</option>
                                        <option value="andorra">Andorra</option>
                                        <option value="argentina">Argentina</option>
                                        <option value="armenia">Armenia</option>
                                        <option value="australia">Australia</option>
                                        <option value="austria">Austria</option>
                                        <option value="bahrain">Bahrain</option>
                                        <option value="antiguaandbarbuda">AntiguaandBarbuda</option>
                                        <option value="angola">Angola</option>
                                        <option value="barbados">Barbados</option>
                                        <option value="bangladesh">Bangladesh</option>
                                        <option value="azerbaijan">Azerbaijan</option>
                                        <option value="belize">Belize</option>
                                        <option value="belarus">Belarus</option>
                                        <option value="colombia">Colombia</option>
                                        <option value="chile">Chile</option>
                                        <option value="congo republic">Democratic Republic of the Congo</option>
                                        <option value="chad">Chad</option>
                                        <option value="comoros">Comoros</option>
                                        <option value="croatia">Croatia</option>
                                        <option value="cyprus">Cyprus</option>
                                        <option value="costarica">Costa Rica</option>
                                        <option value="czechrepublic">CzechRepublic</option>
                                        <option value="centralafricanrepublic">Central African Republic</option>
                                        <option value="brazil">Brazil</option>
                                        <option value="slovakia">Slovakia</option>
                                        <option value="bulgaria">Bulgaria</option>
                                        <option value="canada">Canada</option>
                                        <option value="mexico">Mexico</option>
                                        <option value="netherlands">Netherlands</option>
                                        <option value="singapore">Singapore</option>
                                        <option value="southafrica">South Africa</option>
                                        <option value="unitedstate">United State</option>
                                        <option value="ecuador">Ecuador</option>
                                        <option value="spain">Spain</option>
                                        <option value="guinea">Guinea</option>
                                        <option value="afghanistan">Afghanistan</option>
                                        <option value="venezuela">Venezuela</option>
                                        <option value="peru">Peru</option>
                                        <option value="bolivia">Bolivia</option>
                                        <option value="malaysia">Malaysia</option>
                                        <option value="indonesia">Indonesia</option>
                                        <option value="france">France</option>
                                        <option value="portugal">Portugal</option>
                                        <option value="unitedarabemirates">United Arab Emirates</option>
                                    </select>
                                    <select className="mt-4 w-full h-10 rounded-[8px] text-gray-400 bg-white border px-3 py-2 leading-5 text-sm" name="dispatchPort" id="dispatchPort" required="">
                                        <option value="">Dispatch Port</option>
                                        <option value="durresdurazzoaldrz">Durres (Durazzo)  AL DRZ</option>
                                        <option value="santosbrssz">Santos  BR SSZ</option>
                                        <option value="pago pagoasppg">Pago Pago  AS PPG</option>
                                        <option value="buenaventuracobun">Buenaventura  CO BUN</option>
                                        <option value="aricaclari">Arica  CL ARI</option>
                                        <option value="cartagenacoctg">Cartagena  CO CTG</option>
                                        <option value="buenos airesarbue">Buenos Aires  AR BUE</option>
                                        <option value="santa fearsfn">Santa Fe  AR SFN</option>
                                        <option value="sarandealsar">Sarande AL SAR</option>
                                        <option value="cartagenaescar">Cartagena  ES CAR</option>
                                        <option value="brailarobra">Braila  RO BRA</option>
                                    </select>
                                </div>
                                <div className="flex flex-col text-left md:mt-12 pb-8 border-b-2 w-11/12 mt-4">
                                    <label className="font-semibold text-sm text-[#07074d] ml-1 w-full mb-4" htmlFor="name">Filter Quantity Available (Mt)</label>
                                    <div className="flex flex-col">
                                        <input className="md:mt-4 w-full h-10 rounded-[8px] pl-2 block px-3 py-2 border px-3 py-2 leading-5 text-sm" placeholder="Quantity From" type="number" id="quantityFrom" name="quantityFrom" required="" />
                                        <input className="mt-4 w-full h-10 rounded-[8px] pl-2 block px-3 py-2 border px-3 py-2 leading-5 text-sm" placeholder="Quantity To" type="number" id="quantityTo" name="quantityTo" required="" />
                                    </div>
                                </div>
                                <div className="flex flex-col text-left md:mt-4 pb-8 border-b-2 w-11/12 mt-4">
                                    <label className="font-semibold text-sm text-[#07074d] ml-1 w-64 mb-4" htmlFor="name">Filter Dispatch Estimated</label>
                                    <p className="font-light text-[#07074d] text-sm text-justify ml-1 mt-1 w-full">*Select an estimated range of dates for your cargo dispatch</p>
                                    <div className="flex flex-col mt-1">
                                        <input className="md:mt-4 w-full h-10 rounded-[8px] pl-2 block border px-3 py-2 leading-5 text-sm text-[#10121CB2]" placeholder="Date From" type="date" id="dateFrom" name="dateFrom" required="" />
                                        <input className="mt-4 w-full h-10 rounded-[8px] pl-2 block border px-3 py-2 leading-5 text-sm text-[#10121CB2]" placeholder="Date To" type="date" id="dateTo" name="dateTo" required="" />
                                    </div>
                                </div>
                                <div className="text-left md:mt-12 w-11/12 ">
                                    <label className="font-semibold text-sm text-[#07074d] ml-1 w-64" htmlFor="name">Filter Categories</label>
                                    <details open="true" className="group/summary w-full">
                                        <summary className="w-full flex items-center mt-4 md:mt-7 text-[#07074d] text-sm border bg-white min-h-10 rounded-[8px] px-2 py-3 ">
                                            <span className="flex items-center pointer-events-none text-[#07074d]">Supply to feed mills</span>
                                            <button className="ml-auto pointer-events-none">
                                            <svg className="fill-current opacity-75 w-4 h-4 -mr-1 group-open/summary:rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/>
                                            </svg>
                                            </button>
                                        </summary>
                                        <ul className="text-[#07074d] list-disc pl-4 font-light text-sm flex flex-wrap md:flex-col md:items-start min-w-64 my-3">
                                            <li className="list-item list-inside  justify-start items-center">
                                                <button value="animalProteins" name="animalProteins" className="pl-2 text-[#07074d] text-sm list-disc">Animal Proteins</button>
                                            </li>
                                            <li className="list-item list-inside justify-start items-center">
                                                <button value="animalFatsAndOils" name="animalFatsAndOils" className="pl-2 text-[#07074d] text-sm list-disc">Animal Fats and Oils</button>
                                            </li>
                                            <li className="list-item list-inside justify-start items-center">
                                                <button value="enzymaticHydrolysisProducts" name="enzymaticHydrolysisProducts" className="pl-2 text-[#07074d] text-sm list-disc">Enzymatic hydrolysis products</button>
                                            </li>
                                            <li className="list-item list-inside justify-start items-center">
                                                <button value="chitosan" name="chitosan" className="pl-2 text-[#07074d] text-sm list-disc">Chitosan</button>
                                            </li>
                                            <li className="list-item list-inside justify-start items-center">
                                                <button value="coffee" name="coffee" className="pl-2 text-[#07074d] text-sm list-disc">Coffee</button>
                                            </li>
                                            <li className="list-item list-inside justify-start items-center">
                                                <button value="spices" name="spices" className="pl-2 text-[#07074d] text-sm list-disc">Spices</button>
                                            </li>
                                        </ul>
                                    </details>
                                </div>
                                <div className="flex md:justify-end w-11/12 ">
                                    <button className="mr-1 px-3 py-2 bg-[#D6E7FF] border-2 border-[#0066FF] rounded-[30px] w-full text-[#0066FF] text-center text-semibold text-sm mt-4">Clear Filters</button>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="w-full lg:w-9/12 text-left lg:flex lg:flex-col lg:items-center lg:">
                        <div className="md:flex px-7 mt-5 items-center hidden justify-center">
                            <button className="font-semibold text-[#0066FF] bg-[#D6E7FF] py-3 px-2 md:px-5 rounded-[30px] text-sm items-center flex space-x-1 border border-[#0066FF]">
                                <p>Previous page</p>
                                <ArrowBack className="" fontSize="medium" />
                            </button>
                            <p className="font-semibold text-[#0066ff] px-3 md:px-10">1 to 9</p>
                            <button className="font-semibold text-[#0066FF] mx-2 md:mx-0 bg-[#D6E7FF] py-3 px-2 md:px-5 rounded-[30px] text-sm items-center flex space-x-1 border border-[#0066FF]">
                                <ArrowForward className="" fontSize="medium" />
                                <p>Next Page</p>
                            </button>
                        </div>
                        <div className="flex flex-wrap mt-4 justify-center">
                        {products.map((product:ProductCardProps) => {
                            const specialOfferDate = new Date(product.specialOfferTimeTo);
                            const specialOffer = (specialOfferDate.getTime() >= new Date().getTime());
                            const productUpdatedDate = new Date(product.updatedAt);
                            const isNewProduct = (productUpdatedDate.getTime() >= new Date().getTime() - 1000 * 60 * 60 * 24 * 30);
                            return (
                                <ProductCard img={product.imgP} category={product.category} title={product.title} description={product.description} specialOffer={specialOffer} newProduct={isNewProduct}/>
                            );
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}