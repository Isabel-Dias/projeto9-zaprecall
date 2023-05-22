import buttonPlay from "../../assets/seta_play.png";
import buttonFlip from "../../assets/seta_virar.png";
import React from "react";
import styled from "styled-components";
import cards from "../Deck";

const newDeck = [];

export default function FlashCard(props) {
    let index = props.num;
    const [text, setText] = React.useState(`Pergunta  ${index + 1}`);
    const [nameButton, setNameButton] = React.useState(`${buttonPlay}`);
    const [datatest, setDataTest] = React.useState("play-btn")

    return (
        <>
            <SCFlashCard div data-test="flashcard">
                <p data-test="flashcard-text" >{text}</p>
                <img data-test={datatest} onClick={() => selectCard(index)} src={nameButton} alt="button-play" />
            </SCFlashCard>
        </>
        
    );
    
    function selectCard(index) {
        let cardStatus = cards[index].selected
        if(cardStatus == false){
            cardStatus = true;
            setText(cards[index].question)
            setNameButton(`${buttonFlip}`)
            setDataTest("turn-btn")
        }
    }

    
};

const SCFlashCard = styled.div`
    background-color: #FFFFFF;
    font-family: 'Righteous', cursive;
    color: #333333; 
    width: 300px;
    height: 65px;

    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-top: 15px;
    margin-bottom: 10px;
    padding: 0 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    ion-icon{
        width: 20px;
        height: 23px;
        color: #333333;
    }
`



