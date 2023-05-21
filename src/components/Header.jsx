import styled from 'styled-components';
import zrlogo from '../assets/logo.png'

export default function Header() {
    return (
        <SCheader>
            <img src={zrlogo} alt="site-logo" />
            <h1>ZapRecall</h1>
        </SCheader>
    );
};

const SCheader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FB6B6B;

    margin: 0 60px;
    
    img{
        width: 52px;
        height: 60px;
    }
    h1{
        color: #FFFFFF;
        font-family: 'Righteous', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.012em;
        padding: 50px 30px;
    }
`