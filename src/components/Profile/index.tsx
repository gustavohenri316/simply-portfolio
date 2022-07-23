import { GithubLogo, InstagramLogo, LinkedinLogo, FacebookLogo, TwitterLogo } from "phosphor-react"
import { useContext, useState } from "react"
import { ThemeContext } from "styled-components"
import {
  Container,
  Header,
  ImageContainer,
  Title,
  InfoContainer,
  Text,
  SocialMedia,
  ImagePerfil,
  MediaItem,
  Main,
  Content,
  ButtonCV,
  ButtonContact,
  Section,
  PortifolioAndSkills,
  ButtonPortfolio,
  ButtonSkills
} from "./styles"
export function Profile() {
  const { colors } = useContext(ThemeContext)
  const [buttonSelected, setButtonSelected] = useState('Portfolio')

  

  return (
    <Container>
      <Header>
        <ImageContainer>
          <ImagePerfil src="https://github.com/gustavohenri316.png" />
        </ImageContainer>
        <InfoContainer>
          <Title>Gustavo Henrique</Title>
          <Text>Software Developer</Text>
          <SocialMedia>
            <MediaItem href="">
              <GithubLogo size={36} color={colors.title} />
            </MediaItem>
            <MediaItem href="">
              <InstagramLogo size={36} color={colors.title} />
            </MediaItem>
            <MediaItem href="">
              <TwitterLogo size={36} color={colors.title} />
            </MediaItem>
            <MediaItem href="">
              <LinkedinLogo size={36} color={colors.title} />
            </MediaItem>
            <MediaItem href="">
              <FacebookLogo size={36} color={colors.title} />
            </MediaItem>
          </SocialMedia>
        </InfoContainer>
      </Header>
      <Main>
        <Content>
          <Text> 2 <br />
            Years of work <br />
            experience</Text>
        </Content>
        <Content>
          <Text> 50+ <br />
            Completed <br />
            projects</Text>
        </Content>
        <Content>
          <Text> 20+ <br />
            Satisfied <br />
            customers</Text>
        </Content>
      </Main>
      <Section>
        <ButtonCV>Download CV</ButtonCV>
        <ButtonContact>Contact me</ButtonContact>
      </Section>
      <PortifolioAndSkills>
        <ButtonPortfolio onClick={() => setButtonSelected('Portfolio')} selected={buttonSelected}>Portfolio</ButtonPortfolio>
        <ButtonSkills onClick={() => setButtonSelected('Skills')} selected={buttonSelected}>Skills</ButtonSkills>
      </PortifolioAndSkills>
    </Container>
  )
}