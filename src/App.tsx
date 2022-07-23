
import { GlobalStyles } from "./assets/styles/global";
import { Profile } from "./components/Profile";
import { ThemeButton } from "./components/ThemeButton";
import { ThemeProvider, DefaultTheme } from "styled-components";
import light from "./assets/styles/theme/light";
import dark from "./assets/styles/theme/dark";
import { usePersistedState } from "./utils/usePersistedState";

export function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  function handleTheme(){
    setTheme(theme.title === 'light' ? dark : light) 
  }
  return (
    <ThemeProvider theme={theme}>
      <ThemeButton theme={handleTheme}/>
      <GlobalStyles/>
      <Profile />
    </ThemeProvider>
  )
}


