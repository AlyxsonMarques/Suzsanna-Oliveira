import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  position: absolute;
  width: 100vw;
  padding-top: 10px;
`;

const HeaderContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    background-color: var(--background-primary);

    box-shadow: 0px 5px 5px #00000014;
    border-radius: 30px;
`

const HeaderLogo = styled.img`
  cursor: pointer;
  height: 100%;
  width: 100%;
`;

const HeaderSVG = styled.svg`
  width: 24px;
  fill: var(--text-primary);
  margin: 0px 20px 0px 20px;
  cursor: pointer;
  transition-duration: .1s;

  &:hover {
    fill: var(--text-fourth);
  }
`;

const MenuWrapper = styled.div`
  position: relative;
`
const MenuContainer = styled.div`
  position: absolute;
  top: 50px;
  background-color: var(--white);
  box-shadow: 0px 5px 5px #00000014;
  width: 150px;
  padding: 20px;

  &:before {
    position: absolute;
    top: -10px;
    left: 22px;
    transform: rotate(45deg);
    content: '';
    width: 20px;
    height: 20px;
    background-color: white;
  }
`

const MenuLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Roboto Slab', serif;
    font-size: clamp(.2em, 4vw, 1em);
    color: var(--text-terciary);

    &:hover {
      text-decoration: underline;
    }
`

const HeaderBottomDown = styled.hr `
    color: var(--background-secondary);
    border: none;
    border-bottom: 2px solid var(--background-secondary);
    box-shadow: 0px 1px 5px #28282852;
    margin: 0px 20px 0px 20px;
    border-radius: 5px;
    margin-top: 3px;
`

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
          <MenuWrapper>
            <HeaderSVG
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="currentColor"
              class="bi bi-three-dots"
              viewBox="0 0 16 16"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
            </HeaderSVG>
            <MenuContainer>
              <MenuLink>
                Tratamentos
              </MenuLink>
              <MenuLink>
                Contato
              </MenuLink>
              <MenuLink>
                Sobre Mim
              </MenuLink>
              <MenuLink>
                Depoimentos
              </MenuLink>
            </MenuContainer>
          </MenuWrapper>
          <Link to="/">
              <HeaderLogo src="https://placehold.co/50x50" alt="" />
          </Link>
          <a href="https://web.whatsapp.com" target="_blank">
              <HeaderSVG
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                class="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </HeaderSVG>
          </a>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
