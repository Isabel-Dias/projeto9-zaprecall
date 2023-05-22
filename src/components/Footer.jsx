import styled from "styled-components"
import React from "react";

export default function Footer() {
    const [numFinalizadas, setNumFinalizadas] = React.useState(0)
    return (
            <SCFooter data-test="footer">
                <p>{numFinalizadas}/4 concluídos</p>
            </SCFooter>
    );
};

const SCFooter = styled.div`
    background-color: #ffffff;
    width: 100%;
    height: 70px;

    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
        width: 145px;
        height: 22px;

        font-family: 'Righteous', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #333333;
        line-height: 22px;
    }
`