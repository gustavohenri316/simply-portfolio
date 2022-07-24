import {
  Container,
  Content,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Title,
  Tr,
  Progress
} from "./styles";
import { skills } from "../../assets/Skills";

export function Skills() {
  return (
    <Container>
      <Content>
        <Title>Minhas Skills</Title>
        <Table>
          <Thead>
            <Tr>
              <Th>Tecnologia</Th>
              <Th>Nivel de conhecimento</Th>
            </Tr>
          </Thead>
          <Tbody>
            {skills.map((item) => {
              return (
                <Tr key={item.id}>
                  <Td>{item.name}</Td>
                  <Td>
                    <Progress value={item.nivel} max='100' />
                  </Td>
                </Tr>
              )
            })
            }
          </Tbody>
        </Table>
      </Content>
    </Container>
  )
}