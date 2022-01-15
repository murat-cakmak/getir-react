export default function Card({ card }) {
    return (
        <div className="rounded-lg bg-white shadow flex flex-col items-center justify-center text-center p-14">
            <img src={card.image} alt={card.title}  className="w-[150px] h-[150px]"/>
            <div className="font-semibold mt-6 text-lg text-primary-brand-color">{card.title}</div>
            <div className="mt-2 text-sm text-gray-700">{card.description}</div>
        </div>
    );
}
