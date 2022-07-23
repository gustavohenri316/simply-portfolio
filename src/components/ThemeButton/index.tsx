import { Moon, SunDim } from 'phosphor-react'
import { Container, Button } from './style'
import { ThemeContext } from 'styled-components'
import { useContext } from 'react'

interface ThemeButtonProps {
  theme: () => void
}

export function ThemeButton({ theme }: ThemeButtonProps) {
  const { title } = useContext(ThemeContext)
  return (
    <Container>
      <Button onClick={theme}>
        { title === 'light' ?
          <Moon size={40} color="#3D3D3D" /> : 
          <SunDim size={40} color="#A3ABB2" />
        }
      </Button>

    </Container>
  )
}
