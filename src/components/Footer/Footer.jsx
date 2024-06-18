import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100vw;
  height: 100vh;
  background-color: var(--background-terciary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 50px;
`;

const SocialIcon = styled.div`
  display: grid;
  place-items: center;
  width: 25px;
  height: 25px;
  background-color: var(--background-primary);
  
  border-radius: 12.5px;
  padding: 5px;
  cursor: pointer;
  color: var(--text-fifth);
  margin: 10px 10px 0px 10px;

  &:hover {
    background-color: var(--text-fifth);
    fill: var(--text-secondary);
    color: var(--text-secondary);
  }
`;

const SocialMedias = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const InformationBox = styled.section`
  padding: 0px 20px 0px 20px;
`;

const Information = styled.section`
  font-family: 'Alta', serif;
  font-size: clamp(.4em, 4vw, 1em);
  margin: 10px auto;
`;

const InformationTitle = styled.h3`
  color: var(--white);
  text-transform: uppercase;
  font-weight: 400;
`;

const InformationContent = styled.p`
  color: var(--text-fourth);
  font-weight: 300;
`;

const Spacer = styled.hr`
  margin: 10px auto;
  height: 0px;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  width: 80%;
`;

const Logo = styled.img`
  display: block;
  width: 100px;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <SocialMedias>
        <SocialIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75%"
            height="75%"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        </SocialIcon>

        <SocialIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75%"
            height="75%"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
          </svg>
        </SocialIcon>

        <SocialIcon>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="75%" height="75%" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
        </SocialIcon>
      </SocialMedias>

      <Spacer />

      <InformationBox>
        <Information>
          <InformationTitle>Endereço</InformationTitle>
          <InformationContent>Av. Pref. Carlos Ferreira Lopes, 1233 - Vila Mogilar, Mogi das Cruzes - SP, 08773-380</InformationContent>
        </Information>  
        <Information>
          <InformationTitle>Contato</InformationTitle>
          <InformationContent>(11) 4002-8922</InformationContent>
        </Information>
      </InformationBox>

      <Spacer />

      <Logo src="../../assets/logo.png" />

    </FooterWrapper>
  );
}
