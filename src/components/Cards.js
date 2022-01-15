import { useState, useEffect } from 'react';
import Card from 'components/ui/Card';
import CardsData from 'api/cards.json';

export default function Cards() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
       setCards(CardsData)
    });



    return (
        <div className="grid grid-cols-3 gap-x-4 mt-10">
            { cards.length && cards.map((card, index) => <Card index={index} card={card} />) }
        </div>
    )
}
