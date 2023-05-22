import styled from "styled-components";
import FlashCard  from "./FlashCard/FlashCard.jsx";
import cards from "./Deck.jsx"

export default function CardsContainer() {
    return (
        <SCCardsContainer>
            {cards.map((card, i) => <FlashCard 
                    key={i}
                    num={i}
                    selected={card.selected}
                />
            )}
        </SCCardsContainer>
    );

};



const SCCardsContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FB6B6B;

    display: flex;
    flex-direction: column;
    align-items: center;
`