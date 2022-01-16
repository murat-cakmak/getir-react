import { AiOutlinePlus } from "react-icons/ai";

export default function ProductItem({ product }) {
    return (
        <div className="bg-white flex flex-col gap-y-1 items-center text-center p-3 text-sm font-semibold relative">
            <button className="absolute top-3 right-3 bg-white w-8 h-8 flex items-center justify-center border border-gray-200 transition rounded-lg text-brand-color shadow hover:bg-brand-color hover:text-brand-yellow hover:border-brand-color">
                <AiOutlinePlus size={16}/>
            </button>
            <img src={ product.image } alt={ product.title } className="w-[120px] h-[120px]"/>
            <div className="text-brand-color">₺{ product.price }</div>
            <div className="text-gray-900">{ product.title }</div>
            <div className="text-gray-700">{ product.alt }</div>
        </div>
    )
}
