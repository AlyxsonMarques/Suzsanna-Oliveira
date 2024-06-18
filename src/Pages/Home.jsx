import styled from "styled-components";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

const HomeVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  height: 100%;
  z-index: -2;
  filter: brightness(40%);
`;

const HomeMainWrapper = styled.main`
  padding-top: 75px;
`;

const HomeMain = styled.div`
  width: 100vw;
  height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PresentationContainer = styled.div`
  width: 100%;
  height: 100%;
`

const MainTitle = styled.h1`
  font-family: "Playfair Display", display;
  font-size: clamp(.1em, 8vw, 2em);
  font-weight: 200;
  color: var(--text-fourth);
  font-weight: 700;
  margin-left: 32px;
  font-size: 3em;

/*   position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%); */

  width: 100%;
  
  @keyframes animateTitle {
    from {
      opacity: 0%;
      transform: translateY(5rem);
    }
    to {
      opacity: 100%;
      transform: translateY(0);
    }
  }

  animation-name: animateTitle;
  animation-duration: 1s;
`;

const MainSubTitle = styled.h1`
  font-family: "Playfair Display", display;
  font-size: clamp(.1em, 8vw, 2em);
  padding: 20px;
  padding-top: 5px;
  font-weight: 200;
  color: var(--text-secondary);
  text-align: center;

/*   position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%); */

  width: 100%;
  
  @keyframes animateTitle {
    from {
      opacity: 0%;
      transform: translateY(5rem);
    }
    to {
      opacity: 100%;
      transform: translateY(0);
    }
  }

  animation-name: animateTitle;
  animation-duration: 1s;
`;

const ImageMain = styled.img`
  display: block;
  margin: auto;
  width: 50%;
`;

const Consulta = styled.button`
  display: block;
  margin: 10px auto;

  background-color: transparent;
  border: none;
  border: 1px solid var(--background-fourth);
  text-transform: uppercase;
  padding: 5px;
  font-family: 'Alta', serif;
  color: var(--white);
  cursor: pointer;
  transition: var(--def-transition-duration);
  
  &:hover {
    background-color: var(--background-fourth);
    color: var(--text-primary);
    box-shadow: 0px 0px 10px #0000006b;
  }

  backdrop-filter: blur(50px);
`;

const HomeSecond = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default function Home() {
  return (
    <>
      <Header />
      <HomeMainWrapper>
      <HomeVideo type="video/mp4" autoPlay muted mute loop src="../../assets/skin-video.mp4">
            Seu navegador não suporta vídeos com HTML5.
      </HomeVideo>

      <HomeMain>
        <MainSubTitle>Boas-vindas ao futuro da estética e do bem-estar.</MainSubTitle>
        <Consulta>Agende uma Consulta</Consulta>
      </HomeMain>

      <HomeSecond>
a
      </HomeSecond>

      </HomeMainWrapper>
    <Footer />
    </>
  );
}
