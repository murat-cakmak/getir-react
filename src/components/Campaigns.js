import { useState, useEffect } from 'react';
import Slider from "react-slick";
import Banners from "api/banners.json";
import Title from "components/ui/Title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

function NextBtn(props) {
    const { onClick } = props;
    return (
        <button className= "text-brand-color absolute top-1/2 -right-6 -translate-y-1/2" onClick={onClick}>
            <IoIosArrowForward size={22}/>
        </button>
    )
}

function PrevBtn(props) {
    const { className, onClick } = props;
    return (
        <button className="text-brand-color absolute top-1/2 -left-6 -translate-y-1/2" onClick={onClick}>
            <IoIosArrowBack size={22}/>
        </button>
    )
}

export default function Campaigns() {
    const [banners, setBanners ] = useState([]);

    useEffect(() => {
        setBanners(Banners);
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoPlay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    };

    return (
        <div className="container mx-auto">
            <Title>Kampanyalar</Title>
            <Slider {...settings} className="-mx-2">
                { banners.length && banners.map((banner) => (
                    <div key={banner.id}>
                        <picture className="block px-2">
                            <img src={banner.image} className="rounded-md"/>
                        </picture>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
