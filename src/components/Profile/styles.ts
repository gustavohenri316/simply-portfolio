import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  @media (max-widht: 750px){
  width: 600px;
}
`
export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid var(--yellow);
  align-items: center;
  justify-content: center;
  display: flex;
  `
export const ImagePerfil = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 1px solid var(--yellow);
`
export const InfoContainer = styled.div`
  display: flex;
  align-self: start;
  flex-direction: column;
  gap: 1.2rem;
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 46px;
  color: var(--title);
`
export const Text = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;
  color: var(--text);
`
export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 1.65rem;
`
export const MediaItem = styled.a`
-moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
&:hover{
  filter: brightness(0.4);
  -moz-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
`

export const Main = styled.main`
  display: flex;
  margin-top: 3rem;
  gap: 5.6rem;
  @media (max-widht: 750px){
  width: 600px;
}
`
export const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-widht: 750px){
  width: 600px;
}
`

export const Section = styled.section`
  display: flex;
  margin-top: 4.1rem;
  gap: 2.3rem;
`
export const ButtonCV = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--yellow);
  border-radius: 10px;
  width: 18.12rem;
  height: 5rem;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  letter-spacing: -0.531474px;
  color: #3D3D3D;
`
export const ButtonContact = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  border-radius: 10px;
  width: 18.12rem;
  height: 5rem;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  letter-spacing: -0.531474px;
  color: var(--title);
`

export const PortifolioAndSkills = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 47.25rem;
  height: 7.25rem;
  background: var(--primary);
  margin-top: 5.1rem;
  border-radius: 20px;

  @media (max-widht: 750px){
  width: 20.25rem;
}
`
interface ButtonProps {
  selected: string
}
export const ButtonPortfolio = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.selected === 'Portfolio' ? props.theme.colors.background : props.theme.colors.primary};
  border: none;
  border-radius: 10px;
  width: 21.85rem;
  height: 5rem;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  color: var(--title);
`
export const ButtonSkills = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.selected === 'Skills' ? props.theme.colors.background : props.theme.colors.primary};
  border: none;
  border-radius: 10px;
  width: 21.85rem;
  height: 5rem;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  color: var(--title);
`