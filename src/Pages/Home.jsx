import styled from "styled-components";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

const HomeMainWrapper = styled.main`
  padding-top: 75px;
  background: var(--background-primary);
  width: 100vw;
  height: 100vh;
`;

const HomeMain = styled.div`
  width: 100vw;
  height: 100%;
`

const PresentationContainer = styled.div`
  width: 100%;
`

const MainTitle = styled.h1`
  font-family: "Playfair Display", display;
  font-size: clamp(.2em, 12vw, 2em);
  padding: 20px;
  font-weight: 200;
`

const ImageMain = styled.img`
  display: block;
  margin: auto;
  width: 50%;
  height: 50%;
`;

export default function Home() {
  return (
    <>
      <Header />
      <HomeMainWrapper>
        <HomeMain>
          <PresentationContainer>
            <MainTitle>Boas-vindas ao futuro da estética e do bem-estar.</MainTitle>
            <ImageMain src="https://placehold.co/50x50" />
          </PresentationContainer>
        </HomeMain>
      </HomeMainWrapper>
      <Footer />
    </>
  );
}
