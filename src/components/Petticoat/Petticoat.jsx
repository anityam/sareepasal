import * as React from 'react';
import Image from 'next/image'
import PhoneInfo from '../phone/PhoneInfo'

const Petticoat = () => {
    return (
        <div class="grid lg:grid-cols-3 lg:gap-36 sm:grid-cols-2 gap-20 ">
            < Petticoats key="1" />
        </div>

    )
}

const Petticoats = () => {
    return(
        <React.Fragment>
            {/* Vendor: Leranath Fashiom Item: IC-2411*/}
            <div class="aspect-w-16 aspect-h-16 flex-row">
                <div className="flex md:item-center md:justify-center md:w-11/12 ">
                    <div class="relative rounded-xl overflow-auto w-11/12">
                        <div class="relative w-full flex md:gap-6 gap-3 snap-x overflow-x-auto pb-14 ">
                            <div class=" snap-center shrink-0 mx-7 md:flex hidden">
                                <div class="shrink-0 w-96"></div>
                            </div>
                            <div class="snap-normal snap-center shrink-0 shadow-2xl rounded-2xl  md:mx-7 bg-white">
                                <Image class="rounded-2xl " src="/Images/Petticoat/Leranath Fashion/Petticoat1.jpg" alt="1" width={300} height={300} />
                            </div>
                            <div class="snap-center snap-always shrink-0 md:mx-7  scroll-ms-1 md:scroll-ms-6 shadow-xl rounded-2xl">
                                <Image class="rounded-2xl" src="/Images/Petticoat/Leranath Fashion/Petticoat2.jpg" alt="2" width={300} height={300} />
                            </div>
                            <div class="snap-center snap-always shrink-0 md:mx-7 scroll-ms-1 md:scroll-ms-6 shadow-lg rounded-2xl">
                                <Image class="rounded-2xl" src="/Images/Petticoat/Leranath Fashion/Petticoat3.jpg" alt="3" width={300} height={300} />
                            </div>
                            <div class="snap-center snap-always shrink-0 md:mx-7 scroll-ms-1 md:scroll-ms-6 shadow-lg rounded-2xl">
                                <Image class="rounded-2xl" src="/Images/Petticoat/Leranath Fashion/Petticoat4.jpg" alt="4" width={300} height={300} />
                            </div>
                            <div class="snap-center snap-always shrink-0 md:mx-7 scroll-ms-1 md:scroll-ms-6 shadow-lg rounded-2xl">
                                <Image class="rounded-2xl" src="/Images/Petticoat/Leranath Fashion/Petticoat5.jpg" alt="5" width={300} height={300} />
                            </div>
                            <div class="snap-normal snap-center shrink-0 shadow-2xl rounded-2xl  md:mx-7 bg-white">
                                <Image class="rounded-2xl " src="/Images/Petticoat/Leranath Fashion/Petticoat6.jpg" alt="6" width={300} height={300} />
                            </div>
                            <div class=" snap-center shrink-0 md:mx-7 md:flex hidden ">
                                <div class="shrink-0 w-96"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-4 relative flex justify-between  sm:w-5/6 h-full mx-auto ">
                    <div>
                        <h1 class=" mb-2 text-2xl md:text-2xl sm:font-extrabold tracking-tight leading-none 
                                        text-blue-900 xl:text-2xldark:text-blue-950">
                            Petticoat
                        </h1>
                        <p class="text-black text-smdark:text-blue-950 text-left">
                            Product Details:
                            <p class="text-black text-smdark:text-blue-950 text-left font-light">

                            </p>

                            <br />Size & Fit:
                            <p class="text-black text-smdark:text-blue-950 text-left font-light">
                                One Size Fits All
                            </p>

                            <br />Colors:
                            <p class="text-black text-smdark:text-blue-950 text-left font-light">
                                Blue, Red, Black, Green, Rani, Maroon, Violet, Gold, Nude
                            </p>
                            <br />Material & Care:
                            <p class="text-black text-smdark:text-blue-950 text-left font-light">
                                Dry Wash Only
                            </p>

                            <br />Product Code:
                            <p class="text-black text-smdark:text-blue-950 text-left font-light">
                                
                            </p>

                            <br />Note:
                            <p class="text-black text-smdark:text-blue-950 text-left font-light">
                                Product color may slightly vary due to photographic lighting sources or your monitor settings.
                            </p>

                            <br />Price:
                            <p class="text-green-700 font-bold text-3xl">
                                $8.99
                            </p>
                        </p>
                        <PhoneInfo/>
                    </div>
                </div>
            </div>        
            </React.Fragment>
  )
}

export default Petticoats