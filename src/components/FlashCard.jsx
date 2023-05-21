import styled from "styled-components";
import { IonIcon } from "@ionic/react";
import { playOutline } from "ionicons/icons";

export default function FlashCard() {
    return (
        <SCFlashCard>
            <p>Pergunta X</p>
            <IonIcon icon={playOutline} style={{ fontWeight: 'bold' }}/>
        </SCFlashCard>
    );
};

const SCFlashCard = styled.div`
    background-color: #FFFFFF;
    font-family: 'Righteous', cursive;
    color: #333333; 
    width: 300px;
    height: 65px;

    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-top: 25px;
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