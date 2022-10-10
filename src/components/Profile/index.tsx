import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  FacebookLogo,
  WhatsappLogo,
} from "phosphor-react";
import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import { Portfolio } from "../Portfolio";
import { Skills } from "../Skills";
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
  ButtonSkills,
} from "./styles";

interface ProfileProps {
  onOpenContactModal: () => void;
}
export function Profile({ onOpenContactModal }: ProfileProps) {
  const { colors } = useContext(ThemeContext);
  const [buttonSelected, setButtonSelected] = useState("Portfolio");

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
            <MediaItem
              href="https://github.com/gustavohenri316"
              target="_blank"
            >
              <GithubLogo size={36} color={colors.title} />
            </MediaItem>
            <MediaItem
              href="https://www.instagram.com/gustavoh.jpg/?hl=pt-br"
              target="_blank"
            >
              <InstagramLogo size={36} color={colors.title} />
            </MediaItem>
            <MediaItem
              href="https://api.whatsapp.com/send?phone=5531993358612"
              target="_blank"
            >
              <WhatsappLogo size={36} color={colors.title} />
            </MediaItem>
            <MediaItem
              href="https://www.linkedin.com/in/gustavohenri316/"
              target="_blank"
            >
              <LinkedinLogo size={36} color={colors.title} />
            </MediaItem>
            <MediaItem
              href="https://www.facebook.com/gustavohenri316/"
              target="_blank"
            >
              <FacebookLogo size={36} color={colors.title} />
            </MediaItem>
          </SocialMedia>
        </InfoContainer>
      </Header>
      <Main>
        <Content>
          <Text>
            {" "}
            2 <br />
            Years of work <br />
            experience
          </Text>
        </Content>
        <Content>
          <Text>
            {" "}
            50+ <br />
            Completed <br />
            projects
          </Text>
        </Content>
        <Content>
          <Text>
            {" "}
            20+ <br />
            Satisfied <br />
            customers
          </Text>
        </Content>
      </Main>
      <Section>
        <ButtonCV href="/cv-gustavo-oliveira.pdf" download>
          Download CV
        </ButtonCV>
        <ButtonContact onClick={onOpenContactModal}>Contact me</ButtonContact>
      </Section>
      <PortifolioAndSkills>
        <ButtonPortfolio
          onClick={() => setButtonSelected("Portfolio")}
          selected={buttonSelected}
        >
          Portfolio
        </ButtonPortfolio>
        <ButtonSkills
          onClick={() => setButtonSelected("Skills")}
          selected={buttonSelected}
        >
          Skills
        </ButtonSkills>
      </PortifolioAndSkills>
      {buttonSelected === "Portfolio" ? <Portfolio /> : <Skills />}
    </Container>
  );
}
