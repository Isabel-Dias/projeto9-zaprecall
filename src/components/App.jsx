import Footer from "./Footer";
import Header from "./Header";
import CardsContainer from "./CardsContainer"
import styled from "styled-components";


export default function App() {
  return (
    <SCWholeBody>
      <Header />
			<CardsContainer />
      <Footer />
    </SCWholeBody>
  	)
};

const SCWholeBody = styled.div`
  background-color: #FB6B6B;
  width: 100%;
  height: 100%;
	margin-bottom: 70px;
`