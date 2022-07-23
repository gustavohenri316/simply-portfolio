import { Container, Content } from "./styles";
import { Projetos } from '../../assets/Projetos/github'

export function Portfolio() {
  return (
    <Container>
      {Projetos.map((item) => {
        return (
          <Content key={item.id}>
            <img src={item.img} />
            <div>
              <a href={item.vercel} target='_blank'>Ver Projeto</a>
              <a href={item.link} target='_blank'>GitHub</a>
            </div>
          </Content>
        )
      })}
    </Container>
  )
}