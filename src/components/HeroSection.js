import React, { useState } from 'react';
import Slider from "react-slick";
import ReactFlagsSelect from 'react-flags-select';


export default function HeroSection() {
    const [selected, setSelected] = useState('TR');
    const phones = {
        US: '+1',
        DE: '+2',
        TR: '+90',
        IT: '+3',
        IN: '+4',
    }

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="relative h-[600px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
            <Slider {...settings}>
                <div>
                    <h3><img className="w-full h-[600px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg"/></h3>
                </div>
                <div>
                    <h3><img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"/></h3>
                </div>
            </Slider>
            <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
                <div>
                    <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"/>
                    <h3 className="mt-8 text-white text-4xl font-semibold">Dakikalar içinde <br/> kapınızda</h3>
                </div>
                <div className="w-[400px] rounded-lg bg-gray-50 p-6 gap-y-3">
                    <h4 className="text-primary-brand-color text-center font-semibold mb-4 font-semibold">Giriş yap veya kayıt ol</h4>
                   <div className="grid gap-y-3">
                       <div className="flex gap-x-2">
                           <ReactFlagsSelect
                               countries={Object.keys(phones)}
                               customLabels={phones}
                               selected={selected}
                               onSelect={code => setSelected(code)}
                               className="flag-select"
                           />
                           <label className="flex-1 relative block">
                               <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors
                                hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2"/>
                               <span className="absolute h-full top-0 left-0 px-4 flex text-sm text-gray-700 items-center transition-all
                                peer-focus:h-6 peer-focus:items-unset peer-focus:text-primary-brand-color peer-focus:text-xs
                                peer-valid:h-6 peer-valid:items-unset peer-valid:text-primary-brand-color peer-valid:text-xs">Telefon Numarası</span>
                           </label>
                       </div>
                       <button className="bg-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm text-primary-brand-color font-semibold
                                transition-colors hover:bg-primary-brand-color hover:text-brand-yellow">
                           Telefon numarası ile devam et
                       </button>
                   </div>
                </div>
            </div>
        </div>
    );
}
